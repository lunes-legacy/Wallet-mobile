import types from 'lunesmobilewallet/app/config/types';

const initialState = {
  authorized: null,
  loading: false,
  error: '',
  trySignin: false,
  trySignup: false,
  balance: null,
  seed: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.REQUEST_FINISHED:
      return {
        ...state,
        loading: false,
      };
    case types.STORE_USER:
      return {
        ...state,
        userInfo: action.user,
      };
    case types.SET_SEED_USER:
      return {
        ...state,
        seed: action.seed,
      };
    case types.STORE_BALANCE:
      return {
        ...state,
        balance: action.balance,
      };
    // SIGNIN
    case types.SIGNIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authorized: true,
        user: action.user,
      };
    case types.SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        authorized: false,
        user: false,
        error: action.error,
      };
    // SIGNUP
    case types.SIGNUP_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        authorized: true,
        user: action.user,
      };
    case types.SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        authorized: false,
        user: false,
        error: action.error,
      };
    // SIGNOUT
    case types.SIGNOUT_LOADING:
      return { ...state, loading: true };
    case types.SIGNOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        authorized: false,
        user: false,
      };
    case types.SIGNOUT_ERROR:
      return {
        ...state,
        loading: false,
        authorized: false,
        user: false,
      };
    case types.CLEAR_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case types.REHYDRATE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
