import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tabStyle from './style';

export default class TabLink extends React.Component {
  render() {
    const isSelected = this.props.isSelected ? tabStyle.tabLinkSelected : {};
    return (
      <TouchableOpacity
        onPress={e => {
          this.props.changeSelectedTab(this.props.tabId);
        }}
      >
        <View style={{ ...tabStyle.tabLink, ...isSelected }}>
          <Text style={tabStyle.tabLinkTitle}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
