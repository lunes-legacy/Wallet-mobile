import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import BosonColors from '../variables/bosonColor';
import { LunesTabCoinsConstant } from '../constants';
import { RenderColorCoinUtil, RenderIconKPIUtil } from '../utils';

const renderIconKPI = status => {
  return RenderIconKPIUtil(status);
};

const renderFontSizeKPI = kpi => {
  if (kpi.isCoinSelected) {
    return {
      fontSize: 18,
      color: RenderColorCoinUtil(kpi.name),
    };
  }
  return { fontSize: 18, color: '#fff' };
};

const LunesTabCoinsKPI = ({ kpi }) => {
  return (
    <View style={styles.container}>
      <View style={{ paddingRight: 5 }}>{renderIconKPI(kpi.price.status)}</View>
      <Text style={[renderFontSizeKPI(kpi)]}>{kpi.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LunesTabCoinsKPI;
