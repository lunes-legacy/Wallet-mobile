import LunesLib from 'lunes-lib';
import _ from 'lodash';
import types from '../../config/types';
import { navigate } from '../../config/routes';
import I18N from '../../i18n/i18n';
import rangeConstant from '../../constants/general';
import CCC from '../../utils/ccc-streamer-utilities';

async function getHistory(dispatch) {
  try {
    let queryObj = {
      fromSymbol: 'BTC',
      toSymbol: I18N.t('CURRENCY_USER'),
      range: rangeConstant.PERIOD.RANGE_1D,
    };
    let historic = await LunesLib.coins.getHistory(queryObj);
    dispatch(historicData(historic));
  } catch (error) {
    //dispatch(requestFinished());
    throw error;
  }
}

/**
 * @params { string } datePeriod - e.g.
 * datePeriod: {
 *  fromSymbol: 'BTC',
 *  toSymbol: 'USD or BRL',
 *  range: 'RANGE_1D' // range of 1 day
 * }
 */
async function getNewPeriod(range, dispatch) {
  try {
    let queryObj = {
      fromSymbol: 'BTC',
      toSymbol: I18N.t('CURRENCY_USER'),
      range,
    };
    let historic = await LunesLib.coins.getHistory(queryObj);
    dispatch(historicData(historic));
  } catch (error) {
    throw error;
  }
}

async function getPrice(dispatch) {
  try {
    const toSymbol = I18N.t('CURRENCY_USER');
    let queryObj = {
      fromSymbol: 'BTC',
      toSymbol: toSymbol,
      exchange: I18N.t('CURRENCY_EXCHANGE'),
    };
    var tsym = CCC.STATIC.CURRENCY.getSymbol(toSymbol);
    let priceData = await LunesLib.coins.getPrice(queryObj);
    const currentPrice = CCC.convertValueToDisplay(tsym, priceData[toSymbol]);
    const displayPrice = `1 BTC | ${currentPrice}`;
    let ticker = {
      DISPLAYPRICE: displayPrice,
      CURRENTPRICE: currentPrice,
      CHANGE24HOUR: '-',
      CHANGEHOURPCT: '0%',
      CHANGE: 'up',
      COIN: 'BTC',
    };
    dispatch(priceUpdate(ticker));
  } catch (error) {
    dispatch(requestFinished());
    throw error;
  }
}

export const requestHistoricData = () => {
  return dispatch => {
    getHistory(dispatch).catch(error => {
      //alert('error on get historic');
    });
  };
};

export const updateTicker = ticker => {
  return dispatch => {
    dispatch(tickerUpdate(ticker));
  };
};

export const requestPrice = () => {
  return dispatch => {
    getPrice(dispatch).catch(error => {
      alert('error on get price');
    });
  };
};

/**
 * @params { string } range - 'RANGE_1D'
 */
export const changeRange = range => {
  return dispatch => {
    dispatch(changeColumnPeriod(range));
    getNewPeriod(range, dispatch).catch(error => {
      alert('error');
    });
  };
};

const changeColumnPeriod = range => ({
  type: types.CHANGE_RANGE,
  range,
});

const historicData = historic => ({
  type: types.HISTORIC_DATA,
  historic,
});

const tickerUpdate = ticker => ({
  type: types.TICKER_UPDATE,
  ticker,
});

const priceUpdate = ticker => ({
  type: types.PRICE_DATA,
  ticker,
});
