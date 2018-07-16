import { combineReducers } from 'redux';
import tabsReducer from 'lunesmobilewallet/app/components/tabs/reducer';
import authReducer from 'lunesmobilewallet/app/screens/Signin/reducer';
import redirectToAuthReducer from 'lunesmobilewallet/app/screens/Introduction/reducer';
import confirmationReducer from 'lunesmobilewallet/app/screens/Confirmation/reducer';
import receivePaymentReducer from 'lunesmobilewallet/app/screens/ReceivePayment/reducer';
import sendPaymentReducer from 'lunesmobilewallet/app/screens/SendPayment/reducer';
import changePasswordReducer from 'lunesmobilewallet/app/screens/ChangePassword/reducer';
import profileReducer from 'lunesmobilewallet/app/screens/Profile/reducer';
import historicDataReducer from 'lunesmobilewallet/app/screens/LunesMarket/reducer';
import pinReducer from 'lunesmobilewallet/app/screens/PIN/reducer';
import confirmTransactionReducer from 'lunesmobilewallet/app/screens/ConfirmTransaction/reducer';
import historicTransactionReducer from 'lunesmobilewallet/app/screens/HistoricTransaction/reducer';
import connectionReducer from 'lunesmobilewallet/app/services/connectionService/reducer';
import importSeedReducer from 'lunesmobilewallet/app/screens/ImportSeed/reducer';
import leasingReducer from 'lunesmobilewallet/app/screens/Leasing/reducer';

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
  importSeedReducer,
  leasingReducer,
});

export default reducers;
