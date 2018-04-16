// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestAddPIN, requestValidPIN } from './actions';
import QRCode from './QRCodeComponent';

const mapStateToProps = state => ({
  qrcodeAdressToSend: state.sendPaymentReducer.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestAddPIN, requestValidPIN }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QRCode);
