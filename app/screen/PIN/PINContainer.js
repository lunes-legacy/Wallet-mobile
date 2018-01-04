// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestAddPIN } from './actions';
import PIN from './PINComponent';

const mapStateToProps = state => {
  return {
    loading: state.pinReducer.loading,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestAddPIN }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PIN);
