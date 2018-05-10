/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from '../styles/SideMenu';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import BosonColors from '../../native-base-theme/variables/bosonColor';
// import {getAmountOfCoins} from 'API COINS'

const FAKE_AMOUNT = 10000;

// Requisição para API em ComponentWillMount e ComponentWillReceiveProps
const getMyAmount = () => ({ amount: FAKE_AMOUNT });

// Conversões client-side
const getMyBRLAmount = () => getMyAmount().amount * 0.3;

const getMyDolarAmount = () => getMyAmount().amount * 3;

class SideMenuFooter extends Component {
  getBalance() {
    const finalBalance =
      this.props && this.props.balanceData
        ? this.props.balanceData.confirmed_balance
        : 0;
    return finalBalance;
  }
  render() {
    const { amount } = getMyAmount();
    return (
      <View>
        <View style={styles2.footerContainer}>
          <View style={styles2.containerInline}>
            <Image
              style={{ width: 26, height: 25 }}
              source={{ uri:'http://res.cloudinary.com/luneswallet/image/upload/v1519442468/icon-lunes_qhumiw.png' }}
            />
            <Text style={styles2.text}>{` ${this.getBalance()}`}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles2 = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },
  rightBalance: {
    backgroundColor: BosonColors.$bosonLightGreen,
    paddingHorizontal: 10,
    paddingBottom: 15,
    paddingTop: 15,
    fontSize: 16,
    color: BosonColors.$bosonWhite,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  text: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
  containerInline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
});

export default connect(null, null)(SideMenuFooter);
