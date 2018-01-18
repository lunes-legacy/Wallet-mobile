import types from './types';
import confirmationTypes from '../Confirmation/types';
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
    case confirmationTypes.CONFIRM_CODE_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default pinReducer;
