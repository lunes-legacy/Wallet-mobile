import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Container } from 'native-base';
import { Logo, Base, Button } from '../../components';
import LunesTabCoins from '../../native-base-theme/components/LunesTabCoins';
import LunesBalanceText from '../../native-base-theme/components/LunesBalanceText';
import LunesQuotation from '../../native-base-theme/components/LunesQuotation';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import LunesPaymentButton from '../../native-base-theme/components/LunesPaymentButton';
import LunesChartMain from '../../native-base-theme/components/LunesChartMain';
import LunesSwiper from '../../native-base-theme/components/LunesSwiper';
import BosonColors from '../../native-base-theme/variables/bosonColor';

import I18N from '../../i18n/i18n';
import io from 'socket.io-client';

import CCC from '../../utils/ccc-streamer-utilities';

class LunesMarket extends Component {
  constructor() {
    super();
    this.exchange = I18N.t('CURRENCY_EXCHANGE');
    this.currencyTo = I18N.t('CURRENCY_USER');
    this.subscription = [
      `5~CCCAGG~BTC~${this.currencyTo}`,
      `5~CCCAGG~ETH~USD`,
      `5~CCCAGG~LTC~${this.currencyTo}`,
    ];
  }

  componentDidMount() {
    const { requestHistoricData, updateTicker, requestPrice } = this.props;
    requestHistoricData();
    // requestPrice();
    console.ignoredYellowBox = ['Setting a timer'];

    var coinPairs = {};

    // 1. set url
    const socket = io.connect('https://streamer.cryptocompare.com/');

    // 2. emmit (connect)
    socket.emit('SubAdd', { subs: this.subscription });

    // 2. receive messages
    socket.on('m', function(message) {
      const messageType = message.substring(0, message.indexOf('~'));
      if (messageType == CCC.STATIC.TYPE.CURRENTAGG) {
        const res = CCC.CURRENT.unpack(message);
        const fromSymbol = res['FROMSYMBOL'];
        const toSymbol = res['TOSYMBOL'];
        const fsym = CCC.STATIC.CURRENCY.getSymbol(fromSymbol);
        const tsym = CCC.STATIC.CURRENCY.getSymbol(toSymbol);
        const pair = fromSymbol;

        // CHANGE24HOUR, CHANGE24HOURPCT, PRICE, CHANGE

        if (!coinPairs.hasOwnProperty(pair)) {
          coinPairs[pair] = {};
        }

        // CHANGE
        if (typeof res['OPEN24HOUR'] !== 'undefined') {
          coinPairs[pair]['OPEN24HOUR'] = res['OPEN24HOUR'];
        }
        coinPairs[pair]['CHANGE24HOUR'] = res['CHANGE24HOUR'] || '-';
        coinPairs[pair]['CHANGE24HOURPCT'] = res['CHANGE24HOURPCT'] || '-';
        coinPairs[pair]['PRICE'] = res['PRICE'];

        if (typeof coinPairs[pair]['OPEN24HOUR'] !== 'undefined') {
          coinPairs[pair]['CHANGE24HOUR'] = CCC.convertValueToDisplay(
            tsym,
            coinPairs[pair]['PRICE'] - coinPairs[pair]['OPEN24HOUR']
          );

          coinPairs[pair]['CHANGE24HOURPCT'] =
            (
              (coinPairs[pair]['PRICE'] - coinPairs[pair]['OPEN24HOUR']) /
              coinPairs[pair]['OPEN24HOUR'] *
              100
            ).toFixed(2) + '%';

          if (coinPairs[pair]['PRICE'] > coinPairs[pair]['OPEN24HOUR']) {
            coinPairs[pair]['CHANGE'] = 'up';
          } else if (coinPairs[pair]['PRICE'] < coinPairs[pair]['OPEN24HOUR']) {
            coinPairs[pair]['CHANGE'] = 'down';
          }
        }

        coinPairs[pair]['CURRENTPRICE'] = CCC.convertValueToDisplay(
          tsym,
          coinPairs[pair]['PRICE']
        );
        coinPairs[pair]['DISPLAYPRICE'] = `1 BTC | ${
          coinPairs[pair]['CURRENTPRICE']
        }`;

        coinPairs[pair]['COIN'] = pair;

        updateTicker(coinPairs[pair]);

        // console.log('');
        // console.log('');

        // if (res['PRICE']) {
        //   const currentPrice = CCC.convertValueToDisplay(tsym, res['PRICE']);
        //   const displayPrice = `1 BTC | ${currentPrice}`;
        //   const ticker = {
        //     displayPrice: displayPrice,
        //     currentPrice: currentPrice,
        //     change24hour: change24hour,
        //     change24hourPct: change24hourPct,
        //     change: change,
        //   };

        //   updateTicker(ticker);
        // }
      }
    });
  }

  componentWillUnmount() {
    socket.emit('SubRemove', this.subscription);
  }

  getBalance() {
    let finalBalance =
      this.props && this.props.balanceData
        ? this.props.balanceData.confirmed_balance
        : 0;
    return finalBalance;
  }
  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor={BosonColors.$bosonPrimary}
          barStyle="light-content"
        />
        <View style={{ flexDirection: 'row' }}>
          <LunesTabCoins ticker={this.props.ticker} />
        </View>
        <View
          style={{
            flex: 4,
            justifyContent: 'space-between',
            width: Dimensions.get('window').width,
          }}>
          <LunesBalanceText balance={this.getBalance()} />
          <LunesSwiper
            dots
            dotsBottom={0}
            dotsColor="rgba(255, 255, 255, 0.25)"
            dotsColorActive="rgba(255, 255, 255, 0.75)">
            <LunesQuotation ticker={this.props.ticker} />
            <LunesChartMain
              historic={this.props.historic}
              range={this.props.range}
              changeRange={this.props.changeRange}
            />
          </LunesSwiper>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <LunesPaymentButton />
        </View>
      </Container>
    );
  }
}

export default LunesMarket;
