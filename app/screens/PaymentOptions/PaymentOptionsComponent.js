/* eslint-disable */
import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import { Container, Item, Input, Toast, Root, Button } from 'native-base';
import QRCode from 'react-native-qrcode';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import QRCodeScanner from 'react-native-qrcode-scanner';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import SimpleLineIcon from 'react-native-vector-icons/dist/SimpleLineIcons';
import BosonColors from '../../native-base-theme/variables/bosonColor';
import I18N from '../../i18n/i18n';
import { navigate } from '../../config/routes';
import LunesGradientButton from '../../native-base-theme/components/LunesGradientButton';

export default class PaymentOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      addressToSend: '',
    };
  }

  redirectToQRCodeScreen() {
    const { state } = this.props.navigation;
    const amountToSend = state.params ? state.params.amountToSend : 0;
    navigate('QRCode', { amountToSend });
  }

  redirectToConfirmSend() {
    const { state } = this.props.navigation;
    const amountToSend = state.params ? state.params.amountToSend : 0;
    navigate('ConfirmSend', {
      addressToSend: this.state.addressToSend,
      amountToSend,
    });
  }

  renderButtonConfirm() {
    if (this.state.addressToSend) {
      return (
        <Button
          rounded
          block
          success
          onPress={() => {
            this.redirectToConfirmSend();
          }}>
          <Text style={{ fontSize: 12, color: '#fff' }}>{I18N.t('NEXT')}</Text>
        </Button>
      );
    }
    return <LunesGradientButton text={I18N.t('NEXT')} />;
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
                <Text style={styles.text}>{I18N.t('SELECT_FORM_TO_SEND')}</Text>
              </View>

              <View style={styles.containerInner}>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() => {
                    this.redirectToQRCodeScreen();
                  }}>
                  <FontAwesomeIcon name={'qrcode'} size={60} color={'#fff'} />
                  <Text style={styles.text}>{I18N.t('SCANNER_QRCODE')}</Text>
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
                <Text style={styles.text}>{I18N.t('PUT_WALLET_ADDRESS')}</Text>
                <TextInput
                  underlineColorAndroid={'transparent'}
                  style={styles.inputText}
                  value={this.state.addressToSend}
                  onChangeText={value =>
                    this.setState({ addressToSend: value })
                  }
                  placeholder={I18N.t('PASTE_HERE')}
                  placeholderTextColor="rgba(255,255,255,0.7)"
                />
              </View>

              <View
                style={[
                  styles.containerInner,
                  { width: Dimensions.get('window').width - 50 },
                ]}>
                {this.renderButtonConfirm()}
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
    paddingVertical: 10,
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
