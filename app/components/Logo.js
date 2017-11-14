// @flow

import React from 'react';
import { View, Text } from 'react-native';
import { AppStyle } from './theme';

export default class Logo extends React.Component {
  render() {
    return (
      <View style={AppStyle.screen.base}>
        <Text style={AppStyle.screen.logo}>
          Lun<Text style={AppStyle.screen.logoGreen}>e</Text>s
        </Text>
      </View>
    );
  }
}
