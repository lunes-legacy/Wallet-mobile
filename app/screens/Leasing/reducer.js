import types from '../../config/types';

const initialState = {
  loading: true,
  isShowError: false,
  isShowSuccess: false,
  resume: {
    totalBalance: 0,
    leaseBalance: 0,
    availableBalance: 0,
  },
  list: [],
};

const leasingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLEAR_ALL_INFO:
      return initialState;
    case types.GET_LEASING:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case types.CANCEL_LEASING:
      return {
        ...state,
        loading: action.payload,
      };
    case types.GET_LEASING_RESUME:
      return {
        ...state,
        resume: action.payload,
      };
    case types.CLOSE_ALERT_LEASE:
      return {
        ...state,
        isShowError: false,
        isShowSuccess: false,
      };
    case types.SUCCESS_CANCEL_LEASE:
      return {
        ...state,
        isShowSuccess: true,
      };
    case types.ERROR_CANCEL_LEASE:
      return {
        ...state,
        isShowError: true,
      };
    default:
      return state;
  }
};

export default leasingReducer;
