/* eslint-disable */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import BosonColors from '../variables/bosonColor';
import { LunesTabCoinsConstant } from '../constants';
import { RenderColorWhiteToCoinSelected } from '../utils';

const renderColorPrice = status => {
  if (status === 'up') {
    return BosonColors.$bosonLightGreen;
  } else if (status === 'down') {
    return BosonColors.$bosonDarkYellow;
  }
  return BosonColors.$bosonLightGrey;
};

const LunesTabCoinsPrice = ({ tabCoinPrice }) => (
  <Text
    style={[
      styles.price,
      { color: renderColorPrice(tabCoinPrice.price.status) },
      RenderColorWhiteToCoinSelected(tabCoinPrice),
    ]}>
    {tabCoinPrice.price.percent}
  </Text>
);

const styles = StyleSheet.create({
  price: {
    fontSize: 8,
  },
});

export default LunesTabCoinsPrice;
