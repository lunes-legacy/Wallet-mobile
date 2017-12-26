// @flow
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import { FormStyle } from '../../components/theme';
import { ButtonUI } from '../../lunes-ui';

import {
  LogoSmall,
  Base,
  Tabs,
  TabLinkContainer,
  TabContent,
  LoginForm,
} from '../../components';
import styles from './styles';

export default class Signin extends React.Component<{}> {
  componentWillMount() {
    const { navigate } = this.props.navigation;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        //navigate('Main');
      }
    });
  }

  render() {
    if (this.props.authorized) {
      return (
        <TouchableOpacity
          onPress={this.props.requestSignout}
          style={FormStyle.buttonContainer}>
          <Text style={FormStyle.buttonText}>Logout</Text>
        </TouchableOpacity>
      );
    } else {
      let isTab1 = this.props.tabSelected === 'tab1' ? true : false;
      let isTab2 = this.props.tabSelected === 'tab2' ? true : false;
      return (
        <Base style={styles.container}>
          <ButtonUI type="default" text="Button default" onPress={() => {}} />

          <ButtonUI
            type="default"
            size="large"
            text="Button default large"
            onPress={() => {}}
          />

          <ButtonUI type="primary" text="Button primary" onPress={() => {}} />

          <ButtonUI
            type="primary"
            size="large"
            text="Button primary large"
            onPress={() => {}}
          />

          <ButtonUI type="disabled" text="Button disabled" onPress={() => {}} />

          <ButtonUI
            type="disabled"
            size="large"
            text="Button disabled large"
            onPress={() => {}}
          />

          <ButtonUI type="rounded" text="+" onPress={() => {}} />
        </Base>
      );
    }
  }
}
