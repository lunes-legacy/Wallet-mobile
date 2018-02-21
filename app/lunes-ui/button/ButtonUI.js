// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconIon from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import atomicBtnStyleDefault from './atomicBtnStyleDefault';
import atomicBtnStylePrimary from './atomicBtnStylePrimary';
import atomicBtnStyleDisabled from './atomicBtnStyleDisabled';
import atomicBtnStyleRounded from './atomicBtnStyleRounded';

export default class ButtonUI extends React.Component {
  checkFunctionOnPress() {
    if (!this.props.onPress) {
      alert('Erro. Você precisa implementar a função onPress!!!!');
    }
  }

  defaultButton() {
    let atomBtnLarge = {};
    this.checkFunctionOnPress();
    if (this.props.type === 'default') {
      if (this.props.size === 'large') {
        atomBtnLarge = atomicBtnStyleDefault.atomBtnLarge;
      }
      return (
        <TouchableOpacity onPress={() => this.props.onPress()}>
          <View style={[atomicBtnStyleDefault.atomBtn, atomBtnLarge]}>
            <Text style={atomicBtnStyleDefault.quarkText}>
              {this.props.text}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
    return null;
  }

  primaryButton() {
    let atomBtnLarge = {};
    this.checkFunctionOnPress();
    if (this.props.type === 'primary') {
      if (this.props.size === 'large') {
        atomBtnLarge = atomicBtnStylePrimary.atomBtnLarge;
      }
      return (
        <TouchableOpacity onPress={() => this.props.onPress()}>
          <View style={[atomicBtnStylePrimary.atomBtn, atomBtnLarge]}>
            <Text style={atomicBtnStylePrimary.quarkText}>
              {this.props.text}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
    return null;
  }

  disabledButton() {
    let atomBtnLarge = {};
    this.checkFunctionOnPress();
    if (this.props.type === 'disabled') {
      if (this.props.size === 'large') {
        atomBtnLarge = atomicBtnStyleDisabled.atomBtnLarge;
      }
      return (
        <TouchableOpacity onPress={() => this.props.onPress()}>
          <View style={[atomicBtnStyleDisabled.atomBtn, atomBtnLarge]}>
            <Text style={atomicBtnStyleDisabled.quarkText}>
              {this.props.text}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
    return null;
  }

  roundedPrimaryButton() {
    if (this.props.type === 'rounded') {
      return (
        <TouchableHighlight
          onPress={() => this.props.onPress()}
          style={atomicBtnStyleRounded.atomBtn}>
          <View>
            <Text style={atomicBtnStyleRounded.quarkText}>
              {this.props.text}
            </Text>
          </View>
        </TouchableHighlight>
      );
    }
    return null;
  }

  render() {
    return (
      <View>
        {this.defaultButton()}
        {this.primaryButton()}
        {this.disabledButton()}
        {this.roundedPrimaryButton()}
      </View>
    );
  }
}
