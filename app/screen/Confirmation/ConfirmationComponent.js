import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Container, Item, Input } from 'native-base';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';

import { Button } from '../../components';

export default class Confirmation extends React.Component {
  onPress() {
    this.props.navigation.navigate('Signin');
  }
  render() {
    return (
      <Container>
        <MaterialIcon name="email" size={30} color="#fff" />
        <Text style={styles.instructions}>
          Confirmação via <Text style={styles.textBold}>SMS</Text>
        </Text>

        <Text style={styles.instructions}>
          Você receberá um código em seu dispositivo móvel para validar a sua
          Lunes Wallet
        </Text>

        <Text style={styles.instructions}>
          Aguardando para detectar automaticamente um SMS enviado para +55 83
          987137261
        </Text>
        <Text style={styles.instructions}>Número errado?</Text>

        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
          <View style={{ paddingTop: 12, paddingRight: 10 }}>
            <FontAwesomeIcon name="phone" size={20} color="#fff" />
          </View>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 0,
              borderBottomColor: '#fff',
              color: '#fff',
              padding: 10,
            }}
            value="85"
          />

          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 0,
              color: '#fff',
              padding: 10,
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
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textBold: {
    fontWeight: '900',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    width: 220,
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
    marginBottom: 20,
  },
});
