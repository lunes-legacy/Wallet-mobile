import React from 'react';
import { View, TextInput } from 'react-native';
import { FormStyle } from './theme';

export default class FormTextInput extends React.Component {
  render() {
    return (
      <View style={FormStyle.container}>
        <TextInput
          style={FormStyle.input}
          placeholder="Email"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
    );
  }
}
