/* eslint-disable */
import React, { Component } from 'react';
import {
  AsyncStorage,
  Text,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Container } from 'native-base';
import LunesTabCoins from '../../native-base-theme/components/LunesTabCoins';
import LunesBalanceText from '../../native-base-theme/components/LunesBalanceText';
import LunesQuotation from '../../native-base-theme/components/LunesQuotation';
import LunesPaymentButton from '../../native-base-theme/components/LunesPaymentButton';
import BosonColors from '../../native-base-theme/variables/bosonColor';
import * as BalanceUtils from '../../utils/balance-utils';

import I18N from '../../i18n/i18n';
import io from 'socket.io-client';

const options = {
  pingTimeout: 85000,
  transports: ['websocket'],
  allowUpgrades: false,
  cookie: false,
};

import CCC from '../../utils/ccc-streamer-utilities';

class LunesMarket extends Component {
  constructor(props) {
    super();
    this.exchange = I18N.t('CURRENCY_EXCHANGE');
    this.currencyTo = I18N.t('CURRENCY_USER');
    this.subscription = [
      `5~CCCAGG~BTC~${this.currencyTo}`,
      '5~CCCAGG~ETH~USD',
      `5~CCCAGG~LTC~${this.currencyTo}`,
    ];
    // 1. set url
    this.socket = io('https://streamer.cryptocompare.com/', options);
    // 2. emmit (connect)
    this.socket.emit('SubAdd', { subs: this.subscription });
  }

  componentDidMount() {
    const { requestHistoricData, updateTicker, requestPrice } = this.props;
    requestHistoricData();
    // requestPrice();
    console.ignoredYellowBox = ['Setting a timer'];
    this.onMessage();
  }

  onMessage() {
    const { updateTicker } = this.props;
    const coinPairs = {};

    // 3. receive messages
    this.socket.on('m', message => {
      const messageType = message.substring(0, message.indexOf('~'));
      if (messageType == CCC.STATIC.TYPE.CURRENTAGG) {
        const res = CCC.CURRENT.unpack(message);
        if (typeof res.PRICE !== 'undefined') {
          const fromSymbol = res.FROMSYMBOL;
          const toSymbol = res.TOSYMBOL;
          const fsym = CCC.STATIC.CURRENCY.getSymbol(fromSymbol);
          const tsym = CCC.STATIC.CURRENCY.getSymbol(toSymbol);
          const pair = fromSymbol;

          // CHANGE24HOUR, CHANGE24HOURPCT, PRICE, CHANGE

          if (!coinPairs.hasOwnProperty(pair)) {
            coinPairs[pair] = {};
          }

          // CHANGE
          if (typeof res.OPEN24HOUR !== 'undefined') {
            coinPairs[pair].OPEN24HOUR = res.OPEN24HOUR;
          }
          coinPairs[pair].CHANGE24HOUR = res.CHANGE24HOUR || '-';
          coinPairs[pair].CHANGE24HOURPCT = res.CHANGE24HOURPCT || '-';
          coinPairs[pair].PRICE = res.PRICE;

          if (typeof coinPairs[pair].OPEN24HOUR !== 'undefined') {
            coinPairs[pair].CHANGE24HOUR = CCC.convertValueToDisplay(
              tsym,
              coinPairs[pair].PRICE - coinPairs[pair].OPEN24HOUR
            );

            coinPairs[pair].CHANGE24HOURPCT = `${(
              (coinPairs[pair].PRICE - coinPairs[pair].OPEN24HOUR) /
              coinPairs[pair].OPEN24HOUR *
              100
            ).toFixed(2)}%`;

            if (coinPairs[pair].PRICE > coinPairs[pair].OPEN24HOUR) {
              coinPairs[pair].CHANGE = 'up';
            } else if (coinPairs[pair].PRICE < coinPairs[pair].OPEN24HOUR) {
              coinPairs[pair].CHANGE = 'down';
            }
          }

          coinPairs[pair].CURRENTPRICE = CCC.convertValueToDisplay(
            tsym,
            coinPairs[pair].PRICE
          );
          coinPairs[pair].DISPLAYPRICE = `1 BTC | ${
            coinPairs[pair].CURRENTPRICE
          }`;

          coinPairs[pair].COIN = pair;

          updateTicker(coinPairs[pair]);
        }
      }
    });
  }

  componentWillUnmount() {
    this.socket.emit('SubRemove', this.subscription);
  }

  getBalance() {
    const { currentCoinSelected, balanceData } = this.props;
    return BalanceUtils.getBalance(currentCoinSelected, balanceData);
  }

  renderIconCoin() {
    return BalanceUtils.getIconCoin(this.props.currentCoinSelected);
  }

  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor={BosonColors.$bosonPrimary}
          barStyle="light-content"
        />
        <View style={{ flexDirection: 'row' }}>
          <LunesTabCoins
            ticker={this.props.ticker}
            doAction={this.props.doAction}
          />
        </View>
        <View
          style={{
            flex: 4,
            justifyContent: 'space-between',
            width: Dimensions.get('window').width,
          }}>
          <LunesBalanceText
            icon={this.renderIconCoin()}
            balance={this.getBalance()}
          />
          <LunesQuotation
            ticker={this.props.ticker}
            currentCoinSelected={this.props.currentCoinSelected}
          />
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
