import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import { Logo, Base, Button } from '../../components';
import styles from './styles';

export default class Confirmation extends React.Component {
  onPress() {
    this.props.navigation.navigate('Signin');
  }
  render() {
    return (
      <Base>
        <Icon name="email" size={50} color="#fff" />
        <Text style={styles.instructions}>Confirmação via SMS</Text>
        <Text style={styles.instructions}>
          Aguardando para detectar automaticamente um SMS enviado para +55 83
          987137261
        </Text>
        <Text style={styles.instructions}>Número errado?</Text>

        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
          <Icon name="email" size={20} color="#fff" />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 0,
              color: '#fff',
            }}
            value="85"
          />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 0,
              color: '#fff',
            }}
            value="98798798789"
          />
        </View>

        <Text style={{ paddingTop: 20, color: 'green' }}>Insira o código</Text>

        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 0,
              color: '#fff',
            }}
            value="1"
          />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 0,
              color: '#fff',
            }}
            value="2"
          />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 0,
              color: '#fff',
            }}
            value="3"
          />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 0,
              color: '#fff',
            }}
            value="4"
          />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 0,
              color: '#fff',
            }}
            value="5"
          />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 0,
              color: '#fff',
            }}
            value="6"
          />
        </View>

        <Text style={{ paddingTop: 10, color: '#fff' }}>Reenviar SMS</Text>

        <Button text="X" type="rounded-opened" />

        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => this.onPress()}>
          <Text style={styles.start}>INICIAR</Text>
        </TouchableOpacity>
      </Base>
    );
  }
}
