import { Platform, AsyncStorage } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { autoRehydrate, persistStore } from 'redux-persist';
import promise from 'redux-promise';
//import multi from 'redux-multi';
import thunk from 'redux-thunk';
import reducers from './reducers';

//const middlewares = [thunk, multi, promise];
const middlewares = [thunk, promise];

middlewares.push(createLogger());

//let store = applyMiddleware(thunk, multi, promise)(createStore)(reducers);
//export default store;

/*const enhancer = compose(
  applyMiddleware(...middlewares),
  devTools({
    name: Platform.OS,
    hostname: 'localhost',
    port: 5678,
  }),
  autoRehydrate()
);*/

export default createStore(
  reducers,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares), autoRehydrate())
);

/*const configureStore = () => {
  let store = createStore(reducers, undefined, enhancer);
  let persistor = persistStore(store, {}, () => {
    store.getState();
  });
  return { store, persistor };
};*/

//export default configureStore;
