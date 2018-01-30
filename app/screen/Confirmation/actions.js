import LunesLib from 'lunes-lib';
import types from '../../config/types';

import { auth, fb } from '../../config/firebase';
import { navigate } from '../../config/routes';

const requestLoading = () => ({
  type: types.REQUEST_LOADING,
});

const requestFinished = () => ({
  type: types.REQUEST_FINISHED,
});

//1. Stage
export const requestCode = values => {
  return dispatch => {
    try {
      dispatch(requestLoading());

      const { prefixCountryNumber, dddNumber, phone } = values;
      const phoneNumberFormatted = `${prefixCountryNumber}${dddNumber}${phone}`;

      auth
        .signInWithPhoneNumber(phoneNumberFormatted)
        .then(confirmResult => {
          dispatch(requestFinished());
          dispatch(requestCodeSuccess(confirmResult.verificationId));
          //navigate('SMSConfirmation');
        })
        .catch(error => {
          dispatch(requestFinished());
          dispatch(requestCodeError(error));
        });
    } catch (error) {
      dispatch(requestFinished());
      console.error(error);
    }
  };
};

//3. Stage
async function postConfirmPhone(phoneNumber, userFB, dispatch) {
  try {
    let response = await LunesLib.users.confirmPhone(
      { phoneNumber },
      userFB.accessToken
    );
    userFB = { ...userFB, phoneNumber: response.phoneNumber };
    dispatch(requestFinished());
    dispatch(confirmCodeSuccess(userFB));
    navigate('PIN');
  } catch (e) {
    dispatch(requestFinished());
    throw error;
  }
}

//2. Stage
export const confirmCode = (codeInput, verificationId, currentUser) => {
  return dispatch => {
    try {
      dispatch(requestLoading());

      let credential = fb.auth.PhoneAuthProvider.credential(
        verificationId,
        codeInput
      );

      fb
        .auth()
        .signInWithCredential(credential)
        .then(
          user => {
            user = { phoneNumber: user._user.phoneNumber, ...currentUser };
            postConfirmPhone(user.phoneNumber, user, dispatch).catch(error => {
              dispatch(requestFinished());
              dispatch(confirmCodeError(error));
            });
          },
          error => {
            dispatch(requestFinished());
            dispatch(confirmCodeError(error));
          }
        );
    } catch (e) {
      dispatch(requestFinished());
    }
  };
};

export const clearError = () => ({
  type: types.CLEAR_ERROR,
  error: null,
});

export const clearErrorNumberInvalid = error => ({
  type: types.CLEAR_INVALID_PHONENUMBER,
  error: {},
});

const requestCodeSuccess = confirmResult => ({
  type: types.REQUEST_CODE_SUCCESS,
  confirmResult: confirmResult,
});

const requestCodeError = error => ({
  type: types.REQUEST_CODE_ERROR,
  error: error,
});

const confirmCodeSuccess = user => ({
  type: types.CONFIRM_CODE_SUCCESS,
  user: user,
});

const confirmCodeError = error => ({
  type: types.CONFIRM_CODE_ERROR,
  error: error,
});
