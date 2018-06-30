import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import LunesMarket from 'lunesmobilewallet/app/screens/LunesMarket';
import ValuesAlertSystem from 'lunesmobilewallet/app/screens/ValuesAlertSystem';
import MultiCoinsSystem from 'lunesmobilewallet/app/screens/MultiCoinsSystem';
import CardManager from 'lunesmobilewallet/app/screens/CardManager';
import BoletoPayments from 'lunesmobilewallet/app/screens/BoletoPayments';
import PhoneRecharges from 'lunesmobilewallet/app/screens/PhoneRecharges';
import HistoricTransaction from 'lunesmobilewallet/app/screens/HistoricTransaction';
import ImportSeed from 'lunesmobilewallet/app/screens/ImportSeed';
import Header from '../Header';
import SideMenu from './SideMenu';

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

const HistoricTransactionStack = StackNavigator({
  HistoricTransaction: {
    screen: HistoricTransaction,
    navigationOptions: getStackNavOption,
  },
});

const ImportSeedStack = StackNavigator({
  ImportSeed: {
    screen: ImportSeed,
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
    HistoricTransaction: { screen: HistoricTransactionStack },
    ImportSeed: { screen: ImportSeedStack },
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 300,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);
