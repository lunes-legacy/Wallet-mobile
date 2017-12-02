import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
//import {getAmountOfCoins} from 'API COINS'

const FAKE_AMOUNT = 1000;

//Requisição para API em ComponentWillMount e ComponentWillReceiveProps
const getMyAmount = () => ({ amount: FAKE_AMOUNT });

//Conversões client-side
const getMyBRLAmount = () => getMyAmount().amount * 0.3;

const getMyDolarAmount = () => getMyAmount().amount * 3;

class SideMenuFooter extends Component {
  render() {
    const {amount} = getMyAmount();
    return (
      <View>
        <Text>{`${amount} - $ ${getMyDolarAmount(
          amount
        )} - BRL ${getMyBRLAmount(amount)}`}</Text>
      </View>
    );
  }
}

export default connect(null, null)(SideMenuFooter);
