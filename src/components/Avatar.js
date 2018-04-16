/* eslint-disable */
import React, { Component } from 'react';
import { View } from 'react-native';
import UserAvatar from 'react-native-user-avatar';

class Avatar extends Component {
  render() {
    const { imageSrc, name, size, color } = this.props;

    return (
      <View>
        {imageSrc ? (
          <UserAvatar name={name} src={imageSrc} size={size} color={color} />
        ) : (
          <UserAvatar name={name} size={size} color={color} />
        )}
      </View>
    );
  }
}

export default Avatar;
