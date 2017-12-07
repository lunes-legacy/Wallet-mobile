// @flow

import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconIon from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import buttonStyle from './style';

export default class Button extends React.Component {
  defaultButton() {
    if (this.props.type === 'default') {
      return (
        <TouchableHighlight onPress={() => this.props.onPress()}>
          <View style={buttonStyle.default}>
            <Text style={buttonStyle.textDefault}> {this.props.text}</Text>
          </View>
        </TouchableHighlight>
      );
    } else {
      return null;
    }
  }

  disabledButton() {
    if (this.props.type === 'disabled') {
      return (
        <TouchableHighlight onPress={() => this.props.onPress()}>
          <View style={buttonStyle.disabled}>
            <Text style={buttonStyle.textDisabled}> {this.props.text}</Text>
          </View>
        </TouchableHighlight>
      );
    } else {
      return null;
    }
  }

  primaryButton() {
    if (this.props.type === 'primary') {
      return (
        <TouchableHighlight onPress={() => this.props.onPress()}>
          <View style={buttonStyle.primary}>
            <Text style={buttonStyle.textPrimary}> {this.props.text}</Text>
          </View>
        </TouchableHighlight>
      );
    } else {
      return null;
    }
  }

  roundedPrimaryButton() {
    if (this.props.type === 'rounded') {
      return (
        <TouchableHighlight
          onPress={() => this.props.onPress()}
          style={buttonStyle.roundedPrimary}>
          <View>
            <Text style={buttonStyle.textRounded}>{this.props.text}</Text>
          </View>
        </TouchableHighlight>
      );
    } else {
      return null;
    }
  }

  roundedButtonOpened() {
    const sizeIcon = 15;
    if (this.props.type === 'rounded-opened') {
      return (
        <TouchableHighlight
          onPress={() => this.props.onPress()}
          style={buttonStyle.roundedOpened}>
          <View style={{ flexDirection: 'row' }}>
            <View style={buttonStyle.itemButtonOpened}>
              <MaterialIcons name="arrow-upward" size={sizeIcon} color="#fff" />
              <Text style={buttonStyle.textItemOpened}>Enviar</Text>
            </View>

            <View style={buttonStyle.itemButtonOpened}>
              <MaterialIcons
                name="arrow-downward"
                size={sizeIcon}
                color="#fff"
              />
              <Text style={buttonStyle.textItemOpened}>Receber</Text>
            </View>

            <TouchableHighlight
              onPress={() => this.props.onPress()}
              style={buttonStyle.roundedAbsolutePosition}>
              <View>
                <Text style={buttonStyle.textRounded}>
                  <IconIon name="md-close" size={25} color="#fff" />
                </Text>
              </View>
            </TouchableHighlight>

            <View style={buttonStyle.itemButtonOpened}>
              <Icon name="money" size={sizeIcon} color="#fff" />
              <Text style={buttonStyle.textItemOpened}>Comprar</Text>
            </View>

            <View style={buttonStyle.itemButtonOpened}>
              <Icon reverse name="line-chart" size={sizeIcon} color="#fff" />
              <Text style={buttonStyle.textItemOpened}>Vender</Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <View>
        {this.defaultButton()}
        {this.disabledButton()}
        {this.primaryButton()}
        {this.roundedPrimaryButton()}
        {this.roundedButtonOpened()}
      </View>
    );
  }
}
