import LunesLib from 'lunes-lib';
import _ from 'lodash';
import types from '../../config/types';
import { navigate } from '../../config/routes';
import I18N from '../../i18n/i18n';
import rangeConstant from '../../constants/general';

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

export const requestHistoricData = () => {
  return dispatch => {
    getHistory(dispatch).catch(error => {
      alert('error on get historic');
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
