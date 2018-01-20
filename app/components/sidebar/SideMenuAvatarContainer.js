import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SideMenuAvatar from './SideMenuAvatar';

const mapStateToProps = state => {
  return {
    userInfo: state.auth.user || {},
  };
};

export default connect(mapStateToProps)(SideMenuAvatar);
