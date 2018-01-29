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
  accessToken,
  dispatch
) {
  try {
    let obj = {
      mnemonic: currentUser.wallet.hash,
      senderAddress: currentUser.wallet.coins[0].addresses[0].address,
      receivingAddress: 'mrf4kBMPubs1M27T75uXaNUMEEkNQPPjpu',
      amount: 11640,
      fee: 54240,
      testnet: 'true',
    };
    let confirm = await LunesLib.coins.createTransaction(obj, accessToken);
    console.log(confirm);
  } catch (error) {
    throw error;
  }
}

export const confirmTransactionSend = (currentUser, senderAddress) => {
  return dispatch => {
    _createTransactionData(
      currentUser,
      senderAddress,
      currentUser.accessToken,
      dispatch
    ).catch(error => {
      console.error(error);
    });
  };
};
