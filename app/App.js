// @flow
import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
import { persistStore } from 'redux-persist';

import { Provider } from 'react-redux';
import SplashScreen from 'react-native-smart-splash-screen';

import RootNavigator, { setNavigator } from './config/routes';
import store from './config/store';
import reduxPersist from './config/reduxPersist';

//theme native base
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';

export default class App extends Component {
  componentDidMount() {
    persistStore(store, reduxPersist.storeConfig, () => {
      SplashScreen.close({
        animationType: SplashScreen.animationType.scale,
        duration: 850,
        delay: 500,
      });
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
