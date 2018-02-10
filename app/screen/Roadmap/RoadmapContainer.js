// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { check } from './actions';

import Roadmap from './RoadmapComponent';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    loading: state.authSMS.loading,
    error: state.authSMS.error,
  };
};
//const mapDispatchToProps = dispatch => bindActionCreators({ confirmTransactionSend }, dispatch);

export default connect(mapStateToProps)(Roadmap);
