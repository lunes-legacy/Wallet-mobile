import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Container, Item, Input, Button, Text } from 'native-base';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import LunesContainerPhone from '../../native-base-theme/components/LunesContainerPhone';
import LunesCodeSMS from '../../native-base-theme/components/LunesCodeSMS';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import LunesGradientButton from '../../native-base-theme/components/LunesGradientButton';

export default class Confirmation extends React.Component {
  static get propTypes() {
    return {
      authSMS: PropTypes.object,
      auth: PropTypes.object,
      requestCode: PropTypes.func,
      confirmCode: PropTypes.func,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      isWaitingConfirmation: false,
      user: this.props.auth.user,
      message: this.props.authSMS.message,
      error: this.props.authSMS.error,
      prefixCountryNumber: this.props.authSMS.prefixCountryNumber,
      dddNumber: this.props.authSMS.dddNumber,
      phone: this.props.authSMS.phone,
      codeInput: this.props.authSMS.codeInput,
      confirmResult: this.props.authSMS.confirmResult,
      loading: this.props.authSMS.loading1,
      code1: '',
      code2: '',
      code3: '',
      code4: '',
      code5: '',
      code6: '',
    };
  }

  renderWaitingConfirmation() {
    let confirmResult = this.props.authSMS.confirmResult;
    if (this.state.isWaitingConfirmation) {
      return (
        <View>
          <Text style={styles.waitingText}>
            Aguardando para detectar automaticamente um SMS enviado para{' '}
            {this.state.phoneNumber}
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
      return (
        <LunesCodeSMS
          changeCode={code => {
            this.changeCode(code);
          }}
        />
      );
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

  renderError() {
    const { error } = this.props.authSMS;
    if (error && error.code === 'auth/app-not-authorized') {
      alert('Número invalido ou não autorizado');
      this.props.clearErrorNumberInvalid();
    }
  }

  changeCode(code) {
    switch (code.position.toString()) {
      case '1':
        this.setState({ code1: code.value });
        return;
      case '2':
        this.setState({ code2: code.value });
        return;
      case '3':
        this.setState({ code3: code.value });
        return;
      case '4':
        this.setState({ code4: code.value });
        return;
      case '5':
        this.setState({ code5: code.value });
        return;
      case '6':
        this.setState({ code6: code.value });
        return;
    }
  }

  onSubmitPhoneNumber() {
    this.props.requestCode(this.state);
  }

  onSubmitCode() {
    let { code1, code2, code3, code4, code5, code6 } = this.state;
    let finalCodeInput = `${code1}${code2}${code3}${code4}${code5}${code6}`;
    this.props.confirmCode(
      finalCodeInput,
      this.props.authSMS.confirmResult,
      this.props.user
    );
  }

  onPress() {
    this.setState({
      isWaitingConfirmation: true,
    });
    this.onSubmitPhoneNumber();
  }

  changePrefixCountry(prefixValue) {
    this.setState({ prefixCountryNumber: prefixValue });
  }

  changeCodePhone(ddd) {
    this.setState({ dddNumber: ddd });
  }

  changePhone(phone) {
    this.setState({ phone });
  }

  renderLoading() {
    return <LunesLoading />;
  }

  renderButtonNext() {
    if (!this.state.isWaitingConfirmation) {
      return (
        <Button block rounded light onPress={() => this.onPress()}>
          <Text>Avançar</Text>
        </Button>
      );
    }
    return null;
  }

  renderButtonConfirm() {
    let { code1, code2, code3, code4, code5, code6 } = this.state;
    if (
      this.state.isWaitingConfirmation &&
      code1 &&
      code2 &&
      code3 &&
      code4 &&
      code5 &&
      code6
    ) {
      return (
        <Button block rounded light onPress={() => this.onSubmitCode()}>
          <Text>Confirmar</Text>
        </Button>
      );
    } else if (
      this.state.isWaitingConfirmation &&
      (!code1 || !code2 || !code3 || !code4 || !code5 || !code6)
    ) {
      return <LunesGradientButton text="Confirmar" />;
    }
    return null;
  }

  render() {
    return (
      <Container>
        {this.props.authSMS.loading ? this.renderLoading() : null}
        {this.props.authSMS.error &&
        this.props.authSMS.error.code === 'auth/app-not-authorized'
          ? this.renderError()
          : null}

        <View style={styles.viewConfirmSMS}>
          <MaterialIcon name="email" size={45} color="#fff" />
          <Text style={styles.textConfirmSMS}>
            Confirmação via <Text style={styles.textBold}>SMS</Text>
          </Text>
          {this.renderInputConfirmation()}
          {this.renderWaitingConfirmation()}
        </View>

        <View style={{ flex: 1 }}>
          <LunesContainerPhone
            changePrefixCountry={value => this.changePrefixCountry(value)}
            changeCodePhone={value => this.changeCodePhone(value)}
            changePhone={value => this.changePhone(value)}
          />
          {this.renderCodeConfirmation()}
        </View>

        <View style={styles.viewBtnNext}>
          {this.renderButtonResendSMS()}
          {this.renderButtonNext()}
          {this.renderButtonConfirm()}
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
