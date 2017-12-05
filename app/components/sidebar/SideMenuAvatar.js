import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import styles from '../styles/SideMenu';

class SideMenuAvatar extends Component {
  render() {
    const { navigation } = this.props;

    const user = {
      name: 'User Name',
      imageSrc: null,
      email: 'user.lunes@lunes.com',
    };

    return (
      <View style={styles.avatar}>
        {user.imageSrc ? (
          <UserAvatar
            name={user.name}
            src={user.imageSrc}
            size={styles.avatar.size}
            color={styles.avatar.color}
          />
        ) : (
          <UserAvatar
            name={user.name}
            size={styles.avatar.size}
            color={styles.avatar.color}
          />
        )}
        <TouchableOpacity onPress={() => console.log('Não implementado')}>
          <View>
            <Text style={styles.avatar.label.name}>
              {`${user.name}   `}
              <FontAwesome style={{ fontSize: 10 }}>{Icons.pencil}</FontAwesome>
            </Text>
            <Text style={styles.avatar.label.email}>{user.email}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SideMenuAvatar;
