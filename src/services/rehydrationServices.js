import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import reduxPersist from 'app/src/config/reduxPersist';
import StartupActions from 'app/src/redux/startupRedux';

const updateReducers = store => {
  const { reducerVersion } = reduxPersist;
  const config = reduxPersist.storeConfig;
  // const startup = () => store.dispatch(StartupActions.startup());

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then(localVersion => {
      if (localVersion !== reducerVersion) {
        console.tron.display({
          name: 'PURGE',
          value: {
            'Old Version:': localVersion,
            'New Version:': reducerVersion,
          },
          preview: 'Reducer Version Change Detected',
          important: true,
        });
        // Purge store
        persistStore(store, config, null).purge();
        AsyncStorage.setItem('reducerVersion', reducerVersion);
      } else {
        persistStore(store, config, null);
      }
    })
    .catch(() => {
      persistStore(store, config, null);
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    });
};

export default { updateReducers };
