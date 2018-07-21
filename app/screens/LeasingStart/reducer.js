import types from '../../config/types';

const initialState = {
  loading: false,
  isShowError: false,
  isShowSuccess: false,
};

const leasingStartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLEAR_ALL_INFO:
      return initialState;
    case types.START_LEASING:
      return {
        ...state,
        lastLeasing: action.payload,
      };
    case types.CLOSE_ALERT_LEASE:
      return {
        ...state,
        isShowError: false,
        isShowSuccess: false,
      };
    case types.SUCCESS_LEASE:
      return {
        ...state,
        isShowSuccess: true,
      };
    case types.ERROR_LEASE:
      return {
        ...state,
        isShowError: true,
      };
    case types.SHOW_LOADING_LEASE:
      return {
        ...state,
        loading: true,
      };
    case types.HIDE_LOADING_LEASE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default leasingStartReducer;
