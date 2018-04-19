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

const showFee = fee => ({
  type: types.SHOW_FEE,
  fee
});

async function _createTransactionData(
  pin,
  currentUser,
  senderAddress,
  amount,
  fee,
  accessToken,
  dispatch
) {
  try {
    const obj = {
      email: currentUser.email,
      pin,
      mnemonic: currentUser.wallet.hash,
      senderAddress: currentUser.wallet.coins[0].addresses[0].address,
      receivingAddress: senderAddress,
      amount,
      fee
    };
    const confirm = await LunesLib.coins.bitcoin.createTransaction(obj, accessToken);
    dispatch(requestFinished());
    dispatch(showSuccess(confirm));
    navigate('NoticeNotification', {
      title: I18N.t('COMPLETED'),
      userName: currentUser.fullname,
      amountToSend: amount,
      addressToSend: senderAddress,
      transactionId: confirm.txID,
      status: generalConstant.STATUS_TRANSACTION.warning
    });
  } catch (error) {
    dispatch(requestFinished());
    throw error;
  }
}

async function _confirmPin(pin, currentUser, senderAddress, amount, fee, dispatch) {
  try {
    const pinConfirmed = await LunesLib.users.confirmPin({ pin }, currentUser.accessToken);
    if (!pinConfirmed) {
      dispatch(requestFinished());
      dispatch(showError('error'));
      return;
    }
    _createTransactionData(
      pin,
      currentUser,
      senderAddress,
      amount,
      fee,
      currentUser.accessToken,
      dispatch
    ).catch(error => {
      dispatch(requestFinished());
      dispatch(showError(error));
    });
  } catch (error) {
    dispatch(requestFinished());
    throw error;
  }
}

export const confirmTransactionSend = (
  pin,
  currentUser,
  senderAddress,
  amount,
  fee
) => dispatch => {
  dispatch(requestLoading());
  _confirmPin(pin, currentUser, senderAddress, amount, fee, dispatch).catch(error => {
    dispatch(requestFinished());
    alert(I18N.t('ERROR_TO_CONFIRM_PIN'));
  });
};

async function _getFee(dispatch) {
  const fee = await LunesLib.coins.getFees();
  dispatch(requestFinished());
  dispatch(showFee(fee));
}

export const getFee = () => dispatch => {
  dispatch(requestLoading());
  _getFee(dispatch).catch(error => {
    dispatch(requestFinished());
    alert(I18N.t('ERROR_TO_GET_FEE'));
  });
};
