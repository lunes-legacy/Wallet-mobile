/* eslint-disable */
import { AsyncStorage } from 'react-native';
import types from '../../config/types';
import { navigate } from '../../config/routes';
import { coins, services, networks } from 'lunes-lib';
import { TabHeading } from 'native-base';

async function generateNewSeedWords(dispatch) {
  try {
    debugger;
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
    const isValidMnemonic = await services.wallet.mnemonic.validateMnemonic(seedWordsText);
    if (isValidMnemonic) {
      const addressGeneratedByMnemonic = await services.wallet.lns.wallet.newAddress(seedWordsText, {}).catch(error => {
        console.log(error);
      });
      AsyncStorage.setItem('addressLunesUser', JSON.stringify(addressGeneratedByMnemonic));
      dispatch(storeAddressOnDevice(addressGeneratedByMnemonic));
      return;
    }

    // TODO - to refactor after test
    alert("invalid mnemonic");
    //dispatch(alertInvalidMnemonic(address));
  } catch (error) {
    throw error;
  }
}

export const generateNewSeed = currentUser => dispatch => {
  generateNewSeedWords(dispatch).catch(
    error => {
      alert('error on generate seed word');
    }
  );
};

export const importSeed = (seedWordsText, currentUser) => dispatch => {
  generateAddressBySeedWords(seedWordsText, currentUser, dispatch).catch(
    error => {
      alert('error on generate address by seed words');
    }
  );
};

const storeAddressOnDevice = address => ({
  type: types.STORE_ADDRESS_ON_DEVICE,
  address,
});

const addNewSeedWords = newSeedWords => ({
  type: types.NEW_SEED_WORD,
  newSeedWords,
});
