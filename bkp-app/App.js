/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-smart-splash-screen';

import RootNavigator from './config/routes';
import store from './config/store';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500,
    });
  }

  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
