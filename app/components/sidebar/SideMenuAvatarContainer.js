import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SideMenuAvatar from './SideMenuAvatar';
import { requestObtain } from '../../screen/Profile/actions';

const mapStateToProps = state => {
  return {
    userInfo: state.auth.user || {},
    userProfile: state.profileReducer && state.profileReducer.userProfile,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestObtain }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuAvatar);
