import React from 'react';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { View } from 'react-native';

import { Introduction } from '../screen/Introduction';
import { Confirmation } from '../screen/Confirmation';
import { PIN } from '../screen/PIN';
import { SigninContainer } from '../screen/Signin';
import { Main } from '../screen/Main';

const RootNavigator = StackNavigator({
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
  Signin: {
    screen: SigninContainer,
    navigationOptions: {
      header: <View />,
    },
  },
  Confirmation: {
    screen: Confirmation,
    navigationOptions: {
      header: <View />,
    },
  },
  PIN: {
    screen: PIN,
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

let navigator;

export function setNavigator(nav) {
  navigator = nav;
}

export function navigate(routeName, params) {
  if (navigator) {
    navigator.dispatch(NavigationActions.navigate({ routeName, params }));
  }
}

export default RootNavigator;
