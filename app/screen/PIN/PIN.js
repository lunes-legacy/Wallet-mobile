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

export default class PIN extends React.Component {
  onPress() {
    this.props.navigation.navigate('Signin');
  }
  render() {
    return (
      <Container>
        <MaterialIcon name="email" size={35} color="#fff" />

        <Text style={styles.instructions}>
          Você receberá um código em seu dispositivo móvel para validar a sua
          Lunes Wallet
        </Text>

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

        <Button text="X" type="rounded-opened" />

        <Text style={{ paddingTop: 10, color: '#fff' }}>Reenviar SMS</Text>

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
