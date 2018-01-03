// @flow

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import commonColor from './../variables/commonColor';
import BosonColors from './../variables/bosonColor';

export default class LunesCodeSMS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
        { value: '' },
      ],
    };
  }

  onChangeInputValue(index, value) {
    const newArray = [this.state.inputs];
    newArray[index].value = value;
    this.setState({ inputs: newArray });
  }

  renderInputs() {
    return this.state.inputs.map((input, index) => {
      return (
        <TextInput
          key={input.value}
          keyboardType="numeric"
          maxLength={1}
          style={styles.input}
          onChangeText={text => {
            this.onChangeInputValue(index, text);
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
        <Text>{this.state.inputs[0].value}</Text>
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
