import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { requestSignout } from 'lunesmobilewallet/app/screens/Signin/actions';
import PhotoUpload from 'react-native-photo-upload';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { GetDefaultURIAvatar } from '../../utils/stringUtils';
import styles from '../styles/SideMenu';
import { navigate } from '../../config/routes';

const getSpace = space =>
  Array.from({ length: space }, () => ' ')
    .join()
    .replace(/,/g, '');

class SideMenuLogout extends Component {
  render() {
    const { menuOption, space, disabled } = this.props;
    return (
      <Text
        style={styles.navItemStyle}
        onPress={() => {
          const { userInfo } = this.props;
          this.props.requestSignout(userInfo);
          navigate('Signin');
        }}>
        <Text>{`${menuOption}${getSpace(space)}`}</Text>
      </Text>
    );
  }
}

export default SideMenuLogout;
