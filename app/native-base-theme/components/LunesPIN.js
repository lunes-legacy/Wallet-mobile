// @flow

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import commonColor from './../variables/commonColor';
import BosonColors from './../variables/bosonColor';

export default class LunesPIN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, null],
    };
  }

  onChangeInputValue(index, value) {
    //this.setState({ inputs: newArray });
  }

  renderInputs() {
    return this.state.inputs.map((input, index) => {
      return (
        <TextInput
          key={input}
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
        <Text style={styles.instructions}>
          Insira um código de 04 dígitos para cadastrar seu PIN
        </Text>
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    textAlign: 'center',
    fontSize: 28,
    color: BosonColors.$bosonGreen,
  },
});
