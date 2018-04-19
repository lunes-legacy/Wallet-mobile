import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  requestLogin: ['user'],
  requestSignup: ['user'],
  success: ['user'],
  failure: ['problem'],
  clean: null
});

export const SigninTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
// I'd enjoyed that approach with appState,
// to control the application state
// without isLoadin: true, isError: false, isSucess: false
// the best approach would be to use enum or TS so help to refactor :)
// to learn about what approach follows:
// https://twitter.com/DavidKPiano/status/972620672743673856
export const INITIAL_STATE = Immutable({
  user: {},
  appState: null, // 'error' or 'success' or 'loading'
  problem: null,
  type: ''
});

export const requestLogin = (state, action) => state.merge({ appState: 'loading', ...action });

export const requestSignup = (state, action) => state.merge({ appState: 'loading', ...action });

export const success = (state, action) => state.merge({ appState: 'success', ...action });

export const failure = (state, action) =>
  state.merge({
    appState: 'error',
    ...action
  });

export const clean = (state, action) => state.merge({ ...INITIAL_STATE });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_LOGIN]: requestLogin,
  [Types.SUCCESS]: success,
  [Types.FAILURE]: failure,
  [Types.CLEAN]: clean,
  [Types.REQUEST_SIGNUP]: requestSignup
});
