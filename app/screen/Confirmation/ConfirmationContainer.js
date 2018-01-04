// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestCode, confirmCode, clearErrorNumberInvalid } from './actions';

import Confirmation from './ConfirmationComponent';

const mapStateToProps = state => ({
  auth: state.auth,
  authSMS: state.authSMS,
  user: state.auth.user,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { requestCode, confirmCode, clearErrorNumberInvalid },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
