// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chooseCoinAction } from './actions';
import SendPayment from './SendPaymentComponent';

const mapStateToProps = state => {
  return {
    loading: state.sendPaymentReducer.loading,
    coinChosed: state.sendPaymentReducer.coinChosed,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ chooseCoinAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SendPayment);
