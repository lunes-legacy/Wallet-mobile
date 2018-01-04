// @flow

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import commonColor from './../variables/commonColor';
import BosonColors from './../variables/bosonColor';

export default class LunesCodeSMS extends React.Component {
  renderInputs() {
    let code = {};
    return [1, 2, 3, 4, 5, 6].map((position, index) => {
      return (
        <TextInput
          ref={ref => (code[index] = ref)}
          key={position}
          keyboardType="numeric"
          maxLength={1}
          style={styles.input}
          returnKeyType={'next'}
          onChangeText={text => {
            this.props.changeCode({ position, value: text });
            if (text && text.length == 1) {
              if (code[index + 1]) {
                code[index + 1].focus();
              }
            }
          }}
        />
      );
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Insira o código</Text>
        <View style={{ flexDirection: 'row' }}>{this.renderInputs()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  instructions: {
    alignItems: 'center',
    textAlign: 'center',
    color: BosonColors.$bosonWhite,
  },
  input: {
    width: 40,
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    textAlign: 'center',
    fontSize: 18,
    color: BosonColors.$bosonGreen,
  },
});
