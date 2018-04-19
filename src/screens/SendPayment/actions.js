import LunesLib from 'lunes-lib';
import types from '../../config/types';
import { navigate } from '../../config/routes';

const storeBalanceOnUser = balance => ({
  type: types.STORE_BALANCE,
  balance
});

const choseCoin = coin => ({
  type: types.CHOOSE_COINS,
  coinChosed: coin
});

// eslint-disable-next-line
async function _getBalance(address, currentUser, dispatch) {
  const balance = await LunesLib.coins.bitcoin.getBalance({ address }, currentUser.accessToken);
  dispatch(storeBalanceOnUser(balance));
}

export const chooseCoinAction = coin => dispatch => {
  dispatch(choseCoin(coin));
};

export const getBalance = () => dispatch => {
  _getBalance(dispatch).catch(error => {
    console.log(error);
  });
};
