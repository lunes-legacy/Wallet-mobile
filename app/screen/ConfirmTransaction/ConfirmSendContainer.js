// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { confirmTransactionSend, getFee } from './actions';

import ConfirmSend from './ConfirmSendComponent';

const mapStateToProps = state => {
  return {
    auth: state.auth,
    authSMS: state.authSMS,
    user: state.auth.user,
    loading: state.confirmTransactionReducer.loading,
    error: state.authSMS.error,
    fee: state.confirmTransactionReducer.fee,
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ confirmTransactionSend, getFee }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmSend);
