import React, { Component } from 'react';
import { Alert } from 'react-native';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';
import 'app/src/config';
import RootNavigator, { setNavigator } from 'app/src/config/routes';
import createStore from 'app/src/redux';
import getTheme from 'app/src/native-base-theme/components';
import commonColor from 'app/src/native-base-theme/variables/commonColor';

const store = createStore();

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
