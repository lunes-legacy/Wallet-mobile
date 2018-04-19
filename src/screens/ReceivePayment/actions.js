import types from '../../config/types';
import { navigate } from '../../config/routes';

const requestLoading = () => ({
  type: types.REQUEST_LOADING
});

const requestFinished = () => ({
  type: types.REQUEST_FINISHED
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
