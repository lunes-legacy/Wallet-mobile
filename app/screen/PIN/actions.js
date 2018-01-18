import types from './types';
import confirmationTypes from '../Confirmation/types';
import { navigate } from '../../config/routes';
import LunesCore from 'lunes-core';

export const requestAddPIN = (PIN, currentUser) => {
  return dispatch => {
    dispatch(requestLoading());

    LunesCore.users.createPin({ pin: PIN }, currentUser.accessToken).then(
      response => {
        currentUser.pinIsValidated = true;
        dispatch(confirmSuccess(currentUser));
        dispatch(requestFinished());
        navigate('Main');
      },
      error => {
        dispatch(requestFinished());
      }
    );
  };
};

export const requestValidPIN = (PIN, currentUser) => {
  return dispatch => {
    dispatch(requestLoading());

    LunesCore.users.confirmPin({ pin: PIN }, currentUser.accessToken).then(
      response => {
        dispatch(confirmSuccess(currentUser));
        dispatch(requestFinished());
        navigate('Main');
      },
      error => {
        dispatch(requestFinished());
      }
    );
  };
};

const requestLoading = () => ({
  type: types.REQUEST_LOADING,
});

const requestFinished = () => ({
  type: types.REQUEST_FINISHED,
});

const confirmSuccess = user => ({
  type: confirmationTypes.CONFIRM_CODE_SUCCESS,
  user: user,
});
