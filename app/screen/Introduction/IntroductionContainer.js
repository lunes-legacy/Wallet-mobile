import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  redirectToAuthAction,
} from './actions';
import Introduction from './IntroductionComponent';

const mapStateToProps = state => {
  return {
    isViewedIntroduction: state.redirectToAuthReducer.isViewedIntroduction,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ redirectToAuthAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
