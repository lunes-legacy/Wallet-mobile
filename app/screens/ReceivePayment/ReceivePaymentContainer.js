// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestAddPIN, requestValidPIN } from './actions';
import ReceivePayment from './ReceivePaymentComponent';

const mapStateToProps = state => ({
  loading: state.receivePaymentReducer.loading,
  wallet: state.receivePaymentReducer.wallet,
  currentCoinSelected: state.auth.currentCoinSelected,
  addressLNS: state.importSeedReducer.address
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestAddPIN, requestValidPIN }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReceivePayment);
