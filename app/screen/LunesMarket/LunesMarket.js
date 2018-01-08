import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Container } from 'native-base';
import { Logo, Base, Button } from '../../components';
import LunesTabCoins from '../../native-base-theme/components/LunesTabCoins';
import LunesBalanceText from '../../native-base-theme/components/LunesBalanceText';
import LunesQuotation from '../../native-base-theme/components/LunesQuotation';
import LunesLoading from '../../native-base-theme/components/LunesLoading';

class LunesMarket extends Component {
  render() {
    return (
      <Container>
        <View style={{ flexDirection: 'row' }}>
          <LunesTabCoins />
        </View>
        <View
          style={{
            flex: 4,
            justifyContent: 'space-between',
          }}>
          <LunesBalanceText balance="0.02293793" />
          <LunesQuotation />
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <Button text="X" type="rounded-opened" />
        </View>
      </Container>
    );
  }
}

export default LunesMarket;
