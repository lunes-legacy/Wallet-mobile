import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Logo } from '../../components';
import styles from './styles';

export default class Introduction extends React.Component {
  render() {
    return (
      <View>
        <Logo />
        <Text style={styles.instructions}>
          Armazene seus bitcoins, litecoins, ethereum, lunes, etc. Todas as suas
          criptomoedas na palma da mão.
        </Text>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.start}>INICIAR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
