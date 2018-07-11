import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LunesMarket from './LunesMarket';
import {
  requestHistoricData,
  changeRange,
  updateTicker,
  requestPrice,
  doAction,
} from './actions';

const mapStateToProps = state => ({
  userInfo: state.auth.user || {},
  balanceData: state.auth.balance,
  currentCoinSelected: state.auth.currentCoinSelected,
  historic: state.historicDataReducer.historic,
  range: state.historicDataReducer.range,
  ticker: state.historicDataReducer.ticker,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestHistoricData,
      changeRange,
      updateTicker,
      requestPrice,
      doAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LunesMarket);
