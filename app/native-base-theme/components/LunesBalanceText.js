/* eslint-disable */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import BosonColors from '../variables/bosonColor';

// CONVERT DECIMALS
import { MoneyClass } from '../../utils/moneyConvert';
import { numeral } from '../../utils/numeral';

const money = new MoneyClass();

const LunesBalanceText = ({ balance, icon }) => (
  <View style={styles.container}>
    <View style={styles.containerInline}>
      <Image
        style={{ width: 23, height: 23 }}
        source={{
          uri: icon,
        }}
      />
      <Text style={styles.text}>
        {numeral(money.conevertCoin('btc', balance)).format('0,0.00000000')}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  containerInline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default LunesBalanceText;
