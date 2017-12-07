// @flow

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { AppStyle } from './theme';

export default class Header extends React.Component {
  render() {
    return (
      <View style={AppStyle.screen.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text> BACK </Text>
        </TouchableOpacity>
        <Text style={AppStyle.screen.headerText}> My Header </Text>
        <TouchableOpacity onPress={() => navigation.goMenu()}>
          <Text> NEXT </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
