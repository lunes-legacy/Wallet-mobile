// @flow

import React from 'react';
import { View, TouchableOpacity, TouchableHighlight, Text } from 'react-native';
import { AppStyle } from './theme';
import LogoSmall from './LogoSmall';
import MenuButton from './styles/MenuButton';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ModalDropdown from 'react-native-modal-dropdown';

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
            <Icon name="chevron-left" size={20} color={MenuButton.back.color} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={AppStyle.screen.headerLogo}>
          <LogoSmall />
        </TouchableOpacity>
        <ModalDropdown
          options={['Logout']}
          style={{ padding: MenuButton.back.padding, width: 100 }}
          dropdownStyle={{height: 36, marginTop:14}}
          onSelect={(index,optionText) => console.log(index,optionText)}
        >
          <Text>
            <Icon name="ellipsis-v" size={20} color={MenuButton.back.color} />
          </Text>
        </ModalDropdown>
      </View>
    );
  }
}
