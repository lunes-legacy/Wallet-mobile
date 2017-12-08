// @flow

import React from 'react';
import { View, TouchableOpacity, TouchableHighlight, Text } from 'react-native';
import { AppStyle } from './theme';
import LogoSmall from './LogoSmall';
import MenuButton from './styles/MenuButton';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Avatar from './Avatar';
import styles from './styles/SideMenu';

export default class Header extends React.Component {
  render() {
    const { navigation, onPress } = this.props;
    const user = {
      name: 'User Name',
      imageSrc: null,
      email: 'user.lunes@lunes.com',
    };

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
        <TouchableOpacity style={styles.avatar}>
          <Avatar
            name={user.name}
            src={user.imageSrc}
            size={styles.avatarSmallSize}
            color={styles.avatarColor}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
