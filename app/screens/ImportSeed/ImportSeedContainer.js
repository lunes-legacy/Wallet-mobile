// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  generateNewSeed,
  importSeed,
  closeAlert,
  clearSeedWords,
} from './actions';
import ImportSeed from './ImportSeedComponent';

const mapStateToProps = state => {
  return {
    loading: state.pinReducer.loading,
    userInfo: state.auth && state.auth.userInfo,
    error: state.pinReducer.error,
    seedWords: state.importSeedReducer.seedWords,
    address: state.importSeedReducer.address,
    showSuccess: state.importSeedReducer.showSuccess,
    showError: state.importSeedReducer.showError,
    msgError: state.importSeedReducer.msgError,
    msgSuccess: state.importSeedReducer.msgSuccess,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      generateNewSeed,
      importSeed,
      closeAlert,
      clearSeedWords,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ImportSeed);
