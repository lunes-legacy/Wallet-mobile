/* eslint-disable */
import { AsyncStorage } from 'react-native';
import types from '../../config/types';
import { navigate } from '../../config/routes';
import * as StoreSeed from '../../utils/store-seed';
import LunesLib, { coins, services, networks } from 'lunes-lib';

async function generateAddress(currentUser, dispatch) {
  try {
    const seed = await StoreSeed.retrieveSeed();
    if (seed) {
      dispatch(setSeedOnUserInfo(seed));

      const addressBTC = await services.wallet.btc.wallet
        .newAddress(seed, networks.BTC)
        .catch(error => {
          console.log(error);
        });

      const addressLNS = await services.wallet.lns.wallet
        .newAddress(seed, networks.LNS)
        .catch(error => {
          console.log(error);
        });

      if (!currentUser.wallet.coin.LNS) {
        currentUser.wallet.coin.LNS = {
          address: addressLNS
        };
      }

      if (!currentUser.wallet.coin.BTC) {
        currentUser.wallet.coin.BTC = {
          address: addressBTC
        };
      }

      getBalance(currentUser.wallet.coin, currentUser, dispatch)
        .catch(error => {
          dispatch(requestFinished());
          navigate('Main');
        });
    } else {
      dispatch(requestFinished());
      navigate('Main');
    }
  } catch (error) {
    throw error;
  }
}

async function getBalance(walletCoins, currentUser, dispatch) {
  try {
    const balanceLNS = await services.wallet.lns.balance(walletCoins.LNS.address, networks.LNS);
    const balanceBTC = await services.wallet.btc.balance(walletCoins.BTC.address, networks.BTC);
    dispatch(confirmSuccess(currentUser));
    dispatch(storeBalanceOnUser({
      BTC: balanceBTC.data,
      LNS: balanceLNS.data
    }));
    dispatch(requestFinished());
    navigate('Main');
  } catch (error) {
    dispatch(requestFinished());
    throw error;
  }
}

async function createPin(pin, currentUser, dispatch) {
  try {
    const pinCreated = await LunesLib.users.createPin(
      { pin },
      currentUser.accessToken
    );
    currentUser.pinIsValidated = true;
    const addressGeneratedByMnemonic = await generateAddress(currentUser, dispatch);
    getBalance(addressGeneratedByMnemonic, currentUser, dispatch)
      .catch(error => {
        dispatch(requestFinished());
        navigate('Main');
      });

    dispatch(requestFinished());
    dispatch(showDialogBackupSeed(currentUser.wallet.hash));
  } catch (error) {
    dispatch(requestFinished());
    AsyncStorage.removeItem('storedUser');
    navigate('Signin');
  }
}

async function confirmPin(pin, currentUser, wordSeedWasViewed, dispatch) {
  try {
    const pinConfirmed = await LunesLib.users.confirmPin(
      { pin },
      currentUser.accessToken
    );
    currentUser.pinIsValidated = true;
    currentUser.wordSeedWasViewed = wordSeedWasViewed;
    try {
      generateAddress(currentUser, dispatch);
    } catch (error) {
      dispatch(requestFinished());
      AsyncStorage.removeItem('storedUser');
      navigate('Signin');
    }
  } catch (error) {
    dispatch(requestFinished());
    throw error;
  }
}

export const requestAddPIN = (PIN, currentUser) => dispatch => {
  dispatch(requestLoading());
  createPin(PIN, currentUser, dispatch).catch(error => {
    dispatch(requestFinished());
    dispatch(showError(error));
  });
};

export const requestValidPIN = (
  PIN,
  currentUser,
  wordSeedWasViewed
) => dispatch => {
  dispatch(requestLoading());
  confirmPin(PIN, currentUser, wordSeedWasViewed, dispatch).catch(error => {
    dispatch(requestFinished());
    dispatch(showError(error));
    AsyncStorage.removeItem('storedUser');
    navigate('Signin');
  });
};

// Aqui mostra o diloag com a seed word
export const showTextBackupSeedAction = seedText => ({
  type: types.SHOW_TEXT_BACKUP_SEED,
  seedText,
});

export const closeTextBackupSeedAction = () => ({
  type: types.CLOSE_TEXT_BACKUP_SEED,
});

const setSeedOnUserInfo = seed => ({
  type: types.SET_SEED_USER,
  seed,
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

// Aqui mostra o diloag informando que é importante ele efetuar o backup
const showDialogBackupSeed = seedText => ({
  type: types.SHOW_DIALOG_BACKUP_SEED,
  seedText,
});

export const closeShowDialogBackupSeed = () => ({
  type: types.CLOSE_DIALOG_BACKUP_SEED,
});

const confirmSuccess = user => ({
  type: types.CONFIRM_CODE_SUCCESS,
  user,
});

const storeBalanceOnUser = balance => ({
  type: types.STORE_BALANCE,
  balance,
});

export const clearError = () => ({
  type: types.CLEAR_ERROR,
  error: null,
});
