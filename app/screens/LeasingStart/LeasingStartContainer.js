import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startLeasing, closeAlert } from './actions';

import LeasingStart from './LeasingStartComponent';

const mapStateToProps = state => ({
  balanceData: state.auth.balance.LNS.confirmed,
  isShowError: state.leasingStartReducer.isShowError,
  isShowSuccess: state.leasingStartReducer.isShowSuccess,
  loading: state.leasingStartReducer.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      startLeasing,
      closeAlert,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LeasingStart);
