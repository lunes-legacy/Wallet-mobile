import types from '../../config/types';
import { navigate } from '../../config/routes';

export const chooseCoinAction = coin => {
  return dispatch => {
    dispatch(choseCoin(coin));
  };
};

const choseCoin = coin => ({
  type: types.CHOOSE_COINS,
  coinChosed: coin,
});
