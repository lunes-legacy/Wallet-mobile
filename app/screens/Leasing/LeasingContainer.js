import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import {nome_da_acao} from './actions';

import Leasing from './LeasingComponent';

const mapStateToProps = state => ({
  list: state.leasingReducer.list,
  resume: state.leasingReducer.resume,
  balanceData: state.auth.balance.LNS.confirmed,
});

// const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps
  // mapStateToProps,
  // mapDispatchToProps
)(Leasing);
