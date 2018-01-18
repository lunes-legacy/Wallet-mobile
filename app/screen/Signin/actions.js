import { Keyboard } from 'react-native';
import LunesCore from 'lunes-core';
import types from './types';
import { auth, database } from '../../config/firebase';
import { navigate } from '../../config/routes';

export const requestLogin = values => {
  return dispatch => {
    dispatch(requestLoading());

    LunesCore.users
      .login({ email: values.email, password: values.password })
      .then(
        user => {
          dispatch(requestFinished());
          dispatch(signinSuccess(user));
          dispatch(storeUser(user));
          Keyboard.dismiss();
          if (user && !user.pinIsValidated && user.phoneIsValidated) {
            navigate('PIN');
          } else if (user && user.pinIsValidated && user.phoneIsValidated) {
            navigate('PIN', { isLogged: true });
          } else {
            navigate('Confirmation');
          }
        },
        error => {
          dispatch(requestFinished());
          dispatch(signinError(error));
        }
      );

    /*auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then(user => {
        dispatch(requestFinished());
        dispatch(signinSuccess(user));
        dispatch(storeUser(user));
        Keyboard.dismiss();
        if (user && user._user && user._user.phoneNumber) {
          navigate('PIN', { isLogged: true });
        } else {
          navigate('Confirmation');
        }
      })
      .catch(error => {
        dispatch(requestFinished());
        dispatch(signinError(error));
      });*/
  };
};

export const clearError = () => ({
  type: types.CLEAR_ERROR,
  error: null,
});

const signinLoading = () => ({
  type: types.SIGNIN_LOADING,
});

const signinSuccess = user => ({
  type: types.SIGNIN_SUCCESS,
  user: user,
});

const signinError = error => ({
  type: types.SIGNIN_ERROR,
  error: error,
});

const requestLoading = () => ({
  type: types.REQUEST_LOADING,
});

const requestFinished = () => ({
  type: types.REQUEST_FINISHED,
});

const storeUser = user => ({
  type: types.STORE_USER,
  user: user,
});

export const requestSignup = values => {
  const { name, email, password } = values;
  let userData = {
    fullname: name,
    password: password,
    email: email,
    photoUrl: '',
  };

  return dispatch => {
    dispatch(requestLoading());

    LunesCore.users
      .create(userData)
      .then(user => {
        if (user !== null) {
          user = { ...user, ...userData };
          delete user.password;
          dispatch(requestFinished());
          dispatch(signupSuccess(user));
          dispatch(storeUser(user));
          navigate('Confirmation');
        } else {
          dispatch(signupError(error));
        }
      })
      .catch(error => {
        dispatch(requestFinished());
        dispatch(signupError(error));
      });
  };
};

const signupLoading = () => ({
  type: types.SIGNUP_LOADING,
});

const signupSuccess = user => ({
  type: types.SIGNUP_SUCCESS,
  user: user,
});

const signupError = error => ({
  type: types.SIGNUP_ERROR,
  error: error,
});

export const requestSignout = () => {
  return dispatch => {
    dispatch(signoutLoading());
    auth
      .signOut()
      .then(() => {
        dispatch(signoutSuccess());
        navigate('Signin');
      })
      .catch(error => {
        dispatch(signoutError(error));
      });
  };
};

const signoutLoading = () => ({
  type: types.SIGNOUT_LOADING,
});

const signoutSuccess = () => ({
  type: types.SIGNOUT_SUCCESS,
});

const signoutError = error => ({
  type: types.SIGNOUT_ERROR,
  error: error,
});
