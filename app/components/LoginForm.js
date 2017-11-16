// @flow
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FormStyle } from './theme';

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={FormStyle.container}>
        <TextInput
          style={FormStyle.input}
          placeholder="Email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          containerViewStyle={{ width: '100%', marginLeft: 0 }}
          style={FormStyle.input}
          placeholder="Senha"
          secureTextEntry={true}
          placeholderTextColor="rgba(255,255,255,0.7)"
        />
        <TouchableOpacity style={FormStyle.buttonContainer}>
          <Text style={FormStyle.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
