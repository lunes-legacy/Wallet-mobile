import React from 'react';
import {
  StackNavigator,
  NavigationActions,
  TouchableHighlight,
  Text,
} from 'react-navigation';
import { View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';

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
import BosonColors from '../native-base-theme/variables/bosonColor';
import I18N from '../i18n/i18n';

const customHeader = navigation => {
  return (
    <View style={{ padding: 10 }}>
      <FontAwesomeIcon
        color={'#fff'}
        size={20}
        name={'arrow-left'}
        onPress={() => {
          navigation.goBack();
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
      navigationOptions: {
        header: <View />,
      },
    },
    SendPayment: {
      screen: SendPayment,
      navigationOptions: {
        title: I18N.t('SEND_PAYMENT'),
      },
    },
    PaymentOptions: {
      screen: PaymentOptions,
      navigationOptions: {
        header: <View />,
      },
    },
    NoticeNotification: {
      screen: NoticeNotification,
      navigationOptions: {
        header: <View />,
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
    QRCode: {
      screen: QRCode,
      navigationOptions: ({ navigation, screenProps }) => {
        return {
          title: I18N.t('SCAN_QRCODE'),
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
