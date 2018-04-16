import React from 'react';
import { View } from 'react-native';
import tabStyle from './style';

export default class TabContent extends React.Component {
  canRender() {
    return this.props.isVisible;
  }
  render() {
    return (
      <View style={tabStyle.tabContent}>
        {this.canRender() && this.props.children}
      </View>
    );
  }
}
