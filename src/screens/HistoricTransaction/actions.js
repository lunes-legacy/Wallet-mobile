/* eslint-disable */
import LunesLib from 'lunes-lib';
import types from '../../config/types';
import { navigate } from '../../config/routes';
import I18N from '../../i18n/i18n';
import generalConstant from '../../constants/general';

const requestLoading = () => ({
  type: types.REQUEST_LOADING
});

const requestFinished = () => ({
  type: types.REQUEST_FINISHED
});

const showSuccess = transactionId => ({
  type: types.SHOW_TRANSACTION_SUCCESS,
  transactionId
});

const showError = error => ({
  type: types.ERROR_TRANSACTION_SUCCESS,
  error
});

const showTransactions = historicTransactions => ({
  type: types.HISTORIC_TRANSACTION,
  transactions: historicTransactions
});

async function _getHistoric(user, dispatch) {
  try {
    const address = user.wallet.coins[0].addresses[0].address;
    const historicTransactions = await LunesLib.coins.bitcoin.getHistory(
      { address },
      user.accessToken
    );
    dispatch(requestFinished());
    dispatch(showTransactions(historicTransactions));
  } catch (error) {
    dispatch(requestFinished());
    throw new Error(error);
  }
}

export const getHistoric = user => dispatch => {
  dispatch(requestLoading());
  _getHistoric(user, dispatch).catch(error => {
    dispatch(requestFinished());
    console.log(error);
  });
};
