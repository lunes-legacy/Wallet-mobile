import { DrawerNavigator, StackNavigator } from 'react-navigation';
import React from 'react';
import Header from '../Header';
import SideMenu from './SideMenu';
import LunesMarket from '../../screen/LunesMarket';
import ValuesAlertSystem from '../../screen/ValuesAlertSystem';
import MultiCoinsSystem from '../../screen/MultiCoinsSystem';
import CardManager from '../../screen/CardManager';
import BoletoPayments from '../../screen/BoletoPayments';
import PhoneRecharges from '../../screen/PhoneRecharges';

const generateDrawerHamburger = currentNav => {
  const onPress = () => currentNav.navigation.navigate('DrawerOpen');
  return <Header onPress={onPress} navigation={currentNav.navigation} />;
};

const getStackNavOption = current => ({
  header: generateDrawerHamburger(current),
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
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);
