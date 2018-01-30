import LunesLib from 'lunes-lib';
import types from '../../config/types';
import { navigate } from '../../config/routes';

async function _getBalance(address, currentUser, dispatch) {
  let balance = await LunesLib.coins.bitcoin.getBalance(
    { address },
    currentUser.accessToken
  );
  dispatch(storeBalanceOnUser(balance));
}

export const chooseCoinAction = coin => {
  return dispatch => {
    dispatch(choseCoin(coin));
  };
};

export const getBalance = () => {
  return dispatch => {
    _getBalance(dispatch).catch(error => {
      console.log(error);
    });
  };
};

const storeBalanceOnUser = balance => ({
  type: types.STORE_BALANCE,
  balance,
});

const choseCoin = coin => ({
  type: types.CHOOSE_COINS,
  coinChosed: coin,
});
