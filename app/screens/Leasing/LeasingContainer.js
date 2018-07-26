import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setLeasingAmount,
  getLeasingHistory,
  cancelLeasing,
  getLeasingValue,
  closeAlert,
} from './actions';

import Leasing from './LeasingComponent';

const mapStateToProps = state => ({
  loading: state.leasingReducer.loading,
  list: state.leasingReducer.list,
  resume: state.leasingReducer.resume,
  balance: state.auth.balance,
  userBalance:
    state.auth.balance &&
    state.auth.balance.LNS &&
    state.auth.balance.LNS.confirmed
      ? state.auth.balance.LNS.confirmed
      : 0,
  isShowError: state.leasingReducer.isShowError,
  isShowSuccess: state.leasingReducer.isShowSuccess,
});

const mapDispatchToProps = dispatch => {
  return {
    closeAlert: () => {
      dispatch(closeAlert());
    },
    getLeasingHistory: data => {
      dispatch(getLeasingHistory(data));
    },
    cancelLeasing: data => {
      dispatch(cancelLeasing(data));
    },
    getLeasingValue: data => {
      dispatch(getLeasingValue(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Leasing);
