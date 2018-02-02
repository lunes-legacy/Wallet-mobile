// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestObtain, requestUpdate } from './actions';
import Profile from './ProfileComponent';

const mapStateToProps = state => {
  return {
    loading: state.pinReducer.loading,
    userInfo: state.auth && state.auth.userInfo,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestObtain, requestUpdate }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
