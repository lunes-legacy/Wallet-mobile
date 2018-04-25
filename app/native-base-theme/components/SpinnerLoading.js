/* eslint-disable */
// @flow

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Spinner } from 'native-base';
import commonColor from './../variables/commonColor';
import BosonColors from './../variables/bosonColor';

export default class SpinnerLoading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Spinner color="#fff" />
        <Text style={{ color: '#fff', alignItems: 'center' }}>
          {this.props.text || ''}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
