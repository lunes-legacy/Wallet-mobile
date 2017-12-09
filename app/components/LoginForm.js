// @flow
import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { FormStyle } from './theme';
import Button from './button/Button';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  onSubmit() {
    if (this.state.email === '' || this.state.password === '') {
      alert('Por favor, preencha todos os campos');
      return;
    }
    if (this.props.modeAuth === 'SIGNUP' && this.state.name === '') {
      alert('Por favor, preencha todos os campos');
      return;
    }
    this.props.submit(this.state);
  }

  renderFieldName() {
    if (this.props.modeAuth === 'SIGNUP') {
      return (
        <View style={FormStyle.container}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={FormStyle.input}
            placeholder="Nome"
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

  renderButtonSubmit() {
    const text = this.props.modeAuth === 'SIGNUP' ? 'Sign Up' : 'Sign In';

    return (
      <View>
        <Button type="primary" text={text} onPress={() => this.onSubmit()} />
      </View>
    );
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        {this.renderFieldName()}

        <View style={FormStyle.container}>
          <TextInput
            style={FormStyle.input}
            underlineColorAndroid={'transparent'}
            placeholder="Email"
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

        <View style={FormStyle.container}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={FormStyle.input}
            placeholder="Senha"
            onChangeText={text => this.setState({ password: text })}
            ref={input => (this.passwordInput = input)}
            value={this.state.password}
            secureTextEntry={true}
            placeholderTextColor="rgba(255,255,255,0.7)"
          />
        </View>

        {this.renderButtonSubmit()}
      </KeyboardAvoidingView>
    );
  }
}
