import { Keyboard } from 'react-native';
import LunesLib from 'lunes-lib';
import types from '../../config/types';
import { auth, database } from '../../config/firebase';
import { navigate } from '../../config/routes';

//Async requests
async function createUser(userData, dispatch) {
  try {
    let user = await LunesLib.users.create(userData);
    if (user !== null) {
      user = { ...user, ...userData };
      delete user.password;
      dispatch(requestFinished());
      dispatch(signupSuccess(user));
      dispatch(storeUser(user));
      dispatch(storeAddress(user.wallet));
      navigate('PIN');
    } else {
      dispatch(signupError(error));
    }
  } catch (error) {
    dispatch(requestFinished());
    throw error;
  }
}

async function login(email, password, dispatch) {
  try {
    let user = await LunesLib.users.login({ email, password });
    dispatch(requestFinished());
    dispatch(signinSuccess(user));
    dispatch(storeUser(user));
    dispatch(storeAddress(user.wallet));
    Keyboard.dismiss();
    if (user && !user.pinIsValidated) {
      navigate('PIN');
    } else {
      navigate('PIN', { isLogged: true });
    }
  } catch (error) {
    dispatch(requestFinished());
    throw error;
  }
}

export const requestLogin = values => {
  return dispatch => {
    dispatch(requestLoading());
    login(values.email, values.password, dispatch).catch(error => {
      dispatch(requestFinished());
      dispatch(signinError(error));
    });
  };
};

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
    createUser(userData, dispatch).catch(error => {
      dispatch(requestFinished());
      dispatch(signupError(error));
    });
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

export const requestSignout = user => {
  return dispatch => {
    try {
      navigate('Signin');
      LunesLib.users.logout(user.accessToken);
    } catch (error) {
      navigate('Signin');
    }
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

const storeAddress = wallet => ({
  type: types.STORE_WALLET,
  wallet,
});
