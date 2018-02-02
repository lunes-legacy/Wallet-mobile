// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changePasswordAction, clearError, clearSuccess } from './actions';
import ChangePassword from './ChangePasswordComponent';

const mapStateToProps = state => {
  return {
    loading: state.changePasswordReducer.loading,
    error: state.changePasswordReducer.error,
    success: state.changePasswordReducer.success,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { changePasswordAction, clearError, clearSuccess },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
