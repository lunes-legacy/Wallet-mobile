import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { AppStyle } from './theme';

export default class Logo extends Component {
  render() {
    return (
      <View>
        <Text style={AppStyle.screen.logo}>
          Lun<Text style={AppStyle.screen.logoGreen}>e</Text>s
        </Text>
      </View>
    );
  }
}
