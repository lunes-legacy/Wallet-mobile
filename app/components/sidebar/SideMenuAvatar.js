import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Avatar from '../Avatar';
import styles from '../styles/SideMenu';
import { navigate } from '../../config/routes';

class SideMenuAvatar extends Component {
  render() {
    const { navigation, userInfo } = this.props;

    const user = {
      name: userInfo.fullname || ' ',
      imageSrc: null,
      email: userInfo.email,
    };

    return (
      <View style={styles.avatar}>
        <Avatar
          name={user.name}
          src={user.imageSrc}
          size={styles.avatarSize}
          color={styles.avatarColor}
        />
        <TouchableOpacity onPress={() => navigate('Profile')}>
          <View>
            <Text style={styles.label.name}>
              {`${user.name}   `}
              <Icon name="pencil" size={15} color="#fff" />
            </Text>
            <Text style={styles.label.email}>{user.email}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SideMenuAvatar;
