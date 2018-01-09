// @flow
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Button, Text, Tab, Tabs } from 'native-base';
import firebase from 'react-native-firebase';
import { FormStyle } from '../../components/theme';
import LunesLogo from '../../native-base-theme/components/LunesLogo';
import LunesLoginForm from '../../native-base-theme/components/LunesLoginForm';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import LunesAlert from '../../native-base-theme/components/LunesAlert';

export default class Signin extends React.Component<{}> {
  alertWarning() {
    return (
      <LunesAlert
        type="warning"
        onPressConfirmation={() => {
          alert('backup');
        }}
        titleHeader="Acesso Negado"
        message="Senha ou usuário incorreto"
        textConfirmation="Repetir"
      />
    );
  }

  alertError(message, isShow) {
    return (
      <LunesAlert
        isShow={isShow}
        type="error"
        onPressConfirmation={() => {
          alert('backup');
        }}
        titleHeader="Acesso Negado"
        message={message}
        textConfirmation="Repetir"
      />
    );
  }

  alertSuccess() {
    return (
      <LunesAlert
        type="success"
        onPressConfirmation={() => {
          alert('backup');
        }}
        titleHeader="Atenção"
        message="Usuário logado com sucesso..."
        textConfirmation="Repetir"
      />
    );
  }

  renderError() {
    const { authorized, error } = this.props;
    if (error && error.code === 'auth/email-already-in-use') {
      //this.props.clearError();
      return this.alertError('Email já existe', true);
      //alert('Email já existe');
    } else if (error && error.code === 'auth/wrong-password') {
      //this.props.clearError();
      alert('Erro ao tentar autenticar-se');
    } else if (error && error.code === 'auth/user-not-found') {
      //this.props.clearError();
      return this.alertError('Usuário não encontrado', true);
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
