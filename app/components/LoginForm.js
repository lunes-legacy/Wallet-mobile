// @flow
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FormStyle } from './theme';

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
    this.props.submit(this.state);
  }

  renderFieldName() {
    if (this.props.modeAuth === 'SIGNUP') {
      return (
        <TextInput
          style={FormStyle.input}
          placeholder="Nome"
          placeholderTextColor="rgba(255,255,255,0.7)"
          autoCapitalize="none"
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name}
          autoCorrect={false}
        />  
      );
    } else {
      return null;
    }
  }

  renderButtonSubmit() {
    if (this.props.modeAuth === 'SIGNUP') {
      return (
        <TouchableOpacity style={FormStyle.buttonContainer} onPress={() => this.onSubmit()}>
          <Text style={FormStyle.buttonText}>Registrar</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={FormStyle.buttonContainer} onPress={() => this.onSubmit()}>
          <Text style={FormStyle.buttonText}>Entrar</Text>
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <View style={FormStyle.container}>
        {this.renderFieldName()}
        <TextInput
          style={FormStyle.input}
          placeholder="Email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          autoCapitalize="none"
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
          autoCorrect={false}
        />
        <TextInput
          containerViewStyle={{ width: '100%', marginLeft: 0 }}
          style={FormStyle.input}
          placeholder="Senha"
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          secureTextEntry={true}
          placeholderTextColor="rgba(255,255,255,0.7)"
        />
        {this.renderButtonSubmit()}
      </View>
    );
  }
}
