import types from './types';
import _ from 'lodash';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_USER:
      let userResumed = {};
      if (action.user && action.user._user) {
        userResumed = {
          email: action.user._user.email,
          photoURL: action.user._user.photoURL,
          phoneNumber: action.user._user.phoneNumber,
        };
      }

      return {
        ...state,
        userInfo: userResumed,
      };
    default:
      return state;
  }
};

export default userReducer;
