import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LunesMarket from './LunesMarket';
import { requestHistoricData, changeRange } from './actions';

const mapStateToProps = state => {
  return {
    userInfo: state.auth.user || {},
    balanceData: state.auth.balance,
    historic: state.historicDataReducer.historic,
    range: state.historicDataReducer.range,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestHistoricData, changeRange }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LunesMarket);
