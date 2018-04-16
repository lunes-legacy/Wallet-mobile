/* eslint-disable */
import React from 'react';
import {
  StackNavigator,
  NavigationActions,
  TouchableHighlight,
  Text,
} from 'react-navigation';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import IntroductionContainer from 'app/src/screens/Introduction/IntroductionContainer';
import { Confirmation } from 'app/src/screens/Confirmation';
import { PIN } from 'app/src/screens/PIN';
import SigninContainer from 'app/src/screens/Signin/SigninContainer';
import { ReceivePayment } from 'app/src/screens/ReceivePayment';
import { SendPayment } from 'app/src/screens/SendPayment';
import { NoticeNotification } from 'app/src/screens/NoticeNotification';
import { Main } from 'app/src/screens/Main';
import { QRCode } from 'app/src/screens/QRCodeScreen';
import { PaymentOptions } from 'app/src/screens/PaymentOptions';
import { ChangePassword } from 'app/src/screens/ChangePassword';
import { ConfirmSend } from 'app/src/screens/ConfirmTransaction';
import { Profile } from 'app/src/screens/Profile';
import { Roadmap } from 'app/src/screens/Roadmap';
import { AlertMessages } from 'app/src/screens/AlertMessages';
import BosonColors from 'app/src/native-base-theme/variables/bosonColor';
import I18N from 'app/src/i18n/i18n';

const customHeader = navigation => (
  <View style={{ padding: 20 }}>
    <Ionicons
      color={'#fff'}
      size={20}
      name={'md-arrow-back'}
      onPress={() => {
        navigation.goBack();
      }}
    />
  </View>
);

const customHomeHeader = navigation => (
  <View style={{ padding: 20 }}>
    <Entypo
      color={'#fff'}
      size={20}
      name={'home'}
      onPress={() => {
        navigate('Main');
      }}
    />
  </View>
);

const RootNavigator = StackNavigator(
  {
    Introduction: {
      screen: IntroductionContainer,
      navigationOptions: {
        header: <View />,
      },
    },
    SigninContainer: {
      screen: SigninContainer,
      navigationOptions: {
        header: <View />,
      },
    },
    Confirmation: {
      screen: Confirmation,
      navigationOptions: {
        header: <View />,
      },
    },
    PIN: {
      screen: PIN,
      navigationOptions: {
        header: <View />,
      },
    },
    Main: {
      screen: Main,
      navigationOptions: {
        header: <View />,
      },
    },
    AlertMessages: {
      screen: AlertMessages,
      navigationOptions: ({ navigation, screenProps }) => ({
        title: null,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: BosonColors.$bosonPrimary,
          elevation: 0,
        },
        headerLeft: customHeader(navigation),
      }),
    },
    ReceivePayment: {
      screen: ReceivePayment,
      navigationOptions: ({ navigation, screenProps }) => ({
        title: I18N.t('RECEIVE_PAYMENT'),
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: BosonColors.$bosonPrimary,
          elevation: 0,
        },
        headerLeft: customHeader(navigation),
      }),
    },
    SendPayment: {
      screen: SendPayment,
      navigationOptions: ({ navigation, screenProps }) => ({
        title: I18N.t('SEND_PAYMENT'),
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: BosonColors.$bosonPrimary,
          elevation: 0,
        },
        headerLeft: customHeader(navigation),
      }),
    },
    PaymentOptions: {
      screen: PaymentOptions,
      navigationOptions: ({ navigation, screenProps }) => ({
        title: null,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: BosonColors.$bosonPrimary,
          elevation: 0,
        },
        headerLeft: customHeader(navigation),
      }),
    },
    ConfirmSend: {
      screen: ConfirmSend,
      navigationOptions: ({ navigation, screenProps }) => ({
        title: null,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: BosonColors.$bosonPrimary,
          elevation: 0,
        },
        headerLeft: customHeader(navigation),
      }),
    },
    NoticeNotification: {
      screen: NoticeNotification,
      navigationOptions: ({ navigation, screenProps }) => ({
        title: null,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: BosonColors.$bosonPrimary,
          elevation: 0,
        },
        headerLeft: customHomeHeader(navigation),
      }),
    },
    ChangePassword: {
      screen: ChangePassword,
      navigationOptions: ({ navigation, screenProps }) => ({
        title: I18N.t('CHANGE_PASSWORD'),
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: BosonColors.$bosonPrimary,
          elevation: 20,
        },
        headerLeft: customHeader(navigation),
      }),
    },
    Roadmap: {
      screen: Roadmap,
      navigationOptions: ({ navigation, screenProps }) => ({
        title: I18N.t('VERSION_AND_UPDATE'),
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: BosonColors.$bosonPrimary,
          elevation: 0,
        },
        headerLeft: customHeader(navigation),
      }),
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation, screenProps }) => ({
        title: I18N.t('PROFILE'),
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: BosonColors.$bosonPrimary,
          elevation: 0,
        },
        headerLeft: customHeader(navigation),
      }),
    },
    QRCode: {
      screen: QRCode,
      navigationOptions: ({ navigation, screenProps }) => ({
        title: I18N.t('SCANNER_QRCODE'),
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: BosonColors.$bosonLightGreen,
          elevation: 20,
        },
        headerLeft: customHeader(navigation),
      }),
    },
  },
  {
    navigationOptions: ({ navigation, screenProps }) => {
      return {
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: BosonColors.$bosonPrimary,
          elevation: null,
        },
        headerLeft: customHeader(navigation),
      };
    },
  }
);

/*
title: 'oi',
      headerStyle: {
        backgroundColor: BosonColors.$bosonPrimary,
        elevation: null,
      }, */

let navigator;

export function setNavigator(nav) {
  navigator = nav;
}

export function navigate(routeName, params) {
  if (__DEV__) {
    console.log(
      'We do not use navigate from routes.js anymore. Just see how to use in SigninContainer.js '
    );
  }
  if (navigator) {
    navigator.dispatch(NavigationActions.navigate({ routeName, params }));
  }
}

export default RootNavigator;
