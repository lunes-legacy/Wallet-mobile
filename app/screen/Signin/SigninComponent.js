// @flow
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Button, Text, Tab, Tabs } from 'native-base';
import firebase from 'react-native-firebase';
import { FormStyle } from '../../components/theme';
import LunesLogo from '../../native-base-theme/components/LunesLogo';
import LunesLoginForm from '../../native-base-theme/components/LunesLoginForm';

export default class Signin extends React.Component<{}> {
  componentWillMount() {
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
      return (
        <Container>
          <LunesLogo size={30} />

          <Tabs initialPage={0}>
            <Tab heading="SIGN IN">
              <LunesLoginForm
                submit={this.props.requestLogin}
                modeAuth="SIGNIN"
              />
            </Tab>
            <Tab heading="SIGN UP">
              <LunesLoginForm
                submit={this.props.requestSignup}
                modeAuth="SIGNUP"
              />
            </Tab>
          </Tabs>

          <Button block transparent light>
            <Text>Redefinir Senha</Text>
          </Button>
        </Container>
      );
    }
  }
}
