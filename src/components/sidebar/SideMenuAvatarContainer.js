import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestObtain } from 'app/src/screens/Profile/actions';
import SideMenuAvatar from './SideMenuAvatar';

const mapStateToProps = state => ({
  userInfo: state.auth.user || {},
  userProfile: state.profileReducer && state.profileReducer.userProfile
});

const mapDispatchToProps = dispatch => bindActionCreators({ requestObtain }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuAvatar);
