import axios from 'axios';
import API from '../../constants/api';

// Key storage
const userKey = '_luneswallet_user';

// Types
import types from './types';

const INITIAL_STATE = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  validToken: false,
};

//actions
function submit(values, url) {
  return dispatch => {
    dispatch({ type: types.USER_FETCHED });

    return axios
      .post(url, values)
      .then(
        response => {
          response.json();
        },
        error => {
          console.log(error);
        }
      )
      .then(json =>
        dispatch({ type: types.USER_FETCHED, payload: response.data })
      );
  };
}

export function login(values) {
  return submit(values, `${API.OPEN_URL}/login`);
}

export function signup(values) {
  return submit(values, `${API.OPEN_URL}/signup`);
}

export function logout() {
  return { action: types.TOKEN_VALIDATED, payload: false };
}

export function validateToken(token) {
  return dispatch => {
    if (token) {
      axios
        .post(`${API.OPEN_URL}/validateToken`, { token })
        .then(response => {
          dispatch({
            type: types.TOKEN_VALIDATED,
            payload: response.data.valid,
          });
        })
        .catch(error => {
          dispatch({ type: types.TOKEN_VALIDATED, payload: false });
        });
    } else {
      dispatch({ type: types.TOKEN_VALIDATED, payload: false });
    }
  };
}

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.TOKEN_VALIDATED:
      if (action.payload) {
        return { ...state, validToken: true };
      } else {
        //await AsyncStorage.removeItem(userKey);
        return { ...state, validToken: false, user: null };
      }
    case types.USER_FETCHED:
      //await AsyncStorage.setItem(userKey, action.payload);
      return { ...state, user: action.payload, validToken: true };
    case types.USER_LOGGED:
      return { ...state, validToken: true, user: action.payload };
    default:
      return state;
  }
}
