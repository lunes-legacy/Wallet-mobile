import React from 'react';
import { Text, View } from 'react-native';
import { Logo } from '../../components';
import styles from './styles';

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View>
        <Logo />
        <Text style={styles.loadingTxt}>Carregando...</Text>
      </View>
    );
  }
}
