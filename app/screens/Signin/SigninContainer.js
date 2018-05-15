import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateConnectionStatus } from 'lunesmobilewallet/app/services/connectionService/actions';
import { redirectToIntroduction } from '../Introduction/actions';
import {
  redirectToPIN,
  requestLogin,
  requestSignup,
  requestSignout,
  clearError,
} from './actions';
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
      redirectToPIN,
      requestLogin,
      requestSignup,
      requestSignout,
      clearError,
      updateConnectionStatus,
      redirectToIntroduction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
