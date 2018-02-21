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
import LunesAlert from '../../native-base-theme/components/LunesAlert';
import { handleErrors } from '../../utils/stringUtils';
import I18N from '../../i18n/i18n';

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
    if (this.state.isWaitingConfirmation) {
      return (
        <View>
          <Text style={styles.waitingText}>
            {I18N.t('WAITING_SMS_CONFIRMATION')} {this.state.phoneNumber}
          </Text>
        </View>
      );
    }
    return null;
  }

  renderInputConfirmation() {
    if (!this.state.isWaitingConfirmation) {
      return (
        <Text style={styles.instructions}>
          {I18N.t('YOU_WILL_RECEIVE_CODE_SMS')}
        </Text>
      );
    }
    return null;
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
    }
    return null;
  }

  renderButtonResendSMS() {
    if (this.state.isWaitingConfirmation) {
      return (
        <View style={styles.resendSMSView}>
          <Button block transparent light onPress={() => this.onPress()}>
            <Text>{I18N.t('RE_SEND_SMS')}</Text>
          </Button>
        </View>
      );
    }
    return null;
  }

  renderError() {
    const { error, clearError } = this.props;
    return handleErrors(error, clearError, clearError);
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
    }
  }

  onSubmitPhoneNumber() {
    this.props.requestCode(this.state);
  }

  onSubmitCode() {
    const { code1, code2, code3, code4, code5, code6 } = this.state;
    const finalCodeInput = `${code1}${code2}${code3}${code4}${code5}${code6}`;
    this.props.confirmCode(
      finalCodeInput,
      this.props.verificationId,
      this.props.user
    );
  }

  onPress() {
    this.setState({
      isWaitingConfirmation: true,
    });
    this.setState({ code1: '' });
    this.setState({ code2: '' });
    this.setState({ code3: '' });
    this.setState({ code4: '' });
    this.setState({ code5: '' });
    this.setState({ code6: '' });
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
          <Text>{I18N.t('NEXT')}</Text>
        </Button>
      );
    }
    return null;
  }

  renderButtonConfirm() {
    const { code1, code2, code3, code4, code5, code6 } = this.state;
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
          <Text>{I18N.t('CONFIRM')}</Text>
        </Button>
      );
    } else if (
      this.state.isWaitingConfirmation &&
      (!code1 || !code2 || !code3 || !code4 || !code5 || !code6)
    ) {
      return <LunesGradientButton text={I18N.t('CONFIRM')} />;
    }
    return null;
  }

  render() {
    return (
      <Container>
        {this.props.loading ? this.renderLoading() : null}
        {this.renderError()}

        <View style={styles.viewConfirmSMS}>
          <MaterialIcon name="email" size={45} color="#fff" />
          <Text style={styles.textConfirmSMS}>
            {I18N.t('CONFIRMATION_VIA')}{' '}
            <Text style={styles.textBold}>SMS</Text>
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
