import { combineReducers } from 'redux';
import rootSaga from 'app/src/sagas';
import configureStore from './createStore';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    introduction: require('./IntroductionRedux').reducer,
    signin: require('./signinRedux').reducer,
  });

  return configureStore(rootReducer, rootSaga);
};
