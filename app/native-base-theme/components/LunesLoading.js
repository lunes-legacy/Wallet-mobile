// @flow

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Spinner } from 'native-base';
import commonColor from './../variables/commonColor';
import BosonColors from './../variables/bosonColor';

export default class LunesLoading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Spinner color="#fff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BosonColors.$bosonLightGreen,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
  },
});
