import types from '../../config/types';
import rangeConstant from '../../constants/general';

const coinPair = {
  CHANGE: '',
  CHANGE24HOUR: '-',
  CHANGEHOURPCT: '-',
  CURRENTPRICE: '-',
  DISPLAYPRICE: '-',
  OPEN24HOUR: '-',
  PRICE: '-',
};

const initialState = {
  loading: false,
  historic: null,
  range: rangeConstant.PERIOD.RANGE_1D,
  ticker: {
    BTC: coinPair,
    ETH: coinPair,
    LTC: coinPair,
  },
};

const historicDataReducer = (state = initialState, action) => {
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
    case types.HISTORIC_DATA:
      return {
        ...state,
        historic: action.historic,
      };
    case types.CHANGE_RANGE:
      return {
        ...state,
        range: action.range,
      };
    case types.TICKER_UPDATE:
      const value = action.ticker;

      if (value.COIN === 'BTC') {
        state.ticker.BTC = value;
      }
      if (value.COIN === 'ETH') {
        state.ticker.ETH = value;
      }
      if (value.COIN === 'LTC') {
        state.ticker.LTC = value;
      }

      return {
        ...state,
      };
    case types.PRICE_DATA:
      return {
        ...state,
        ticker: action.price,
      };
    default:
      return state;
  }
};

export default historicDataReducer;
