import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  persistIntroductionViewedAction,
  redirectToAuthAction,
} from './actions';
import Swiper from './SwiperComponent';

const mapStateToProps = state => ({
  isViewedIntroduction: state.redirectToAuthReducer.isViewedIntroduction,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ redirectToAuthAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Swiper);
