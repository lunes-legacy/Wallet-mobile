import types from '../../config/types';
import { navigate } from '../../config/routes';
import LunesLib from 'lunes-lib';

async function getBalance(address, currentUser, dispatch) {
  try {
    let balance = await LunesLib.coins.bitcoin.getBalance(
      { address },
      currentUser.accessToken
    );

    dispatch(confirmSuccess(currentUser));
    dispatch(storeBalanceOnUser(balance.data));

    dispatch(requestFinished());
    navigate('Main');
  } catch (error) {
    dispatch(requestFinished());
    throw error;
  }
}

async function createPin(pin, currentUser, dispatch) {
  try {
    let pinCreated = await LunesLib.users.createPin(
      { pin },
      currentUser.accessToken
    );
    currentUser.pinIsValidated = true;
    dispatch(requestFinished());
    dispatch(showDialogBackupSeed(currentUser.wallet.hash));
  } catch (error) {
    dispatch(requestFinished());
  }
}

async function confirmPin(pin, currentUser, wordSeedWasViewed, dispatch) {
  try {
    let pinConfirmed = await LunesLib.users.confirmPin(
      { pin },
      currentUser.accessToken
    );
    currentUser.pinIsValidated = true;
    currentUser.wordSeedWasViewed = wordSeedWasViewed;
    try {
      let address = currentUser.wallet.coins[0].addresses[0].address;
      getBalance(address, currentUser, dispatch).catch(error => {
        dispatch(requestFinished());
      });
    } catch (error) {
      dispatch(requestFinished());
    }
  } catch (error) {
    dispatch(requestFinished());
    throw error;
  }
}

export const requestAddPIN = (PIN, currentUser) => {
  return dispatch => {
    dispatch(requestLoading());
    createPin(PIN, currentUser, dispatch).catch(error => {
      dispatch(requestFinished());
      dispatch(showError(error));
    });
  };
};

export const requestValidPIN = (PIN, currentUser, wordSeedWasViewed) => {
  return dispatch => {
    dispatch(requestLoading());
    confirmPin(PIN, currentUser, wordSeedWasViewed, dispatch).catch(error => {
      dispatch(requestFinished());
      dispatch(showError(error));
    });
  };
};

//Aqui mostra o diloag com a seed word
export const showTextBackupSeedAction = seedText => ({
  type: types.SHOW_TEXT_BACKUP_SEED,
  seedText,
});

export const closeTextBackupSeedAction = () => ({
  type: types.CLOSE_TEXT_BACKUP_SEED,
});

const requestLoading = () => ({
  type: types.REQUEST_LOADING,
});

const requestFinished = () => ({
  type: types.REQUEST_FINISHED,
});

const showError = error => ({
  type: types.SHOW_ERROR,
  error,
});

//Aqui mostra o diloag informando que é importante ele efetuar o backup
const showDialogBackupSeed = seedText => ({
  type: types.SHOW_DIALOG_BACKUP_SEED,
  seedText,
});

export const closeShowDialogBackupSeed = () => ({
  type: types.CLOSE_DIALOG_BACKUP_SEED,
});

const confirmSuccess = user => ({
  type: types.CONFIRM_CODE_SUCCESS,
  user: user,
});

const storeBalanceOnUser = balance => ({
  type: types.STORE_BALANCE,
  balance,
});

export const clearError = () => ({
  type: types.CLEAR_ERROR,
  error: null,
});
