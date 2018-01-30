import LunesLib from 'lunes-lib';
import types from '../../config/types';
import { navigate } from '../../config/routes';

const requestLoading = () => ({
  type: types.REQUEST_LOADING,
});

const requestFinished = () => ({
  type: types.REQUEST_FINISHED,
});

async function _createTransactionData(
  currentUser,
  senderAddress,
  amount,
  fee,
  accessToken,
  dispatch
) {
  try {
    let obj = {
      email: currentUser.email,
      pin: '1234',
      mnemonic: currentUser.wallet.hash,
      senderAddress: currentUser.wallet.coins[0].addresses[0].address,
      receivingAddress: senderAddress,
      amount: amount,
      fee: fee,
      testnet: 'true',
    };
    let confirm = await LunesLib.coins.bitcoin.createTransaction(
      obj,
      accessToken
    );
    console.log(confirm);
    dispatch(showSuccess(confirm));
    navigate('NoticeNotification', {
      title: 'Concluído!',
      user: currentUser.fullname,
      amountToSend: amount,
      addressToSend: senderAddress,
      transactionId: confirm.txID,
    });
  } catch (error) {
    throw error;
  }
}

export const confirmTransactionSend = (
  currentUser,
  senderAddress,
  amount,
  fee
) => {
  return dispatch => {
    _createTransactionData(
      currentUser,
      senderAddress,
      amount,
      fee,
      currentUser.accessToken,
      dispatch
    ).catch(error => {
      console.error(error);
      dispatch(errorSuccess(error));
    });
  };
};

const showSuccess = transactionId => ({
  type: types.SHOW_TRANSACTION_SUCCESS,
  transactionId,
});

const errorSuccess = error => ({
  type: types.ERROR_TRANSACTION_SUCCESS,
  error,
});
