/* eslint-disable */
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
    LNS: { ...coinPair, DISPLAYPRICE: '1 LNS | $ 0.08' },
  },
};

const historicDataReducer = (state = initialState, action) => {
  let value;
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
      value = action.ticker;

      if (value.COIN === 'BTC') {
        state.ticker.BTC = { ...state.ticker.BTC, ...value };
      }
      if (value.COIN === 'ETH') {
        state.ticker.ETH = { ...state.ticker.ETH, ...value };
      }
      if (value.COIN === 'LTC') {
        state.ticker.LTC = { ...state.ticker.LTC, ...value };
      }

      return {
        ...state,
        ticker: state.ticker,
      };
    case types.PRICE_DATA:
      value = action.ticker;

      if (value.COIN === 'BTC') {
        state.ticker.BTC = { ...state.ticker.BTC, ...value };
      }
      if (value.COIN === 'ETH') {
        state.ticker.ETH = { ...state.ticker.ETH, ...value };
      }
      if (value.COIN === 'LTC') {
        state.ticker.LTC = { ...state.ticker.LTC, ...value };
      }
      return {
        ...state,
        ticker: state.ticker,
      };
    default:
      return state;
  }
};

export default historicDataReducer;
