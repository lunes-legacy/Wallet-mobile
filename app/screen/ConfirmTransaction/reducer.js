import types from '../../config/types';

const initialState = {
  loading: false,
  error: '',
  transactionId: '',
};

const confirmTransactionReducer = (state = initialState, action) => {
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
    case types.SHOW_TRANSACTION_SUCCESS:
      return {
        ...state,
        transactionId: action.transactionId,
      };
    case types.ERROR_TRANSACTION_SUCCESS:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default confirmTransactionReducer;
