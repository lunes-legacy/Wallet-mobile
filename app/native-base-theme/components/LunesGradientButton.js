import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class LunesGradientButton extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#927bc7', '#7c66b6']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{this.props.text.toUpperCase()}</Text>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 16,
    paddingVertical: 3,
  },
  buttonText: {
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
