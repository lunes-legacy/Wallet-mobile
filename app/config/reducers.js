import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';
import tabsReducer from '../components/tabs/reducer';
import authReducer from '../screen/Signin/reducer';
import redirectToAuthReducer from '../screen/Introduction/reducer';
import routes from './routes';

const reducers = combineReducers({
  tabsReducer,
  auth: authReducer,
  redirectToAuthReducer,
});

export default reducers;
