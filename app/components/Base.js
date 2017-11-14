// @flow

import React from 'react';
import { View } from 'react-native';
import { AppStyle } from './theme';

export default class Base extends React.Component {
  render() {
    return <View style={AppStyle.screen.base}>{this.props.children}</View>;
  }
}
