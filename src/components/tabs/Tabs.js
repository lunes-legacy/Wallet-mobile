import React from 'react';
import { View } from 'react-native';
import tabStyle from './style';

export default class Tabs extends React.Component {
  render() {
    return <View style={tabStyle.tabs}>{this.props.children}</View>;
  }
}
