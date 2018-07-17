/* eslint-disable */
import types from '../../config/types';
import { services } from 'lunes-lib';
import { navigate } from '../../config/routes';
import * as StoreSeed from '../../utils/store-seed';
import {
  prepareObjectWallet,
  getAddressAndBalance,
} from '../../utils/balance-utils';
import GeneralConstants from '../../constants/general';

async function getBalance(walletCoins, currentUser, dispatch) {
  try {
    const addressAndBalance = await getAddressAndBalance(walletCoins).catch(
      error => {
        throw error;
      }
    );
    dispatch(showSuccessOnImportSeed('SUCCESS_ON_GENERATE_ADDRESS'));
    dispatch(storeBalanceOnUser(addressAndBalance));
    dispatch(requestFinished());
    //navigate(GeneralConstants.SCREEN_NAMES.main);
  } catch (error) {
    dispatch(requestFinished());
    throw error;
  }
}

async function generateNewSeedWords(dispatch) {
  try {
    const newSeedWords = await services.wallet.mnemonic.generateMnemonic();
    dispatch(addNewSeedWords(newSeedWords));
  } catch (error) {
    throw error;
  }
}

async function generateAddressBySeedWords(
  seedWordsText,
  currentUser,
  dispatch
) {
  try {
    StoreSeed.store(seedWordsText);
    dispatch(setSeedOnUserInfo(seedWordsText));

    currentUser.wallet = await prepareObjectWallet(
      seedWordsText,
      currentUser
    ).catch(error => {
      return null;
    });

    if (!currentUser.wallet) {
      alert('error on prepare wallet');
      return;
    }

    getBalance(currentUser.wallet.coin, currentUser, dispatch).catch(error => {
      dispatch(requestFinished());
      navigate(GeneralConstants.SCREEN_NAMES.main);
    });
  } catch (error) {
    throw error;
  }
}

export const generateNewSeed = currentUser => dispatch => {
  generateNewSeedWords(dispatch).catch(error => {
    dispatch(showErrorOnImportSeed('ERROR_GENERATE_NEW_SEED'));
  });
};

export const importSeed = (seedWordsText, currentUser) => dispatch => {
  dispatch(requestLoading());
  generateAddressBySeedWords(seedWordsText, currentUser, dispatch).catch(
    error => {
      dispatch(requestFinished());
      dispatch(showErrorOnImportSeed('ERROR_ADDRESS_BY_SEED'));
    }
  );
};

export const closeAlert = () => dispatch => {
  dispatch(doCloseAlert());
};

export const clearSeedWords = () => ({
  type: types.CLEAR_SEED_WORDS,
});

const requestLoading = () => ({
  type: types.REQUEST_LOADING,
});

const requestFinished = () => ({
  type: types.REQUEST_FINISHED,
});

const addNewSeedWords = newSeedWords => ({
  type: types.NEW_SEED_WORD,
  newSeedWords,
});

const storeBalanceOnUser = balance => ({
  type: types.STORE_BALANCE,
  balance,
});

const showSuccessOnImportSeed = msgSuccess => ({
  type: types.SUCCESS_TO_IMPORT_SEED,
  msgSuccess,
});

const showErrorOnImportSeed = msgError => ({
  type: types.ERROR_TO_IMPORT_SEED,
  msgError,
});

const doCloseAlert = () => ({
  type: types.CLOSE_ALERT,
});

const setSeedOnUserInfo = seed => ({
  type: types.SET_SEED_USER,
  seed,
});
