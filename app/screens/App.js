import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import RootNavigator, {
  setNavigator,
} from 'lunesmobilewallet/app/config/routes';
import store from 'lunesmobilewallet/app/config/store';
import reduxPersist from 'lunesmobilewallet/app/config/reduxPersist';
import getTheme from 'lunesmobilewallet/app/native-base-theme/components';
import commonColor from 'lunesmobilewallet/app/native-base-theme/variables/commonColor';

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
