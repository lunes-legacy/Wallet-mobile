import types from '../../config/types';
import LunesLib from 'lunes-lib';
import { navigate } from '../../config/routes';
import generalConstant from '../../constants/general';
const STATUS_MSG = generalConstant.STATUS_MSG;

export const changePasswordAction = email => {
  return dispatch => {
    dispatch(requestOpened());
    LunesLib.users.resetPassword({ email }).then(
      response => {
        dispatch(requestFinished());
        dispatch(
          showSuccess({
            message: '',
            messageKey: STATUS_MSG.SUCCESS_AUTH_EMAIL_SENT,
          })
        );
      },
      error => {
        dispatch(requestFinished());
        dispatch(showError(error));
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

const showError = error => ({
  type: types.SHOW_ERROR,
  error,
});

const showSuccess = msg => ({
  type: types.SHOW_SUCCESS,
  msg,
});

export const clearError = () => ({
  type: types.CLEAR_ERROR,
  error: null,
});

export const clearSuccess = () => ({
  type: types.CLEAR_SUCCESS,
  error: null,
});
