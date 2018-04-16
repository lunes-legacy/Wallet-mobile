/* eslint-disable */
import types from '../../config/types';

const initialState = {
  loading: false,
  error: '',
  transactions: [],
};

const historicTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.REQUEST_FINISHED:
      return {
        ...state,
        loading: false,
      };
    case types.HISTORIC_TRANSACTION:
      return {
        ...state,
        transactions: action.transactions,
      };
    default:
      return state;
  }
};

export default historicTransactionReducer;
