import { combineReducers } from 'redux';
import tabsReducer from '../components/tabs/reducer';
import authReducer from '../screen/Signin/reducer';
import routes from './routes';

const reducers = combineReducers({
  tabsReducer,
  auth: authReducer,
});

export default reducers;
