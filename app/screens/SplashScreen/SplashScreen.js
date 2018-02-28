import React, { Component } from 'react';
import { Content, Text } from 'native-base';
import { Logo } from 'lunesmobilewallet/app/components';
import I18N from 'lunesmobilewallet/app/i18n/i18n';
import styles from './styles/SplashScreenStyle';

export default class SplashScreen extends Component {
  render() {
    return (
      <Content>
        <Logo />
        <Text style={styles.loadingTxt}>{I18N.t('loading')}</Text>
      </Content>
    );
  }
}
