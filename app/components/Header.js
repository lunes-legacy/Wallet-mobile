// @flow

import React from 'react';
import { View, TouchableOpacity, TouchableHighlight, Text } from 'react-native';
import { AppStyle } from './theme';
import MenuButton from './styles/MenuButton';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Header extends React.Component {
  render() {
    const { navigation, onPress } = this.props;

    return (
      <View style={AppStyle.screen.header}>
        <TouchableHighlight
          style={{ padding: MenuButton.padding }}
          onPress={onPress}>
          <Text>
            <Icon name="navicon" size={20} color="#fff" />
          </Text>
        </TouchableHighlight>
        <TouchableOpacity
          style={{ padding: MenuButton.back.padding }}
          onPress={() => navigation.goBack()}>
          <Text>
            <Icon name="chevron-left" size={20} color="#fff" />
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
            <Icon name="chevron-right" size={20} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
