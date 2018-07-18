import types from '../../config/types';

const initialState = {
  loading: true,
  resume: {
    totalBalance: 0,
    leaseBalance: 0,
    availableBalance: 0,
  },
  list: [],
  lastLeasing: {
    amount: 0,
  },
};

const leasingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LEASING_FULFIILLED':
      return {
        ...state,
        lastLeasing: action.payload,
      };
    case 'GET_LEASING':
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case 'CANCEL_LEASING_FULFILLED':
      return {
        ...state,
      };
    case 'GET_LEASING_RESUME':
      return {
        ...state,
        resume: action.payload,
      };
    default:
      return state;
  }
};

export default leasingReducer;
