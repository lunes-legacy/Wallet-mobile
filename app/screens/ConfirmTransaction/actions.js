/* eslint-disable */
import LunesLib, { coins } from 'lunes-lib';
import types from '../../config/types';
import I18N from '../../i18n/i18n';
import * as StoreSeed from '../../utils/store-seed';
import { isTestNet } from '../../utils/testnet-util';

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
  dispatch
) {
  try {
    const seed = await StoreSeed.retrieveSeed();

    // TRAZER A MOEDA CORRENTE
    const a = {
      mnemonic: seed,
      network: 'LNS',
      testnet: isTestNet(),
      toAddress,
      amount: coins.util.unitConverter.toSatoshi(amount),
      fee: coins.util.unitConverter.toSatoshi(fee),
    };

    const res = await coins.services.transaction(a).catch(error => {
      throw error;
    });

    console.log(res);
    return;

    /*
    const obj = {
      email: currentUser.email,
      pin,
      mnemonic: currentUser.wallet.hash,
      senderAddress: currentUser.wallet.coins[0].addresses[0].address,
      receivingAddress: senderAddress,
      amount,
      fee,
    };

    const confirm = await LunesLib.coins.bitcoin.createTransaction(
      obj,
      ''
    );
    dispatch(requestFinished());
    dispatch(showSuccess(confirm));
    navigate('NoticeNotification', {
      title: I18N.t('COMPLETED'),
      userName: currentUser.fullname,
      amountToSend: amount,
      addressToSend: senderAddress,
      transactionId: confirm.txID,
      status: GeneralConstants.STATUS_TRANSACTION.warning,
    });*/
  } catch (error) {
    dispatch(requestFinished());
    throw error;
  }
}

async function _confirmPin(pin, currentUser, toAddress, amount, fee, dispatch) {
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
  fee
) => dispatch => {
  dispatch(requestLoading());
  _confirmPin(pin, currentUser, toAddress, amount, fee, dispatch).catch(
    error => {
      dispatch(requestFinished());
      alert(I18N.t('ERROR_TO_CONFIRM_PIN'));
    }
  );
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
