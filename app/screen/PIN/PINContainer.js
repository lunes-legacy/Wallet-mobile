// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  requestAddPIN,
  requestValidPIN,
  showTextBackupSeedAction,
  closeTextBackupSeedAction,
  closeShowDialogBackupSeed,
} from './actions';
import PIN from './PINComponent';

const mapStateToProps = state => {
  return {
    loading: state.pinReducer.loading,
    showDialogBackupSeed: state.pinReducer.showDialogBackupSeed,
    showTextBackupSeed: state.pinReducer.showTextBackupSeed,
    seedText: state.pinReducer.seedText,
    wordSeedWasViewed: state.pinReducer.wordSeedWasViewed,
    user: state.userReducer,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestAddPIN,
      requestValidPIN,
      showTextBackupSeedAction,
      closeTextBackupSeedAction,
      closeShowDialogBackupSeed,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PIN);
