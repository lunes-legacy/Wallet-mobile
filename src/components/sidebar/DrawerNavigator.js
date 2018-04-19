import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import LunesMarket from 'app/src/screens/LunesMarket';
import ValuesAlertSystem from 'app/src/screens/ValuesAlertSystem';
import MultiCoinsSystem from 'app/src/screens/MultiCoinsSystem';
import CardManager from 'app/src/screens/CardManager';
import BoletoPayments from 'app/src/screens/BoletoPayments';
import PhoneRecharges from 'app/src/screens/PhoneRecharges';
import HistoricTransaction from 'app/src/screens/HistoricTransaction';
import Header from '../Header';
import SideMenu from './SideMenu';

const generateDrawerHamburger = currentNav => {
  const onPress = () => currentNav.navigation.navigate('DrawerOpen');
  return <Header onPress={onPress} navigation={currentNav.navigation} />;
};

const getStackNavOption = current => ({
  header: generateDrawerHamburger(current)
});

const LunesMarketStack = StackNavigator({
  LunesMarket: {
    screen: LunesMarket,
    navigationOptions: getStackNavOption
  }
});

const ValuesAlertSystemStack = StackNavigator({
  ValuesAlertSystem: {
    screen: ValuesAlertSystem,
    navigationOptions: getStackNavOption
  }
});

const MultiCoinsSystemStack = StackNavigator({
  MultiCoinsSystem: {
    screen: MultiCoinsSystem,
    navigationOptions: getStackNavOption
  }
});

const CardManagerStack = StackNavigator({
  CardManager: {
    screen: CardManager,
    navigationOptions: getStackNavOption
  }
});

const BoletoPaymentsStack = StackNavigator({
  BoletoPayments: {
    screen: BoletoPayments,
    navigationOptions: getStackNavOption
  }
});

const PhoneRechargesStack = StackNavigator({
  PhoneRecharges: {
    screen: PhoneRecharges,
    navigationOptions: getStackNavOption
  }
});

const HistoricTransactionStack = StackNavigator({
  HistoricTransaction: {
    screen: HistoricTransaction,
    navigationOptions: getStackNavOption
  }
});

export default DrawerNavigator(
  {
    LunesMarket: { screen: LunesMarketStack },
    ValuesAlertSystem: { screen: ValuesAlertSystemStack },
    MultiCoinsSystem: { screen: MultiCoinsSystemStack },
    CardManager: { screen: CardManagerStack },
    BoletoPayments: { screen: BoletoPaymentsStack },
    PhoneRecharges: { screen: PhoneRechargesStack },
    HistoricTransaction: { screen: HistoricTransactionStack }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 300,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
);
