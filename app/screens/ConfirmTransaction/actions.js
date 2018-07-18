/* eslint-disable */
import LunesLib, { coins } from 'lunes-lib';
import types from '../../config/types';
import I18N from '../../i18n/i18n';
import * as StoreSeed from '../../utils/store-seed';
import { isTestNet } from '../../utils/testnet-util';
import GeneralConstants from '../../constants/general';
import { navigate } from '../../config/routes';

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

const doShowAlert = () => ({
  type: types.SHOW_ALERT_FEE,
});

const doCloseAlert = () => ({
  type: types.CLOSE_ALERT_FEE,
});

const showFee = fee => ({
  type: types.SHOW_FEE,
  fee,
});

async function _createTransactionData(
  pin,
  currentUser,
  toAddress,
  amount,
  fee,
  currentCoinSelected,
  dispatch
) {
  try {
    const seed = await StoreSeed.retrieveSeed();

    const obj = {
      mnemonic: seed,
      network: currentCoinSelected,
      testnet: isTestNet(),
      toAddress,
      amount: coins.util.unitConverter.toSatoshi(amount),
      fee: coins.util.unitConverter.toSatoshi(fee),
      feePerByte: coins.util.unitConverter.toSatoshi(fee),
    };

    const result = await coins.services.transaction(obj).catch(error => {
      throw error;
    });

    dispatch(requestFinished());
    dispatch(showSuccess(result));
    navigate('NoticeNotification', {
      title: I18N.t('COMPLETED'),
      userName: currentUser.fullname,
      amountToSend: amount,
      addressToSend: toAddress,
      transactionId: result.data.txID,
      status: GeneralConstants.STATUS_TRANSACTION.warning,
    });
  } catch (error) {
    dispatch(requestFinished());
    throw error;
  }
}

async function _confirmPin(
  pin,
  currentUser,
  toAddress,
  amount,
  fee,
  currentCoinSelected,
  dispatch
) {
  try {
    const pinConfirmed = await LunesLib.users.confirmPin(
      { pin },
      currentUser.accessToken
    );
    if (!pinConfirmed) {
      dispatch(requestFinished());
      dispatch(showError('error'));
      return;
    }
    _createTransactionData(
      pin,
      currentUser,
      toAddress,
      amount,
      fee,
      currentCoinSelected,
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
  toAddress,
  amount,
  fee,
  currentCoinSelected
) => dispatch => {
  dispatch(requestLoading());
  _confirmPin(
    pin,
    currentUser,
    toAddress,
    amount,
    fee,
    currentCoinSelected,
    dispatch
  ).catch(error => {
    dispatch(requestFinished());
    alert(I18N.t('ERROR_TO_CONFIRM_PIN'));
  });
};

async function _getFee(coinSelected, dispatch) {
  const fee = await coins.services
    .networkFees({
      network: coinSelected.toLowerCase(),
      testnet: isTestNet(),
    })
    .catch(error => {
      throw error;
    });
  dispatch(requestFinished());
  dispatch(showFee(fee));
}

export const getFee = coinSelected => dispatch => {
  dispatch(requestLoading());
  _getFee(coinSelected, dispatch).catch(error => {
    dispatch(requestFinished());
    alert(I18N.t('ERROR_TO_GET_FEE'));
  });
};

export const showAlertFee = () => dispatch => {
  dispatch(doShowAlert());
};

export const closeAlertFee = () => dispatch => {
  dispatch(doCloseAlert());
};
