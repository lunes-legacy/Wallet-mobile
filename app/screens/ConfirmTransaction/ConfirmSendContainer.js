// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { confirmTransactionSend, getFee, showAlertFee, closeAlertFee } from './actions';

import ConfirmSend from './ConfirmSendComponent';

const mapStateToProps = state => ({
  auth: state.auth,
  authSMS: state.authSMS,
  user: state.auth.user,
  loading: state.confirmTransactionReducer.loading,
  error: state.authSMS.error,
  fee: state.confirmTransactionReducer.fee,
  currentCoinSelected: state.auth.currentCoinSelected,
  isShowAlertFee: state.confirmTransactionReducer.isShowAlertFee,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ confirmTransactionSend, getFee, showAlertFee, closeAlertFee }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmSend);
