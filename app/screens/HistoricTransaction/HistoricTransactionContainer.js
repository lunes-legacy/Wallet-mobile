// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHistoric, doAction } from './actions';

import HistoricTransaction from './HistoricTransactionComponent';

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.authSMS.loading,
  error: state.authSMS.error,
  balance: state.auth.balance,
  currentCoinSelected: state.auth.currentCoinSelected,
  history: state.historicTransactionReducer.history,
  ticker: state.historicDataReducer.ticker,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getHistoric, doAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  HistoricTransaction
);
