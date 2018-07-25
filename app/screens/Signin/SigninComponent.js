/* eslint-disable */
/* @flow */
import React from 'react';
import {
  AsyncStorage,
  View,
  Dimensions,
  ScrollView,
  BackHandler,
  Platform,
  NetInfo,
} from 'react-native';
import * as Keychain from 'react-native-keychain';
import VersionNumber from 'react-native-version-number';
import { Container, Button, Text, Tab, Tabs } from 'native-base';
import LunesLogo from 'lunesmobilewallet/app/native-base-theme/components/LunesLogo';
import LunesLoginForm from 'lunesmobilewallet/app/native-base-theme/components/LunesLoginForm';
import LunesLoading from 'lunesmobilewallet/app/native-base-theme/components/LunesLoading';
import LunesAlert from 'lunesmobilewallet/app/native-base-theme/components/LunesAlert';
import I18n from 'lunesmobilewallet/app/i18n/i18n';
import { navigate } from 'lunesmobilewallet/app/config/routes';
import { handleErrors } from 'lunesmobilewallet/app/utils/stringUtils';
import generalConstant from 'lunesmobilewallet/app/constants/general';

// Keep a reference to ensure there is only one event listener
// subscribed with BackHandler
// let listener = null;

// Default behavior: returning true to not exits the app.
const backButtonPressFunction = () => true;

export default class Signin extends React.Component<{}> {
  componentDidMount() {
    this.props.redirectToIntroduction();
    this.checkLoggedUser();

    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', () =>
        backButtonPressFunction()
      );
    }

    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.networkConnectionChange
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.networkConnectionChange
    );
  }

  checkLoggedUser() {
    AsyncStorage.getItem(generalConstant.STORAGE.versionNumber).then(versionValue => {
      if (!versionValue || versionValue !== VersionNumber.appVersion) {
        AsyncStorage.removeItem(generalConstant.STORAGE.storedUser);
        Keychain.resetGenericPassword();
        navigate(generalConstant.SCREEN_NAMES.intro);
        return;
      }

      AsyncStorage.getItem(generalConstant.STORAGE.storedUser).then((storedUser: string) => {
        if (storedUser) {
          return this.props.redirectToPIN();
        } else {
          return;
        }
      });

    });


  }

  networkConnectionChange = isConnected =>
    this.props.updateConnectionStatus(isConnected);

  renderError() {
    const { error, clearError } = this.props;
    return handleErrors(error, clearError, clearError);
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
        {this.renderError()}
        <ScrollView style={{ width: Dimensions.get('window').width - 50 }}>
          <View style={{ marginTop: 20 }}>
            <LunesLogo size={50} />
            <Text style={{ fontSize: 10, textAlign: 'center' }}>
              {I18n.t('VERSION')} {generalConstant.VERSION_NAME}
            </Text>
          </View>

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
                <Text style={{ fontSize: 12 }}>
                  {I18n.t('FORGOT_PASSWORD')}
                </Text>
              </Button>
            </Tab>
            <Tab heading={I18n.t('SIGNUP')}>
              <LunesLoginForm
                submit={this.props.requestSignup}
                modeAuth="SIGNUP"
              />
            </Tab>
          </Tabs>
        </ScrollView>
      </Container>
    );
  }
}
