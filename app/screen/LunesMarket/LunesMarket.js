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

class LunesMarket extends Component {
  componentDidMount() {
    const { requestHistoricData } = this.props;
    requestHistoricData();
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
          <LunesTabCoins />
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
            <LunesQuotation />
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
