import types from '../../config/types';
const initialState = {
  loading: false,
  address: '',
  coinChosed: 'BTC',
};

const sendPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LOADING:
      return { ...state, loading: true };
    case types.REQUEST_FINISHED:
      return { ...state, loading: false };
    case types.COPY_ADDRESS:
      return { ...state, address: action.address };
    case types.CHOOSE_COINS:
      return { ...state, coinChosed: action.coinChosed };
    default:
      return state;
  }
};

export default sendPaymentReducer;
