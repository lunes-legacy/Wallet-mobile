/* eslint-disable */
import types from '../../config/types';
import { navigate } from '../../config/routes';
import { coins, services, networks } from 'lunes-lib';
import { TabHeading } from 'native-base';

async function generateAddressBySeedWords(
  seedWordsText,
  currentUser,
  dispatch
) {
  try {
    /**
    * 4. Nesse passo eu não sei qual a função que recebe a SEED WORDS e converte para o ENDEREÇO
    */
    const address = await services.wallet.validateMnemonic(seedWordsText);
    dispatch(storeAddressOnDevice(address));
  } catch (error) {
    // dispatch(requestFinished());
    throw error;
  }
}

export const generateNewSeed = currentUser => dispatch => {};

export const importSeed = (seedWordsText, currentUser) => dispatch => {
  /**
  * 1. Dispatch alguma ação de loading, etc
  */
  //dispatch()

  /**
  * 2. Chamar aqui o serviço pra gerar o endereço a partir das palavras chaves
  *
  */
  generateAddressBySeedWords(seedWordsText, currentUser, dispatch).catch(
    error => {
      //3.
      alert('error on generate seed word');
      //dispatch();
    }
  );
};

const storeAddressOnDevice = address => ({
  type: types.STORE_ADDRESS_ON_DEVICE,
  address,
});
