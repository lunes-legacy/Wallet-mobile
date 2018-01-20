import types from '../../config/types';
import LunesCore from 'lunes-core';
import { navigate } from '../../config/routes';

export const changePasswordAction = email => {
  return dispatch => {
    dispatch(requestOpened());
    LunesCore.users.resetPassword({ email }).then(
      response => {
        dispatch(requestFinished());
        alert(response.message);
      },
      error => {
        dispatch(requestFinished());
        console.log(error);
      }
    );
  };
};

const requestOpened = () => ({
  type: types.REQUEST_LOADING,
});

const requestFinished = () => ({
  type: types.REQUEST_FINISHED,
});
