// @flow
import React from 'react';
import { View, Image } from 'react-native';
import { Container, Button, Text, Tab, Tabs } from 'native-base';
import LunesLogo from '../../native-base-theme/components/LunesLogo';
import LunesLoginForm from '../../native-base-theme/components/LunesLoginForm';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import LunesAlert from '../../native-base-theme/components/LunesAlert';
import I18n from '../../i18n/i18n';
import { navigate } from '../../config/routes';

export default class Signin extends React.Component<{}> {
  alertError(message, isShow) {
    return (
      <LunesAlert
        isShow={isShow}
        type="error"
        onClose={() => {
          this.props.clearError();
        }}
        onPressConfirmation={() => {
          this.props.clearError();
        }}
        titleHeader={I18n.t('ACCESS_DENIED')}
        message={message}
        textConfirmation={I18n.t('TRY_AGAIN')}
      />
    );
  }

  componentDidMount() {
    const { error } = this.props;
  }

  renderError() {
    const { error } = this.props;
    if (error && error.messageKey === 'auth/email-already-in-use') {
      return this.alertError(I18n.t('EMAIL_ALREADY'), true);
    } else if (error && error.messageKey === 'auth/wrong-password') {
      return this.alertError(I18n.t('ERROR_AUTHENTICATE'), true);
    } else if (error && error.messageKey === 'auth/user-not-found') {
      return this.alertError(I18n.t('USER_NOT_FOUND'), true);
    } else if (error && error.messageKey === 'INVALID_PASSWORD') {
      return this.alertError(I18n.t('PASSWORD_INSECURE'), true);
    } else if (error) {
      return this.alertError(I18n.t('SOMETHING_ERROR'), true);
    }
    return null;
  }

  renderLoading() {
    return <LunesLoading />;
  }

  redirectToChangePassword() {
    navigate('ChangePassword');
  }

  render() {
    return (
      <Container>
        {this.props.loading ? this.renderLoading() : null}

        <View style={{ marginTop: 20 }}>
          <LunesLogo size={40} />
        </View>

        {this.renderError()}

        <Tabs initialPage={0}>
          <Tab heading={I18n.t('SIGNIN')}>
            <LunesLoginForm
              submit={this.props.requestLogin}
              modeAuth="SIGNIN"
            />
            <Button
              block
              transparent
              light
              style={{ marginTop: 30 }}
              onPress={() => {
                this.redirectToChangePassword();
              }}>
              <Text style={{ fontSize: 12 }}>{I18n.t('CHANGE_PASSWORD')}</Text>
            </Button>
          </Tab>
          <Tab heading={I18n.t('SIGNUP')}>
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
