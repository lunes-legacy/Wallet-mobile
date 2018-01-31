// @flow
import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import I18N from '../../i18n/i18n';
import { Button, Text } from 'native-base';
import { ValidateEmail, PasswordIsStronger } from '../../utils/stringUtils';
import LunesGradientButton from './LunesGradientButton';
import bosonColor from '../variables/bosonColor';

export default class LunesLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      isDisabled: true,
      passwordIsWeak: true,
    };
  }

  onSubmit() {
    if (!PasswordIsStronger(this.state.password)) {
      alert('Sua senha não é segura');
      return;
    }
    if (this.state.email === '' || this.state.password === '') {
      alert('Por favor, preencha todos os campos');
      return;
    }
    if (this.props.modeAuth === 'SIGNUP' && this.state.name === '') {
      alert('Por favor, preencha todos os campos');
      return;
    }
    if (!ValidateEmail(this.state.email)) {
      alert(I18N.t('INVALID_EMAIL'));
      return;
    }
    this.props.submit(this.state);
  }

  renderFieldName() {
    if (this.props.modeAuth === 'SIGNUP') {
      return (
        <View style={styles.container}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.input}
            placeholder={I18N.t('NAME')}
            placeholderTextColor="rgba(255,255,255,0.7)"
            autoCapitalize="none"
            onChangeText={text => this.setState({ name: text })}
            value={this.state.name}
            autoCorrect={false}
            onSubmitEditing={() => this.emailInput.focus()}
            returnKeyType={'next'}
          />
        </View>
      );
    } else {
      return null;
    }
  }

  getTextButton() {
    return this.props.modeAuth === 'SIGNUP'
      ? I18N.t('SIGNUP')
      : I18N.t('SIGNIN');
  }

  checkButtonIsDisabled() {
    if (
      this.props.modeAuth === 'SIGNUP' &&
      this.state.email &&
      this.state.name &&
      this.state.password &&
      PasswordIsStronger(this.state.password)
    ) {
      return this.renderButtonSubmit();
    } else if (
      this.props.modeAuth === 'SIGNIN' &&
      this.state.email &&
      this.state.password
    ) {
      return this.renderButtonSubmit();
    }
    return this.renderDisabledButton();
  }

  renderDisabledButton() {
    const text = this.getTextButton();
    return (
      <View style={{ marginTop: 90 }}>
        <LunesGradientButton text={text} />
      </View>
    );
  }

  renderPasswordValidate() {
    if (
      this.state.password &&
      !PasswordIsStronger(this.state.password) &&
      this.props.modeAuth === 'SIGNUP'
    ) {
      return (
        <View style={styles.containerForcePassword}>
          <Text style={[styles.checkForcePassword, styles.passwordWeak]}>
            {I18N.t('WEAK_PASSWORD')}
          </Text>
        </View>
      );
    } else if (
      this.state.password &&
      PasswordIsStronger(this.state.password) &&
      this.props.modeAuth === 'SIGNUP'
    ) {
      return (
        <View style={styles.containerForcePassword}>
          <Text style={[styles.checkForcePassword, styles.passwordStrong]}>
            {I18N.t('STRONG_PASSWORD')}
          </Text>
        </View>
      );
    } else {
      return null;
    }
  }

  renderButtonSubmit() {
    const text = this.getTextButton();

    return (
      <View style={{ marginTop: 90 }}>
        <Button rounded block success onPress={() => this.onSubmit()}>
          <Text>{text}</Text>
        </Button>
      </View>
    );
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        {this.renderFieldName()}

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            underlineColorAndroid={'transparent'}
            placeholder={I18N.t('EMAIL')}
            placeholderTextColor="rgba(255,255,255,0.7)"
            keyboardType="email-address"
            onChangeText={text => this.setState({ email: text })}
            onSubmitEditing={() => this.passwordInput.focus()}
            value={this.state.email}
            ref={input => (this.emailInput = input)}
            returnKeyType={'next'}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={styles.container}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.input}
            placeholder={I18N.t('PASSWORD')}
            onChangeText={text => this.setState({ password: text })}
            ref={input => (this.passwordInput = input)}
            value={this.state.password}
            secureTextEntry={true}
            placeholderTextColor="rgba(255,255,255,0.7)"
          />
        </View>

        {this.renderPasswordValidate()}

        {this.checkButtonIsDisabled()}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#9f90c5',
    borderBottomWidth: 1,
  },
  input: {
    width: 300,
    color: '#fff',
  },
  containerForcePassword: {
    marginTop: 5,
  },
  checkForcePassword: {
    fontSize: 11,
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    textAlign: 'center',
    width: '100%',
  },
  passwordWeak: {
    backgroundColor: bosonColor.$bosonLightRed,
  },
  passwordStrong: {
    backgroundColor: bosonColor.$bosonDarkPurple,
  },
});
