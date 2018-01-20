// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProfile } from './actions';
import Profile from './ProfileComponent';

const mapStateToProps = state => {
  return {
    loading: state.pinReducer.loading,
    userInfo: state.userReducer.userInfo || {},
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateProfile }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
