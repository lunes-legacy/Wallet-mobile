import types from './types';
const initialState = {
  loading: false,
  pin: '',
};

const pinReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LOADING:
      return { ...state, loading: true };
    case types.REQUEST_FINISHED:
      return { ...state, loading: false };
    case types.ADD_PIN:
      return { ...state, pin: action.pin };
    default:
      return state;
  }
};

export default pinReducer;
