import { combineReducers } from 'redux';
import tabsReducer from '../components/tabs/reducer';
import authReducer from '../screen/Signin/reducer';

const reducers = combineReducers({
  tabsReducer,
  auth: authReducer,
});

export default reducers;
