import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import {nome_da_acao} from './actions';

import LeasingStart from './LeasingStartComponent';

const mapStateToProps = state => ({
  balanceData: state.auth.balance.LNS.confirmed,
});

// const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps
  // mapStateToProps,
  // mapDispatchToProps
)(LeasingStart);
