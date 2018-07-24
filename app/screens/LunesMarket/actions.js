/* eslint-disable */
import LunesLib from 'lunes-lib';
import types from '../../config/types';
import I18N from '../../i18n/i18n';
import rangeConstant from '../../constants/general';
import CCC from '../../utils/ccc-streamer-utilities';

import axios from 'axios';

async function getHistory(tabCoin = { name: 'BTC' }, dispatch) {
  try {
    const queryObj = {
      fromSymbol: tabCoin.name,
      toSymbol: I18N.t('CURRENCY_USER'),
      range: rangeConstant.PERIOD.RANGE_1D,
    };
    const historic = await LunesLib.coins.getHistory(queryObj);
    dispatch(historicData(historic));
  } catch (error) {
    // dispatch(requestFinished());
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
    const queryObj = {
      fromSymbol: 'BTC',
      toSymbol: I18N.t('CURRENCY_USER'),
      range,
    };
    const historic = await LunesLib.coins.getHistory(queryObj);
    dispatch(historicData(historic));
  } catch (error) {
    throw error;
  }
}

async function getPrice(dispatch) {
  try {
    const toSymbol = I18N.t('CURRENCY_USER');
    const queryObj = {
      fromSymbol: 'BTC',
      toSymbol,
      exchange: I18N.t('CURRENCY_EXCHANGE'),
    };
    const tsym = CCC.STATIC.CURRENCY.getSymbol(toSymbol);
    const priceData = await LunesLib.coins.getPrice(queryObj);
    const currentPrice = CCC.convertValueToDisplay(tsym, priceData[toSymbol]);
    const displayPrice = `1 BTC | ${currentPrice}`;
    const ticker = {
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

async function getLunesPriceAction(dispatch) {
  try {
    // pegar o valor do BTC em BRL, USD ...
    const toSymbol = I18N.t('CURRENCY_USER');
    const queryObj = {
      fromSymbol: 'BTC',
      toSymbol,
      exchange: I18N.t('CURRENCY_EXCHANGE'),
    };
    const priceData = await LunesLib.coins.getPrice(queryObj);

    // Get LUNES price in BTC
    let LUNESData = await axios.get(
      `https://exrates.me/public/coinmarketcap/ticker`
    );
    LUNESData = LUNESData.data.LNS_BTC;
    let lnsUsdValue = priceData[toSymbol] * LUNESData.last;
    let percent = LUNESData.percentChange;
    let change = 'up';
    if (percent < 0) {
      change = 'down';
    }

    // formata
    const tsym = CCC.STATIC.CURRENCY.getSymbol(toSymbol);
    const currentPrice = CCC.convertValueToDisplay(tsym, lnsUsdValue);
    const displayPrice = `1 LUNES | ${currentPrice}`;

    const ticker = {
      DISPLAYPRICE: displayPrice,
      CURRENTPRICE: lnsUsdValue,
      CHANGE24HOUR: '-',
      CHANGEHOURPCT: percent,
      CHANGE: change,
      COIN: 'LNS',
      PRICE: lnsUsdValue,
    };

    // retornar pro redux
    dispatch(priceUpdate(ticker)); // verifique por que dois estados
    dispatch(tickerUpdate(ticker)); //
  } catch (error) {
    dispatch(requestFinished());
    throw error;
  }
}

export const doAction = tabCoin => dispatch => {
  dispatch(selectCurrentCoin(tabCoin.name));
  getHistory(tabCoin, dispatch).catch(error => {
    console.log(error);
  });
};

export const requestHistoricData = () => dispatch => {
  getHistory({ name: 'BTC' }, dispatch).catch(error => {
    // alert('error on get historic');
  });
};

export const updateTicker = ticker => dispatch => {
  dispatch(tickerUpdate(ticker));
};

export const requestPrice = () => dispatch => {
  getPrice(dispatch).catch(error => {
    alert('error on get price');
  });
};

export const getLunesPrice = () => dispatch => {
  getLunesPriceAction(dispatch).catch(error => {
    alert('error on get lunes price');
  });
};

/**
 * @params { string } range - 'RANGE_1D'
 */
export const changeRange = range => dispatch => {
  dispatch(changeColumnPeriod(range));
  getNewPeriod(range, dispatch).catch(error => {
    alert('error');
  });
};

export const selectCoin = coin => dispatch => {
  dispatch(selectCurrentCoin(coin));
};

const selectCurrentCoin = currentCoinSelected => ({
  type: types.CURRENT_COIN_SELECTED,
  currentCoinSelected,
});

const changeColumnPeriod = range => ({
  type: types.CHANGE_RANGE,
  range,
});

const historicData = historic => ({
  type: types.HISTORIC_DATA,
  historic,
});

const historicTransaction = historic => ({
  type: types.HISTORIC_TRANSACTION,
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
