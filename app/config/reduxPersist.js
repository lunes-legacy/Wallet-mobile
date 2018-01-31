import { AsyncStorage } from 'react-native';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '4',
  storeConfig: {
    storage: AsyncStorage,
    blacklist: [
      'tabsReducer',
      'confirmTransactionReducer',
      'changePasswordReducer',
      'pinReducer',
      'receivePaymentReducer',
      'sendPaymentReducer',
      'changePasswordReducer',
      'historicDataReducer',
      'confirmTransactionReducer',
      'authSMS',
    ],
  },
};

export default REDUX_PERSIST;
