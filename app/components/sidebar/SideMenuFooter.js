import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from '../styles/SideMenu';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import BosonColors from '../../native-base-theme/variables/bosonColor';
//import {getAmountOfCoins} from 'API COINS'

const FAKE_AMOUNT = 10000;

//Requisição para API em ComponentWillMount e ComponentWillReceiveProps
const getMyAmount = () => ({ amount: FAKE_AMOUNT });

//Conversões client-side
const getMyBRLAmount = () => getMyAmount().amount * 0.3;

const getMyDolarAmount = () => getMyAmount().amount * 3;

class SideMenuFooter extends Component {
  getBalance() {
    let finalBalance =
      this.props && this.props.balanceData
        ? this.props.balanceData.final_balance
        : 0;
    return finalBalance;
  }
  render() {
    const { amount } = getMyAmount();
    return (
      <View>
        <View style={styles2.footerContainer}>
          <View>
            <Text style={styles2.leftBalance}>
              <Image
                width={30}
                height={30}
                source={require('../../assets/images/lunes-token-coin.png')}
              />{' '}
              {` ${this.getBalance()}`}
            </Text>
          </View>

          <View>
            <Text style={styles2.rightBalance}>
              {`    $ ${getMyDolarAmount(amount)} | BRL ${getMyBRLAmount(
                amount
              )}`}
            </Text>
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
  leftBalance: {
    color: BosonColors.$bosonWhite,
    paddingHorizontal: 10,
  },
});

export default connect(null, null)(SideMenuFooter);
