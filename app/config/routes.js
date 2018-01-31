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
import { Introduction } from '../screen/Introduction';
import { Confirmation } from '../screen/Confirmation';
import { PIN } from '../screen/PIN';
import { SigninContainer } from '../screen/Signin';
import { ReceivePayment } from '../screen/ReceivePayment';
import { SendPayment } from '../screen/SendPayment';
import { NoticeNotification } from '../screen/NoticeNotification';
import { Main } from '../screen/Main';
import { QRCode } from '../screen/QRCodeScreen';
import { PaymentOptions } from '../screen/PaymentOptions';
import { ChangePassword } from '../screen/ChangePassword';
import { ConfirmSend } from '../screen/ConfirmTransaction';
import { Profile } from '../screen/Profile';
import BosonColors from '../native-base-theme/variables/bosonColor';
import I18N from '../i18n/i18n';

const customHeader = navigation => {
  return (
    <View style={{ padding: 10 }}>
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
};

const customHomeHeader = navigation => {
  return (
    <View style={{ padding: 10 }}>
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
};

const RootNavigator = StackNavigator(
  {
    Introduction: {
      screen: Introduction,
      navigationOptions: {
        header: <View />,
      },
    },
    Signin: {
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
    ReceivePayment: {
      screen: ReceivePayment,
      navigationOptions: ({ navigation, screenProps }) => {
        return {
          title: I18N.t('RECEIVE_PAYMENT'),
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: BosonColors.$bosonPrimary,
            elevation: 0,
          },
          headerLeft: customHeader(navigation),
        };
      },
    },
    SendPayment: {
      screen: SendPayment,
      navigationOptions: ({ navigation, screenProps }) => {
        return {
          title: I18N.t('SEND_PAYMENT'),
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: BosonColors.$bosonPrimary,
            elevation: 0,
          },
          headerLeft: customHeader(navigation),
        };
      },
    },
    PaymentOptions: {
      screen: PaymentOptions,
      navigationOptions: ({ navigation, screenProps }) => {
        return {
          title: null,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: BosonColors.$bosonPrimary,
            elevation: 0,
          },
          headerLeft: customHeader(navigation),
        };
      },
    },
    ConfirmSend: {
      screen: ConfirmSend,
      navigationOptions: ({ navigation, screenProps }) => {
        return {
          title: null,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: BosonColors.$bosonPrimary,
            elevation: 0,
          },
          headerLeft: customHeader(navigation),
        };
      },
    },
    NoticeNotification: {
      screen: NoticeNotification,
      navigationOptions: ({ navigation, screenProps }) => {
        return {
          title: null,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: BosonColors.$bosonPrimary,
            elevation: 0,
          },
          headerLeft: customHomeHeader(navigation),
        };
      },
    },
    ChangePassword: {
      screen: ChangePassword,
      navigationOptions: ({ navigation, screenProps }) => {
        return {
          title: I18N.t('CHANGE_PASSWORD'),
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: BosonColors.$bosonPrimary,
            elevation: 20,
          },
          headerLeft: customHeader(navigation),
        };
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation, screenProps }) => {
        return {
          title: I18N.t('PROFILE'),
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: BosonColors.$bosonPrimary,
            elevation: 20,
          },
          headerLeft: customHeader(navigation),
        };
      },
    },
    QRCode: {
      screen: QRCode,
      navigationOptions: ({ navigation, screenProps }) => {
        return {
          title: I18N.t('SCANNER_QRCODE'),
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: BosonColors.$bosonLightGreen,
            elevation: 20,
          },
          headerLeft: customHeader(navigation),
        };
      },
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
      },*/

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
