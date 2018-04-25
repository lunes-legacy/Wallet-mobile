import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestObtain } from 'lunesmobilewallet/app/screens/Profile/actions';
import SideMenuLogout from './SideMenuLogout';

const mapStateToProps = state => ({
  userInfo: state.auth.user || {},
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestObtain }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuLogout);
