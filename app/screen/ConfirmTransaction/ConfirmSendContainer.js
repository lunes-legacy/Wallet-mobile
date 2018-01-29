// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { confirmTransactionSend } from './actions';

import ConfirmSend from './ConfirmSendComponent';

const mapStateToProps = state => {
  return {
    auth: state.auth,
    authSMS: state.authSMS,
    user: state.auth.user,
    loading: state.authSMS.loading,
    error: state.authSMS.error,
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ confirmTransactionSend }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmSend);
