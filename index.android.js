import { AppRegistry } from 'react-native';
import { Sentry } from 'react-native-sentry';

import App from 'lunesmobilewallet/app/screens/App';

Sentry.config(
  'https://78abbc67084942e7b6f21abf47d21c79:9b07e20ea02048ddaabbfa94f2e412a3@sentry.io/279075'
).install();

AppRegistry.registerComponent('LunesMobileWallet', () => App);
