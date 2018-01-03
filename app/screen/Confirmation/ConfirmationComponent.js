import React from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Container, Item, Input, Button, Text } from 'native-base';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import LunesContainerPhone from '../../native-base-theme/components/LunesContainerPhone';
import LunesCodeSMS from '../../native-base-theme/components/LunesCodeSMS';

export default class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWaitingConfirmation: false,
      phoneNumber: '',
    };
  }

  onPress() {
    this.setState({ isWaitingConfirmation: true });
  }

  renderWaitingConfirmation() {
    if (this.state.isWaitingConfirmation) {
      return (
        <View>
          <Text style={styles.waitingText}>
            Aguardando para detectar automaticamente um SMS enviado para +55 83
            987137261
          </Text>
          <Text style={[styles.textBold, styles.textCenter]}>
            Número errado?
          </Text>
        </View>
      );
    } else {
      return null;
    }
  }

  renderInputConfirmation() {
    if (!this.state.isWaitingConfirmation) {
      return (
        <Text style={styles.instructions}>
          Você receberá um código em seu dispositivo móvel para validar a sua
          Lunes Wallet
        </Text>
      );
    } else {
      return null;
    }
  }

  renderCodeConfirmation() {
    if (this.state.isWaitingConfirmation) {
      return <LunesCodeSMS />;
    } else {
      return null;
    }
  }

  renderButtonResendSMS() {
    if (this.state.isWaitingConfirmation) {
      return (
        <View style={styles.resendSMSView}>
          <Button block transparent light onPress={() => this.onPress()}>
            <Text>Reenviar SMS</Text>
          </Button>
        </View>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <Container>
        <View style={styles.viewConfirmSMS}>
          <MaterialIcon name="email" size={45} color="#fff" />
          <Text style={styles.textConfirmSMS}>
            Confirmação via <Text style={styles.textBold}>SMS</Text>
          </Text>
          {this.renderInputConfirmation()}
          {this.renderWaitingConfirmation()}
        </View>

        <View style={{ flex: 1 }}>
          <LunesContainerPhone />
          {this.renderCodeConfirmation()}
        </View>

        <View style={styles.viewBtnNext}>
          {this.renderButtonResendSMS()}
          <Button block rounded light onPress={() => this.onPress()}>
            <Text>Avançar</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
    fontSize: 12,
  },
  textBold: {
    fontWeight: '900',
  },
  textConfirmSMS: {
    marginTop: 10,
    marginBottom: 10,
  },
  viewConfirmSMS: {
    flex: 2,
    alignItems: 'center',
  },
  viewBtnNext: {
    flex: 1,
    width: Dimensions.get('window').width - 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewRenderInputConfirmation: {
    marginTop: 80,
  },
  waitingText: {
    width: 240,
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
    marginBottom: 20,
  },
  instructions: {
    width: 220,
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
    marginBottom: 20,
  },
  resendSMSView: {
    marginTop: 10,
    marginBottom: 10,
  },
});
