import React from 'react';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { View } from 'react-native';

import { Introduction } from '../screen/Introduction';
import { Confirmation } from '../screen/Confirmation';
import { PIN } from '../screen/PIN';
import { SigninContainer } from '../screen/Signin';
import { ReceivePayment } from '../screen/ReceivePayment';
import { SendPayment } from '../screen/SendPayment';
import { NoticeNotification } from '../screen/NoticeNotification';
import { Main } from '../screen/Main';

const RootNavigator = StackNavigator({
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
  ReceivePayment: {
    screen: ReceivePayment,
    navigationOptions: {
      header: <View />,
    },
  },
  SendPayment: {
    screen: SendPayment,
    navigationOptions: {
      header: <View />,
    },
  },
  NoticeNotification: {
    screen: NoticeNotification,
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
