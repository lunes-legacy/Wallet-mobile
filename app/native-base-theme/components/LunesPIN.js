// @flow

import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import commonColor from './../variables/commonColor';
import BosonColors from './../variables/bosonColor';

export default class LunesPIN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue1: '',
      inputValue2: '',
      inputValue3: '',
      inputValue4: '',
    };
  }

  onChangeInputValue(index) {
    if (this.state.inputValue1 === '') {
      this.setState({ inputValue1: index.toString() });
    } else if (this.state.inputValue2 === '') {
      this.setState({ inputValue2: index.toString() });
    } else if (this.state.inputValue3 === '') {
      this.setState({ inputValue3: index.toString() });
    } else if (this.state.inputValue4 === '') {
      this.setState({ inputValue4: index.toString() });
    }
  }

  onDeleteInputValue() {
    if (this.state.inputValue4 !== '') {
      this.setState({ inputValue4: '' });
    } else if (this.state.inputValue3 !== '') {
      this.setState({ inputValue3: '' });
    } else if (this.state.inputValue2 !== '') {
      this.setState({ inputValue2: '' });
    } else if (this.state.inputValue1 !== '') {
      this.setState({ inputValue1: '' });
    }
  }

  onSavePIN() {
    if (!this.props.onSavePIN) {
      console.error('you need pass onSavePIN as a function to props');
      return;
    }
    if (typeof this.props.onSavePIN === 'function') {
      const { inputValue1, inputValue2, inputValue3, inputValue4 } = this.state;
      let PIN = `${inputValue1}${inputValue2}${inputValue3}${inputValue4}`;
      if (isNaN(parseInt(PIN))) {
        console.error('PIN convertido é invalido');
        alert('Ocorreu algo errado ao tentar salvar o PIN');
        return;
      }
      this.props.onSavePIN(PIN);
    }
  }

  renderInputs() {
    return ['1', '2', '3', '4'].map((input, index) => {
      return (
        <TextInput
          key={input}
          keyboardType="numeric"
          maxLength={1}
          style={styles.input}
          editable={false}
          underlineColorAndroid={BosonColors.$bosonWhite}
          value={this.state[`inputValue${input}`]}
          onChangeText={text => {
            this.onChangeInputValue(text);
          }}
        />
      );
    });
  }

  renderKeyboardInput(position) {
    return (
      <TouchableOpacity
        key={position}
        style={styles.viewKeyboardInput}
        onPress={() => {
          this.onChangeInputValue(position);
        }}>
        <Text style={styles.keyboardInput}>{position}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <MaterialCommunityIcons name="key-variant" size={45} color="#fff" />
          </View>
          <Text style={styles.instructions}>
            Insira um código de 04 dígitos para cadastrar seu PIN
          </Text>
          <View style={{ flexDirection: 'row' }}>{this.renderInputs()}</View>
        </View>

        <View style={styles.container}>
          <View style={styles.row}>
            <View style={[styles.box]}>{this.renderKeyboardInput(1)}</View>
            <View style={[styles.box]}>{this.renderKeyboardInput(2)}</View>
            <View style={[styles.box]}>{this.renderKeyboardInput(3)}</View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box]}>{this.renderKeyboardInput(4)}</View>
            <View style={[styles.box]}>{this.renderKeyboardInput(5)}</View>
            <View style={[styles.box]}>{this.renderKeyboardInput(6)}</View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box]}>{this.renderKeyboardInput(7)}</View>
            <View style={[styles.box]}>{this.renderKeyboardInput(8)}</View>
            <View style={[styles.box]}>{this.renderKeyboardInput(9)}</View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box]}>
              <TouchableOpacity
                onPress={() => {
                  this.onDeleteInputValue();
                }}>
                <Entypo
                  name="erase"
                  size={25}
                  color={BosonColors.$bosonLightGreen}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.box]}>{this.renderKeyboardInput(0)}</View>
            <View style={[styles.box]}>
              <TouchableOpacity
                onPress={() => {
                  this.onSavePIN();
                }}>
                <Ionicons
                  name="ios-arrow-dropright-circle"
                  size={25}
                  color={BosonColors.$bosonLightGreen}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  instructions: {
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 25,
    padding: 10,
    color: BosonColors.$bosonWhite,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  viewKeyboardInput: {
    width: 40,
    height: 60,
  },
  keyboardInput: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },
  input: {
    width: 40,
    height: 40,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  box: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
