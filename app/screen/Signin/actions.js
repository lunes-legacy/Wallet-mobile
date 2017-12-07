import types from './types';

import { auth, database } from '../../config/firebase';

export const requestLogin = values => {
  return dispatch => {
    dispatch(signinLoading());

    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then(user => {
        dispatch(signinSuccess(user));
      })
      .catch(error => {
        console.log(error);
        dispatch(signinError(error));
      });
  };
};

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

export const requestSignup = values => {
  const { name, email, password } = values;

  return dispatch => {
    dispatch(signupLoading());

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        if (user !== null) {
          // console.log(user.uid);
          database
            .ref('users')
            .child(user.uid)
            .set({
              fname: name,
              lname: '',
            })
            .then(function() {
              // console.log('Document successfully written!');
              dispatch(signupSuccess(user));
            })
            .catch(error => {
              console.error('Error writing document: ', error);
              dispatch(signupError(error));
            });

          auth.currentUser.sendEmailVerification();
        }
      })
      .catch(error => dispatch(signupError(error)));
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
