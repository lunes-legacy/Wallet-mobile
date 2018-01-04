import types from './types';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_USER:
      return {
        ...state,
        userStored: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
