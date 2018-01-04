// @flow
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Button, Text, Tab, Tabs } from 'native-base';
import firebase from 'react-native-firebase';
import { FormStyle } from '../../components/theme';
import LunesLogo from '../../native-base-theme/components/LunesLogo';
import LunesLoginForm from '../../native-base-theme/components/LunesLoginForm';
import LunesLoading from '../../native-base-theme/components/LunesLoading';

export default class Signin extends React.Component<{}> {
  renderError() {
    const { authorized, error } = this.props;
    if (error && error.code === 'auth/email-already-in-use') {
      alert('Email já existe');
      this.props.clearError();
    } else if (error && error.code === 'auth/wrong-password') {
      alert('Erro ao tentar autenticar-se');
      this.props.clearError();
    }
    return null;
  }

  renderLoading() {
    return <LunesLoading />;
  }

  render() {
    return (
      <Container>
        {this.props.loading ? this.renderLoading() : null}

        <LunesLogo size={30} />

        {this.renderError()}

        <Tabs initialPage={0}>
          <Tab heading="SIGN IN">
            <LunesLoginForm
              submit={this.props.requestLogin}
              modeAuth="SIGNIN"
            />
            <Button block transparent light>
              <Text style={{ fontSize: 12 }}>Redefinir Senha</Text>
            </Button>
          </Tab>
          <Tab heading="SIGN UP">
            <LunesLoginForm
              submit={this.props.requestSignup}
              modeAuth="SIGNUP"
            />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
