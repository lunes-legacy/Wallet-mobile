// @flow
import React, { Component } from 'react';
import { StyleProvider } from 'native-base';

import { Provider } from 'react-redux';
import SplashScreen from 'react-native-smart-splash-screen';

import RootNavigator, { setNavigator } from './config/routes';
import store from './config/store';

//theme native base
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';

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
        <StyleProvider style={getTheme(commonColor)}>
          <RootNavigator
            ref={nav => {
              setNavigator(nav);
            }}
          />
        </StyleProvider>
      </Provider>
    );
  }
}
