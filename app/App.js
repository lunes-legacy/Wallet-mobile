/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';

import SplashScreen from 'react-native-smart-splash-screen';

import { Base } from './components';
import { Colors } from './components/theme';
import { Introduction } from './screen/Introduction';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\n Cmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu`,
});

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
      <Base>
        <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
        <Introduction />
      </Base>
    );
  }
}
