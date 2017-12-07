// @flow

import React from 'react';
import { View, StatusBar } from 'react-native';
import { AppStyle, Colors } from './theme';

export default class Base extends React.Component {
  render() {
    return (
      <View style={AppStyle.screen.base}>
        <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
        {this.props.children}
      </View>
    );
  }
}
