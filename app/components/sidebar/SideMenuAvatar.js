import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PhotoUpload from 'react-native-photo-upload';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { GetDefaultURIAvatar } from '../../utils/stringUtils';
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
        <PhotoUpload
          onPhotoSelect={avatar => {
            if (avatar) {
              console.log('Image base64 string: ', avatar);
            }
          }}>
          <Image
            style={{
              paddingVertical: 30,
              width: 150,
              height: 150,
              borderRadius: 75,
            }}
            resizeMode="cover"
            source={{
              uri: GetDefaultURIAvatar(),
            }}
          />
        </PhotoUpload>

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
