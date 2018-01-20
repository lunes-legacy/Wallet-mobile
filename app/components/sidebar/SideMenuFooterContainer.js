import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SideMenuFooter from './SideMenuFooter';

const mapStateToProps = state => {
  return {
    userInfo: state.userReducer.userInfo || {},
    balanceData: state.pinReducer.balance,
  };
};

export default connect(mapStateToProps)(SideMenuFooter);
