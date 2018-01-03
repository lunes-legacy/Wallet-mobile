// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestLogin, requestSignup, requestSignout } from './actions';

import Signin from './SigninComponent';

const mapStateToProps = state => ({
  tabSelected: state.tabsReducer.tabSelected,
  user: state.auth.user,
  authorized: state.auth.authorized,
  error: state.auth.error,
  loading: state.auth.loading,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestLogin, requestSignup, requestSignout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
