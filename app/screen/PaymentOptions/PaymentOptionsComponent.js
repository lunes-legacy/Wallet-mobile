import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Linking,
  StatusBar,
} from 'react-native';
import { Container, Item, Input, Toast, Root } from 'native-base';
import QRCode from 'react-native-qrcode';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import QRCodeScanner from 'react-native-qrcode-scanner';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import SimpleLineIcon from 'react-native-vector-icons/dist/SimpleLineIcons';
import BosonColors from '../../native-base-theme/variables/bosonColor';
import LunesConfirmButton from '../../native-base-theme/components/LunesConfirmButton';
import { navigate } from '../../config/routes';

export default class PaymentOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
    };
  }

  redirectToQRCodeScreen() {
    navigate('QRCode');
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={styles.keyboardContainer}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}>
        <Container>
          <StatusBar
            backgroundColor={BosonColors.$bosonPrimary}
            barStyle="light-content"
          />
          <Root>
            <View style={styles.container}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.text}>Selecione a forma de envio</Text>
              </View>

              <View style={styles.containerInner}>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() => {
                    this.redirectToQRCodeScreen();
                  }}>
                  <FontAwesomeIcon name={'qrcode'} size={60} color={'#fff'} />
                  <Text style={styles.text}>Escanear QR Code</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  borderBottomColor: 'transparent',
                  borderBottomWidth: 1,
                  height: 1,
                  width: Dimensions.get('window').width - 50,
                  backgroundColor: '#5e4b96',
                }}
              />

              <View style={styles.containerInner}>
                <SimpleLineIcon name={'wallet'} size={50} color={'#fff'} />
                <Text style={styles.text}>Colar o endereço da carteira</Text>
                <TextInput
                  underlineColorAndroid={'transparent'}
                  style={styles.inputText}
                  placeholder="cole aqui"
                  placeholderTextColor="rgba(255,255,255,0.7)"
                />
              </View>

              <View style={styles.containerInner}>
                <LunesConfirmButton />
              </View>
            </View>
          </Root>
        </Container>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    width: Dimensions.get('window').width - 50,
    borderBottomColor: BosonColors.$bosonLightGreen,
    borderBottomWidth: 1,
    color: BosonColors.$bosonWhite,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 11,
  },
  text: {
    color: BosonColors.$bosonWhite,
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
