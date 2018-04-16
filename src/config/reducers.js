import { combineReducers } from 'redux';
import tabsReducer from 'app/src/components/tabs/reducer';
import authReducer from 'app/src/screens/Signin/reducer';
import redirectToAuthReducer from 'app/src/screens/Introduction/reducer';
import confirmationReducer from 'app/src/screens/Confirmation/reducer';
import receivePaymentReducer from 'app/src/screens/ReceivePayment/reducer';
import sendPaymentReducer from 'app/src/screens/SendPayment/reducer';
import changePasswordReducer from 'app/src/screens/ChangePassword/reducer';
import profileReducer from 'app/src/screens/Profile/reducer';
import historicDataReducer from 'app/src/screens/LunesMarket/reducer';
import pinReducer from 'app/src/screens/PIN/reducer';
import confirmTransactionReducer from 'app/src/screens/ConfirmTransaction/reducer';
import historicTransactionReducer from 'app/src/screens/HistoricTransaction/reducer';
import connectionReducer from 'app/src/services/connectionService/reducer';

const reducers = combineReducers({
  tabsReducer,
  auth: authReducer,
  redirectToAuthReducer,
  authSMS: confirmationReducer,
  pinReducer,
  receivePaymentReducer,
  sendPaymentReducer,
  changePasswordReducer,
  profileReducer,
  historicDataReducer,
  confirmTransactionReducer,
  historicTransactionReducer,
  connectionReducer,
});

export default reducers;
