import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PhotoUpload from 'react-native-photo-upload';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { GetDefaultURIAvatar } from '../../utils/stringUtils';
import styles from '../styles/SideMenu';
import { navigate } from '../../config/routes';

class SideMenuAvatar extends Component {
  componentWillMount() {
    const { _id, accessToken } = this.props.userInfo;
    this.props.requestObtain({ _id, accessToken });
  }

  render() {
    const { userInfo } = this.props;

    const avatar =
      this.props.userProfile &&
      this.props.userProfile.personalInfo &&
      this.props.userProfile.personalInfo.avatar
        ? this.props.userProfile.personalInfo.avatar.small
        : null;
    const user = {
      name: userInfo.fullname || ' ',
      imageSrc: null,
      email: userInfo.email,
      avatar,
    };

    return (
      <View style={styles.avatar}>
        <PhotoUpload>
          <Image
            style={{
              paddingVertical: 30,
              width: 150,
              height: 150,
              borderRadius: 75,
            }}
            resizeMode="cover"
            source={{
              uri: user.avatar
                ? `data:image/png;base64,${user.avatar}`
                : GetDefaultURIAvatar(),
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
