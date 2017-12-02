import React from 'react';
import { StackNavigator } from 'react-navigation';
import DrawerNavigation from '../../components/sidebar';

const Main = StackNavigator({
  DrawerStack: { screen: DrawerNavigation },
});

export default Main;
