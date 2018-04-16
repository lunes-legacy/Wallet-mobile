import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { Button, Text, Item, Input } from 'native-base';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { upperCaseFirstLetterText } from 'app/src/utils/stringUtils';
import { LunesGradientButton } from 'app/src/components';
import styles from './styles/LoginFormStyles';

class LoginForm extends Component {
  renderFieldName = () => {
    if (!this.props.isSigninForm) {
      return (
        <View style={styles.container}>
          <Input
            underlineColorAndroid={'transparent'}
            style={styles.input}
            placeholder={this.props.I18n.t('NAME')}
            placeholderTextColor="rgba(255,255,255,0.7)"
            autoCapitalize="none"
            value={this.props.user.fullname}
            onChangeText={this.props.handleChange('fullname')}
            autoCorrect={false}
            returnKeyType={'next'}
          />
        </View>
      );
    }
    return null;
  };

  renderFieldConfirmPassword() {
    if (!this.props.isSigninForm) {
      return (
        <View style={styles.container}>
          <Input
            underlineColorAndroid={'transparent'}
            style={styles.input}
            maxLength={50}
            placeholder={this.props.I18n.t('CONFIRM_PASSWORD')}
            value={this.props.user.confirmPassword}
            onChangeText={this.props.handleChange('confirmPassword')}
            secureTextEntry={this.props.secureTextEntry}
            placeholderTextColor="rgba(255,255,255,0.7)"
          />
        </View>
      );
    }
    return null;
  }

  renderEyePassword = () => {
    return (
      <View style={styles.containerPassword}>
        <TouchableOpacity
          onPress={() => this.props.chackeChange('secureTextEntry')}>
          <View style={{ padding: 10 }}>
            {this.props.secureTextEntry ? (
              <Ionicons size={20} name={'md-eye-off'} color={'#fff'} />
            ) : (
              <Ionicons size={20} name={'md-eye'} color={'#fff'} />
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  getNameForm = () => {
    return this.props.isSigninForm
      ? this.props.I18n.t('SIGNIN')
      : this.props.I18n.t('SIGNUP');
  };

  isPasswordMatch = () =>
    this.props.user.password === this.props.user.confirmPassword;

  checkButtonIsDisabled() {
    if (
      !this.props.isSigninForm &&
      this.props.user.email &&
      this.props.user.fullname &&
      this.props.user.password &&
      this.isPasswordMatch()
    ) {
      return this.renderButtonSubmit();
    } else if (
      this.props.isSigninForm &&
      this.props.user.email &&
      this.props.user.password
    ) {
      return this.renderButtonSubmit();
    }
    return this.renderDisabledButton();
  }

  renderButtonSubmit() {
    return (
      <View style={styles.btnSubmit}>
        <Button
          rounded
          block
          success
          style={{ height: 50 }}
          onPress={this.props.submitButton}>
          <Text uppercase={false}>
            {upperCaseFirstLetterText(this.getNameForm())}
          </Text>
        </Button>
      </View>
    );
  }

  renderDisabledButton() {
    return (
      <View style={styles.btnSubmit}>
        <LunesGradientButton
          text={upperCaseFirstLetterText(this.getNameForm())}
        />
      </View>
    );
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        {this.renderFieldName()}
        <View style={styles.container}>
          <Input
            style={styles.input}
            underlineColorAndroid={'transparent'}
            placeholder={this.props.I18n.t('EMAIL')}
            placeholderTextColor="rgba(255,255,255,0.7)"
            keyboardType="email-address"
            value={this.props.email}
            onChangeText={this.props.handleChange('email')}
            returnKeyType={'next'}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.container}>
          <Input
            underlineColorAndroid={'transparent'}
            style={styles.input}
            maxLength={50}
            placeholder={this.props.I18n.t('PASSWORD')}
            returnKeyType={'next'}
            value={this.props.user.password}
            onChangeText={this.props.handleChange('password')}
            secureTextEntry={this.props.secureTextEntry}
            placeholderTextColor="rgba(255,255,255,0.7)"
          />
          {this.renderEyePassword()}
        </View>
        {this.renderFieldConfirmPassword()}
        {this.checkButtonIsDisabled()}
      </KeyboardAvoidingView>
    );
  }
}

export default LoginForm;
