import types from '../../config/types';

const initialState = {
  loading: true,
  isShowError: false,
  isShowSuccess: false
};

const leasingStartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_LEASING:
      return {
        ...state,
        lastLeasing: action.payload,
      };
    case types.CLOSE_ALERT_LEASE:
      return {
        ...state,
        isShowError: false,
        isShowSuccess: false
      };
    case types.SUCCESS_LEASE:
      return {
        ...state,
        isShowSuccess: true,
      };
    case types.ERROR_LEASE:
      return {
        ...state,
        isShowError: true
      };
    default:
      return state;
  }
};

export default leasingStartReducer;
