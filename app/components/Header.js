// @flow

import React from 'react';
import { View, TouchableOpacity, TouchableHighlight, Text } from 'react-native';
import { AppStyle } from './theme';
import MenuButton from './styles/MenuButton';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class Header extends React.Component {
  render() {
    const { navigation, onPress } = this.props;

    return (
      <View style={AppStyle.screen.header}>
        <TouchableHighlight
          style={{ padding: MenuButton.padding }}
          onPress={onPress}>
          <Text>
            <FontAwesome style={MenuButton}>{Icons.bars}</FontAwesome>
          </Text>
        </TouchableHighlight>
        <TouchableOpacity
          style={{ padding: MenuButton.back.padding }}
          onPress={() => navigation.goBack()}>
          <Text>
            <FontAwesome style={MenuButton.back}>
              {Icons.chevronLeft}
            </FontAwesome>
          </Text>
        </TouchableOpacity>
        <Text style={AppStyle.screen.headerText}> My Header </Text>
        <TouchableOpacity
          style={{
            paddingVertical: MenuButton.next.paddingVertical,
            paddingHorizontal: MenuButton.next.paddingHorizontal,
          }}
          onPress={() => navigation.goMenu()}>
          <Text>
            <FontAwesome style={MenuButton.next}>
              {Icons.chevronRight}
            </FontAwesome>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
