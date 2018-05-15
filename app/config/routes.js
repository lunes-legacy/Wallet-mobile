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
import { Introduction } from 'lunesmobilewallet/app/screens/Introduction';
import { Confirmation } from 'lunesmobilewallet/app/screens/Confirmation';
import { PIN } from 'lunesmobilewallet/app/screens/PIN';
import { SigninContainer } from 'lunesmobilewallet/app/screens/Signin';
import { ReceivePayment } from 'lunesmobilewallet/app/screens/ReceivePayment';
import { SendPayment } from 'lunesmobilewallet/app/screens/SendPayment';
import { NoticeNotification } from 'lunesmobilewallet/app/screens/NoticeNotification';
import { Main } from 'lunesmobilewallet/app/screens/Main';
import { ConfirmBackup } from 'lunesmobilewallet/app/screens/ConfirmBackup';
import { QRCode } from 'lunesmobilewallet/app/screens/QRCodeScreen';
import { PaymentOptions } from 'lunesmobilewallet/app/screens/PaymentOptions';
import { ChangePassword } from 'lunesmobilewallet/app/screens/ChangePassword';
import { ConfirmSend } from 'lunesmobilewallet/app/screens/ConfirmTransaction';
import { Profile } from 'lunesmobilewallet/app/screens/Profile';
import { Roadmap } from 'lunesmobilewallet/app/screens/Roadmap';
import { AlertMessages } from 'lunesmobilewallet/app/screens/AlertMessages';
import BosonColors from 'lunesmobilewallet/app/native-base-theme/variables/bosonColor';
import I18N from 'lunesmobilewallet/app/i18n/i18n';

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
    Signin: {
      screen: SigninContainer,
      navigationOptions: {
        header: <View />,
      },
    },
    Introduction: {
      screen: Introduction,
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
    ConfirmBackup: {
      screen: ConfirmBackup,
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
      console.log(navigation);
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
  if (navigator) {
    navigator.dispatch(NavigationActions.navigate({ routeName, params }));
  }
}

export default RootNavigator;
