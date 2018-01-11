import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Clipboard,
} from 'react-native';
import { Container, Item, Input, Toast, Root } from 'native-base';
import QRCode from 'react-native-qrcode';
import BosonColors from '../../native-base-theme/variables/bosonColor';
import LunesPaymentButton from '../../native-base-theme/components/LunesPaymentButton';

export default class ReceivePayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '1BoatSLRHtKNngkdXEeobR76b53LETtpyT',
      showToast: false,
    };
  }

  setClipboardContent = msg => {
    Clipboard.setString(this.state.text);
  };

  render() {
    return (
      <Container>
        <Root>
          <View style={styles.container}>
            <Text style={styles.titleReceivePayment}>Receber Pagamentos</Text>
            <View style={styles.wrapperQRCode}>
              <QRCode
                value={this.state.text}
                size={200}
                bgColor="black"
                fgColor="white"
              />
            </View>

            <Text style={styles.input} selectable={true}>
              {this.state.text}
            </Text>

            <Text
              style={styles.textCopy}
              selectable={true}
              onPress={() => {
                this.setState({ showToast: true });
                this.setClipboardContent();
                Toast.show({
                  text: 'link copiado',
                  position: 'top',
                  buttonText: '',
                });
              }}>
              Clique aqui para copiar e enviar
            </Text>

            <LunesPaymentButton />
          </View>
        </Root>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleReceivePayment: {
    padding: 10,
    color: BosonColors.$bosonWhite,
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  wrapperQRCode: {
    backgroundColor: BosonColors.$bosonWhite,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: BosonColors.$bosonWhite,
    borderWidth: 0,
    margin: 10,
    borderRadius: 5,
    padding: 5,
    color: BosonColors.$bosonWhite,
    fontSize: 12,
  },
  textCopy: {
    color: BosonColors.$bosonLightGreen,
    fontSize: 12,
  },
});
