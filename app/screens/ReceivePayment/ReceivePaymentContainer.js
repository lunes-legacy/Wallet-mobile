// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestAddPIN, requestValidPIN, doAction } from './actions';
import ReceivePayment from './ReceivePaymentComponent';

const mapStateToProps = state => ({
  loading: state.receivePaymentReducer.loading,
  currentCoinSelected: state.auth.currentCoinSelected,
  ticker: state.historicDataReducer.ticker,
  balance: state.auth.balance,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestAddPIN, requestValidPIN, doAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReceivePayment);
