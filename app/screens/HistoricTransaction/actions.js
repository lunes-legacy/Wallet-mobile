/* eslint-disable */
import LunesLib, { coins, networks, services } from 'lunes-lib';
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

const showTransactions = data => ({
  type: types.HISTORIC_TRANSACTION,
  history: data.history,
});

async function _getHistoric(user, balance, currentCoinSelected, dispatch) {
  try {
    const address = balance[currentCoinSelected].address;
    const historicTransactions = await coins.services.history({
      address: address,
      network: currentCoinSelected,
    });
    dispatch(requestFinished());
    if (historicTransactions && historicTransactions.data) {
      dispatch(showTransactions(historicTransactions.data));
    }
  } catch (error) {
    dispatch(requestFinished());
    throw new Error(error);
  }
}

export const getHistoric = (user, balance, currentCoinSelected) => dispatch => {
  dispatch(requestLoading());
  _getHistoric(user, balance, currentCoinSelected, dispatch).catch(error => {
    dispatch(requestFinished());
    console.log(error);
  });
};
