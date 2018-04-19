import React from 'react';
import { View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DrawerNavigator from '../../components/sidebar';

const Main = StackNavigator({
  DrawerStack: {
    screen: DrawerNavigator,
    navigationOptions: {
      header: <View />
    }
  }
});

export default Main;
