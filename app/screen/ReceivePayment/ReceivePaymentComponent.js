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
import I18N from '../../i18n/i18n';

export default class ReceivePayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
    };
  }

  setClipboardContent = address => {
    Clipboard.setString(address);
  };

  getAddressWallet() {
    const { wallet } = this.props;
    try {
      const address = wallet.coins[0].addresses[0].address;
      return address;
    } catch (error) {
      return '';
    }
  }

  render() {
    const address = this.getAddressWallet();
    return (
      <Container>
        <Root>
          <View style={styles.container}>
            <Text style={styles.titleReceivePayment}>
              {I18N.t('RECEIVE_PAYMENT')}
            </Text>
            <View style={styles.wrapperQRCode}>
              <QRCode
                value={address}
                size={200}
                bgColor="black"
                fgColor="white"
              />
            </View>

            <Text style={styles.input} selectable={true}>
              {address}
            </Text>

            <Text
              style={styles.textCopy}
              selectable={true}
              onPress={() => {
                this.setState({ showToast: true });
                this.setClipboardContent(address);
                Toast.show({
                  duration: 2000,
                  text: I18N.t('ADDRESS_COPIED'),
                  position: 'top',
                  buttonText: '',
                });
              }}>
              {I18N.t('CLICK_HERE_TO_COPY')}
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
