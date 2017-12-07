import React from 'react';
import { StackNavigator, Button, TouchableHighlight } from 'react-navigation';
import { View } from 'react-native';

import { Header } from '../components';

import { Introduction } from '../screen/Introduction';
import { SigninContainer } from '../screen/Signin';
import { Confirmation } from '../screen/Confirmation';

const Left = ({ onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <View>Oi</View>
  </TouchableHighlight>
);

const RootNavigator = StackNavigator({
  Confirmation: {
    screen: Confirmation,
    navigationOptions: {
      header: ({ goBack }) => {
        left: <Left onPress={goBack} />;
      },
    },
  },
  Signin: {
    screen: SigninContainer,
    navigationOptions: {
      header: <View />,
    },
  },
  Introduction: {
    screen: Introduction,
    navigationOptions: {
      header: <View />,
    },
  },
});

export default RootNavigator;
