import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Avatar from '../Avatar';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
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
        <Avatar
          name={user.name}
          src={user.imageSrc}
          size={styles.avatarSize}
          color={styles.avatarColor}
        />
        <TouchableOpacity onPress={() => console.log('Não implementado')}>
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
