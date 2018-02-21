import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  requestLogin,
  requestSignup,
  requestSignout,
  clearError,
} from './actions';

import { updateConnectionStatus } from '../../services/connectionService/actions';

import Signin from './SigninComponent';

const handleConnectionError = status =>
  !status && { messageKey: 'NOT_CONNECTED' };

const mapStateToProps = state => ({
  isConnected: state.connectionReducer.isConnected,
  tabSelected: state.tabsReducer.tabSelected,
  user: state.auth.user,
  authorized: state.auth.authorized,
  error:
    handleConnectionError(state.connectionReducer.isConnected) ||
    state.auth.error,
  loading: state.auth.loading,
  userInfo: state.auth.userInfo || {},
  wordSeedWasViewed: state.pinReducer.wordSeedWasViewed,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestLogin,
      requestSignup,
      requestSignout,
      clearError,
      updateConnectionStatus,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
