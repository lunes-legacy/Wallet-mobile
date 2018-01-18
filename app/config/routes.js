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
import BosonColors from '../native-base-theme/variables/bosonColor';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

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
        title: 'Enviar Pagamento',
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
    QRCode: {
      screen: QRCode,
      navigationOptions: ({ navigation, screenProps }) => {
        return {
          title: 'Escanear QRCode',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: BosonColors.$bosonLightGreen,
            elevation: 20,
          },
          headerLeft: (
            <View style={{ paddingLeft: 10 }}>
              <FontAwesomeIcon
                color={'#fff'}
                name={'arrow-left'}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
          ),
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
        headerLeft: (
          <View style={{ paddingLeft: 10 }}>
            <FontAwesomeIcon
              color={'#fff'}
              name={'arrow-left'}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
        ),
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
