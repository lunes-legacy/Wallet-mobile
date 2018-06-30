// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { generateNewSeed, importSeed } from './actions';
import ImportSeed from './ImportSeedComponent';

const mapStateToProps = state => {
  return {
    loading: state.pinReducer.loading,
    userInfo: state.auth && state.auth.userInfo,
    error: state.pinReducer.error,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ generateNewSeed, importSeed }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ImportSeed);
