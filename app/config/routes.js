import React from 'react';
import { StackNavigator, Button } from 'react-navigation';
import { View } from 'react-native';

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
  Main: { screen: Main,
    navigationOptions: {
      header: <View />,
    },},
});

export default RootNavigator;
