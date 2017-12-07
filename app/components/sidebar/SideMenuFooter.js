import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styles from '../styles/SideMenu';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
//import {getAmountOfCoins} from 'API COINS'

const FAKE_AMOUNT = 10000;

//Requisição para API em ComponentWillMount e ComponentWillReceiveProps
const getMyAmount = () => ({ amount: FAKE_AMOUNT });

//Conversões client-side
const getMyBRLAmount = () => getMyAmount().amount * 0.3;

const getMyDolarAmount = () => getMyAmount().amount * 3;

class SideMenuFooter extends Component {
  render() {
    const { amount } = getMyAmount();
    return (
      <View>
        <Text style={styles.footerContainer}>
          <Text style={styles.coins}>
            <Icon name="money" size={15} color="#fff" />
            {`   ${amount}`}
          </Text>
          <Text style={styles.dolar}>{`  $ ${getMyDolarAmount(
            amount
          )}`}</Text>
          <Text
            style={styles.brl}>{`   |   BRL ${getMyBRLAmount(
            amount
          )}`}</Text>
        </Text>
      </View>
    );
  }
}

export default connect(null, null)(SideMenuFooter);
