// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { requestAddPIN, requestValidPIN } from './actions';
import NoticeNotification from './NoticeNotificationComponent';

const mapStateToProps = state => ({
  loading: state.receivePaymentReducer.loading
});

/* const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestAddPIN, requestValidPIN }, dispatch); */

export default connect(mapStateToProps)(NoticeNotification);
