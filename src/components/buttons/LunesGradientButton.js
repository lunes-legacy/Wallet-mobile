import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles/ButtonStyles';

export default class LunesGradientButton extends Component {
  render() {
    return (
      <LinearGradient
        colors={['#927bc7', '#7c66b6']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </LinearGradient>
    );
  }
}
