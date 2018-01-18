// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changePasswordAction } from './actions';
import ChangePassword from './ChangePasswordComponent';

const mapStateToProps = state => {
  return {
    loading: state.changePasswordReducer.loading,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changePasswordAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
