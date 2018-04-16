/* eslint-disable */

import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Input, Text } from 'native-base';
import commonColor from './../variables/commonColor';
import BosonColors from './../variables/bosonColor';

export default class LunesInputPhone extends React.Component {
  onValueChange(value) {
    this.setState({
      value,
    });
  }

  render() {
    return (
      <TextInput
        style={[styles.input, this.props.styles]}
        maxLength={this.props.maxLength || 9}
        placeholderTextColor={BosonColors.$bosonWhite}
        underlineColorAndroid={BosonColors.$bosonWhite}
        keyboardType="numeric"
        placeholder={this.props.placeholder || ''}
        onChangeText={text => this.props.onChangeText(text)}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    borderBottomColor: '#fff',
    color: '#fff',
    padding: 10,
  },
});
