/* eslint-disable */
import types from '../../config/types';
import LunesLib from 'lunes-lib';
import { navigate } from '../../config/routes';

export const changePasswordAction = email => dispatch => {
  dispatch(requestOpened());
  LunesLib.users.resetPassword({ email }).then(
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

const requestOpened = () => ({
  type: types.REQUEST_LOADING
});

const requestFinished = () => ({
  type: types.REQUEST_FINISHED
});
