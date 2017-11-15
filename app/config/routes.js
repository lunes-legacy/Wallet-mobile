import React from 'react';
import { StackNavigator, Button } from 'react-navigation';

import { Header } from '../components';

import { Introduction } from '../screen/Introduction';
import { Signin } from '../screen/Signin';

const RootNavigator = StackNavigator({
  Introduction: {
    screen: Introduction,
    navigationOptions: {
      header: <Header />,
    },
  },
  Signin: {
    screen: Signin,
    navigationOptions: {
      header: <Header />,
    },
  },
});

export default RootNavigator;
