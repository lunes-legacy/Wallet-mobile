// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestCode, confirmCode } from './actions';

import Confirmation from './ConfirmationComponent';

const mapStateToProps = state => ({
  auth: state.auth,
  authSMS: state.authSMS,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestCode, confirmCode }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
