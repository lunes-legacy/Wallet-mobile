// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  requestLogin,
  requestSignup,
  requestSignout,
  clearError,
} from './actions';

import Signin from './SigninComponent';

const mapStateToProps = state => {
  return {
    tabSelected: state.tabsReducer.tabSelected,
    user: state.auth.user,
    authorized: state.auth.authorized,
    error: state.auth.error,
    loading: state.auth.loading,
    userInfo: state.auth.userInfo || {},
    wordSeedWasViewed: state.pinReducer.wordSeedWasViewed,
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { requestLogin, requestSignup, requestSignout, clearError },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
