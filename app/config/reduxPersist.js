import { AsyncStorage } from 'react-native';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '4',
  storeConfig: {
    storage: AsyncStorage,
    blacklist: ['authSMS', 'tabsReducer'],
  },
};

export default REDUX_PERSIST;
