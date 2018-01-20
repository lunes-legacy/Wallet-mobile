import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Container } from 'native-base';
import { Logo, Base, Button } from '../../components';
import LunesTabCoins from '../../native-base-theme/components/LunesTabCoins';
import LunesBalanceText from '../../native-base-theme/components/LunesBalanceText';
import LunesQuotation from '../../native-base-theme/components/LunesQuotation';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import LunesPaymentButton from '../../native-base-theme/components/LunesPaymentButton';
import BosonColors from '../../native-base-theme/variables/bosonColor';

class LunesMarket extends Component {
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
          }}>
          <LunesBalanceText balance={this.props.balanceData.final_balance} />
          <LunesQuotation />
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
