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
    //const priceData = await LunesLib.coins.getPrice(queryObj);

    let LUNESData = await axios.get(
      `https://broker.newc.com.br/api/trade/price`
    );

    let dolarPrice = await axios.get(
      `http://api.promasters.net.br/cotacao/v1/valores?moedas=USD&alt=json`
    );

    LUNESData = LUNESData.data.currencies.filter(currency => {
      return currency.nome === 'LUNES';
    });
    let lnsUsdValue = (
      dolarPrice.data.valores.USD.valor * LUNESData[0].ultPreco
    ).toFixed(2);
    let percent =
      typeof LUNESData[0].percentChange !== 'undefined'
        ? LUNESData[0].percentChange
        : 0;
    let change = 'up';
    if (percent < 0) {
      change = 'down';
    } else if (percent === 0) {
      change = '-';
    }

    // formata
    const tsym = CCC.STATIC.CURRENCY.getSymbol(toSymbol);
    const currentPrice = CCC.convertValueToDisplay(tsym, lnsUsdValue);
    const displayPrice = `1 LUNES | ${currentPrice}`;

    const randomTestValue = () => {
      return `1 LUNES | $ ${Math.floor(Math.random() * 10)}`;
    };

    const ticker = {
      DISPLAYPRICE: displayPrice, //randomTestValue(),
      CURRENTPRICE: lnsUsdValue,
      CHANGE24HOUR: `$ ${lnsUsdValue}`,
      CHANGEHOURPCT: percent,
      CHANGE: change,
      COIN: 'LNS',
      PRICE: lnsUsdValue,
    };

    dispatch(priceUpdate(ticker));
    dispatch(tickerUpdate(ticker));
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
    //console.log('error on get price');
  });
};

export const getLunesPrice = () => dispatch => {
  getLunesPriceAction(dispatch).catch(error => {
    //console.log('error on get lunes price');
  });
};

/**
 * @params { string } range - 'RANGE_1D'
 */
export const changeRange = range => dispatch => {
  dispatch(changeColumnPeriod(range));
  getNewPeriod(range, dispatch).catch(error => {
    console.log('error');
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
