/* eslint-disable */
// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import commonColor from './../variables/commonColor';
import BosonColors from './../variables/bosonColor';

export default class LunesLogo extends React.Component {
  render() {
    let sizeLogo = {};
    if (this.props.size) {
      sizeLogo = { fontSize: this.props.size };
    }
    return (
      <View>
        <Text style={[styles.logo, sizeLogo]}>
          Lun<Text style={styles.textGreen}>e</Text>s
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    fontSize: commonColor.sizeLogo,
    textAlign: 'center',
    margin: 10,
    color: BosonColors.$bosonWhite,
    fontFamily: commonColor.fontLogo,
  },
  textGreen: {
    color: BosonColors.$bosonGreen,
  },
});
