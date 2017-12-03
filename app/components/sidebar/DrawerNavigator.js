import { DrawerNavigator, StackNavigator } from 'react-navigation';
import React from 'react';
import { Button, View } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import SideMenuStyle from '../styles/SideMenu';
import SideMenu from './SideMenu';
import LunesMarket from '../../screen/LunesMarket';
import ValuesAlertSystem from '../../screen/ValuesAlertSystem';
import MultiCoinsSystem from '../../screen/MultiCoinsSystem';
import CardManager from '../../screen/CardManager';
import BoletoPayments from '../../screen/BoletoPayments';
import PhoneRecharges from '../../screen/PhoneRecharges';

const generateDrawerHamburger = currentNav => {
  const onPress = () => currentNav.navigation.navigate('DrawerOpen');
  return <Button title="Menu" onPress={onPress} />;
};

const getStackNavOption = current => ({
  headerStyle: SideMenuStyle.hamburguer,
  headerLeft: generateDrawerHamburger(current),
});

const LunesMarketStack = StackNavigator({
  LunesMarket: {
    screen: LunesMarket,
    navigationOptions: getStackNavOption,
  },
});

const ValuesAlertSystemStack = StackNavigator({
  ValuesAlertSystem: {
    screen: ValuesAlertSystem,
    navigationOptions: getStackNavOption,
  },
});

const MultiCoinsSystemStack = StackNavigator({
  MultiCoinsSystem: {
    screen: MultiCoinsSystem,
    navigationOptions: getStackNavOption,
  },
});

const CardManagerStack = StackNavigator({
  CardManager: {
    screen: CardManager,
    navigationOptions: getStackNavOption,
  },
});

const BoletoPaymentsStack = StackNavigator({
  BoletoPayments: {
    screen: BoletoPayments,
    navigationOptions: getStackNavOption,
  },
});

const PhoneRechargesStack = StackNavigator({
  PhoneRecharges: {
    screen: PhoneRecharges,
    navigationOptions: getStackNavOption,
  },
});

export default DrawerNavigator(
  {
    LunesMarket: { screen: LunesMarketStack },
    ValuesAlertSystem: { screen: ValuesAlertSystemStack },
    MultiCoinsSystem: { screen: MultiCoinsSystemStack },
    CardManager: { screen: CardManagerStack },
    BoletoPayments: { screen: BoletoPaymentsStack },
    PhoneRecharges: { screen: PhoneRechargesStack },
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 300,
  }
);
