import axios from 'axios';
import API from '../../constants/api';
import types from './types';

export const requestLogin = values => {
  return dispatch => {
    let request = axios.post(`${API.OPEN_URL}/login`, {
      email: values.email,
      password: values.password,
    });

    request.then(
      response => {
        dispatch({ type: types.USER_LOGGED, payload: response.data });
      },
      error => {
        dispatch({ type: types.USER_NOT_LOGGED, payload: error });
      }
    );
  };
};

export const requestSignup = values => {
  return dispatch => {
    let request = axios.post(`${API.OPEN_URL}/signup`, {
      name: values.name,
      email: values.email,
      password: values.password,
    });
    request.then(
      response => {
        dispatch({ type: types.USER_LOGGED, payload: response.data });
      },
      error => {
        dispatch({ type: types.USER_NOT_LOGGED, payload: error });
      }
    );
  };
};

export const requestValidateToken = token => {
  let request = axios.post(`${API.OPEN_URL}/validateToken`, { token });
  return {
    type: types.VALIDATE_TOKEN,
    payload: request,
  };
};
