import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setLeasingAmount,
  getLeasingHistory,
  cancelLeasing,
  getLeasingValue,
} from './actions';

import Leasing from './LeasingComponent';

const mapStateToProps = state => ({
  loading: state.leasingReducer.loading,
  list: state.leasingReducer.list,
  resume: state.leasingReducer.resume,
  balance: state.auth.balance,
});

const mapDispatchToProps = dispatch => {
  return {
    setLeasingAmount: () => {
      dispatch(setLeasingAmount());
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leasing);
