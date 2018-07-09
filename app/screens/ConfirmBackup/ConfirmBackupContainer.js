/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { redirectToAuthAction } from './actions';
import ConfirmBackup from './ConfirmBackupComponent';

const mapStateToProps = state => {
  return {
    seedText: state.auth.seed,
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ redirectToAuthAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmBackup);
