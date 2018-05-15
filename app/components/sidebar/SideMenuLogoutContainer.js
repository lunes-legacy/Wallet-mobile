import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestObtain } from 'lunesmobilewallet/app/screens/Profile/actions';
import { requestSignout } from 'lunesmobilewallet/app/screens/Signin/actions';

import SideMenuLogout from './SideMenuLogout';

const mapStateToProps = state => ({
  userInfo: state.auth.user || {},
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestObtain, requestSignout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuLogout);
