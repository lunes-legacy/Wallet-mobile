// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chooseCoinAction, getBalance } from './actions';
import SendPayment from './SendPaymentComponent';

const mapStateToProps = state => {
  return {
    loading: state.sendPaymentReducer.loading,
    coinChosed: state.sendPaymentReducer.coinChosed,
    balanceData: state.auth.balance,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ chooseCoinAction, getBalance }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SendPayment);
