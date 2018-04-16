import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SideMenuFooter from './SideMenuFooter';

const mapStateToProps = state => ({
  userInfo: state.auth.userInfo || {},
  balanceData: state.auth.balance,
  displayPriceBTC: state.historicDataReducer.ticker.BTC,
});

export default connect(mapStateToProps)(SideMenuFooter);
