

import React from 'react';
import { View, Text } from 'react-native';
import { AppStyle } from './theme';

export default class LogoSmall extends React.Component {
  render() {
    return (
      <View>
        <Text style={AppStyle.screen.logoSmall}>
          Lun<Text style={AppStyle.screen.logoGreenSmall}>e</Text>s
        </Text>
      </View>
    );
  }
}
