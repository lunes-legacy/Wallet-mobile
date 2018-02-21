import types from '../../config/types';

const initialState = {
  isConnected: true,
};

const connectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CONNECTION_STATUS:
      return { ...state, isConnected: action.isConnected };
    default:
      return state;
  }
};

export default connectionReducer;
