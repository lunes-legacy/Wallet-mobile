// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHistoric } from './actions';

import HistoricTransaction from './HistoricTransactionComponent';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    loading: state.authSMS.loading,
    error: state.authSMS.error,
    transactions: state.historicTransactionReducer.transactions,
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getHistoric }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  HistoricTransaction
);
