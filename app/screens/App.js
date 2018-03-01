import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import RootNavigator, { setNavigator } from 'lunesmobilewallet/config/routes';
import store from './config/store';
import reduxPersist from './config/reduxPersist';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';

export default class App extends Component {
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
