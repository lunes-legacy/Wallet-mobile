// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestLogin, requestSignup, requestValidateToken } from './actions';
import {
  LogoSmall,
  Base,
  Tabs,
  TabLinkContainer,
  TabContent,
  LoginForm,
} from '../../components';

import styles from './styles';
import Signin from './SigninComponent';

const mapStateToProps = state => ({
  tabSelected: state.tabsReducer.tabSelected,
  user: state.auth.user,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { requestLogin, requestSignup, requestValidateToken },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
