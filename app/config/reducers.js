import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';
import tabsReducer from '../components/tabs/reducer';
import authReducer from '../screen/Signin/reducer';
import userReducer from '../screen/Signin/userReducer';
import redirectToAuthReducer from '../screen/Introduction/reducer';
import confirmationReducer from '../screen/Confirmation/reducer';
import receivePaymentReducer from '../screen/ReceivePayment/reducer';
import sendPaymentReducer from '../screen/SendPayment/reducer';
import pinReducer from '../screen/PIN/reducer';
import routes from './routes';

const reducers = combineReducers({
  tabsReducer,
  auth: authReducer,
  userReducer,
  redirectToAuthReducer,
  authSMS: confirmationReducer,
  pinReducer,
  receivePaymentReducer,
  sendPaymentReducer,
});

export default reducers;
