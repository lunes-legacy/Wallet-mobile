import types from './types';
import _ from 'lodash';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_USER:
      return {
        ...state,
        userInfo: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
