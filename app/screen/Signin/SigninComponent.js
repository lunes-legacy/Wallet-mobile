// @flow
import React from 'react';
import { View, Text } from 'react-native';

import { Logo, Base } from '../../components';
import styles from './styles';

export default class Signin extends React.Component {
  render() {
    return (
      <Base style={styles.container}>
        <Text>Signin</Text>
      </Base>
    );
  }
}
