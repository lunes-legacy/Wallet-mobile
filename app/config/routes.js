import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Button } from 'react-native';

import { Header } from '../components';

import { Introduction } from '../screen/Introduction';
import { SigninContainer } from '../screen/Signin';
import { Main } from '../screen/Main';

const RootNavigator = StackNavigator({
  /*    Signin: {
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
    }*/
  Signin: {
    screen: SigninContainer,
    navigationOptions: {
      header: <View />,
    },
  },
  Main: {
    screen: Main,
    navigationOptions: {
      header: <View />,
    },
  },
});

export default RootNavigator;
