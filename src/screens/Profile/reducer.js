/* eslint-disable */
import types from '../../config/types';

const initialState = {
  loading: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LOADING:
      return { ...state, loading: true };
    case types.REQUEST_FINISHED:
      return { ...state, loading: false };
    case types.OBTAIN_USER_PROFILE_ERROR:
      return { ...state, error: action.error };
    case types.OBTAIN_USER_PROFILE_SUCCESS:
      return { ...state, userProfile: action.userProfile };
    case types.REHYDRATE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default profileReducer;
