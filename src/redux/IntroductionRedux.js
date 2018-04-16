import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  persistIntroductionViewed: null,
});

export const IntroductionTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isViewedIntroduction: false,
  fetching: false,
  error: null,
});

/* ------------- Reducers ------------- */

export const redirect = (state, { isViewedIntroduction }) =>
  state.merge({ isViewedIntroduction: false });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PERSIST_INTRODUCTION_VIEWED]: redirect,
});
