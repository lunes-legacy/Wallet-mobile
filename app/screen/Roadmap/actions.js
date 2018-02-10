import LunesLib from 'lunes-lib';
import types from '../../config/types';
import { navigate } from '../../config/routes';
import I18N from '../../i18n/i18n';
import generalConstant from '../../constants/general';

const requestLoading = () => ({
  type: types.REQUEST_LOADING,
});

const requestFinished = () => ({
  type: types.REQUEST_FINISHED,
});

const showSuccess = transactionId => ({
  type: types.SHOW_TRANSACTION_SUCCESS,
  transactionId,
});

const showError = error => ({
  type: types.ERROR_TRANSACTION_SUCCESS,
  error,
});

export const confirmTransactionSend = (
  pin,
  currentUser,
  senderAddress,
  amount,
  fee
) => {
  return dispatch => {};
};
