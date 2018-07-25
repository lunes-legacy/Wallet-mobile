import types from '../../config/types';
import { navigate } from '../../config/routes';

const requestLoading = () => ({
  type: types.REQUEST_LOADING,
});

const requestFinished = () => ({
  type: types.REQUEST_FINISHED,
});

const selectCoin = currentCoinSelected => ({
  type: types.CURRENT_COIN_SELECTED,
  currentCoinSelected,
});

export const requestAddPIN = () => dispatch => {
  dispatch(requestLoading());

  setTimeout(() => {
    dispatch(requestFinished());
    navigate('Main');
  }, 5000);
};

export const requestValidPIN = () => dispatch => {
  dispatch(requestLoading());

  setTimeout(() => {
    dispatch(requestFinished());
    navigate('Main');
  }, 5000);
};

export const doAction = (user, balance, currentCoinSelected) => dispatch => {
  dispatch(selectCoin(currentCoinSelected));
};
