import React from 'react';
import { View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DrawerNavigation from '../../components/sidebar';

const Main = StackNavigator({
  DrawerStack: {
    screen: DrawerNavigation,
    navigationOptions: {
      header: <View />,
    },
  },
});

export default Main;
