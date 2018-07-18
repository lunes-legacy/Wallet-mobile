import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
  TextInput,
} from 'react-native';

import { Container, Spinner, Text, Button } from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import I18N from '../../i18n/i18n';
import bosonColor from '../../native-base-theme/variables/bosonColor';
import { navigate } from '../../config/routes';
import * as BalanceUtils from '../../utils/balance-utils';

// CONVERT DECIMALS
import { MoneyClass } from '../../utils/moneyConvert';
import { numeral } from '../../utils/numeral';

const money = new MoneyClass();

const { width, height } = Dimensions.get('window');
const widthSpacePadding = width - 40;

export default class LeasingStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: undefined,
      nodeaddress: '',
      fee: 0.001,
    };
  }

  render() {
    const { resume } = this.props;
    return (
      <Container>
        <View style={{ flex: 1, width: widthSpacePadding }}>
          {/* resume */}
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/* the coin */}
            <Image
              style={{
                width: 26,
                height: 25,
                marginRight: 15,
                marginBottom: 5,
              }}
              source={{
                uri:
                  'http://res.cloudinary.com/luneswallet/image/upload/v1519442468/icon-lunes_qhumiw.png',
              }}
            />
            <Text style={{ fontSize: 24 }}>
              {numeral(
                money.conevertCoin('btc', this.props.balanceData)
              ).format('0,0.00000000')}
            </Text>
          </View>

          {/* input amount */}
          <View style={{ marginBottom: 20 }}>
            <Text>Amount</Text>
            <TextInput
              style={{ color: '#fff', backgroundColor: 'rgba(0,0,0,.1)' }}
              underlineColorAndroid={'transparent'}
              autoCapitalize="none"
              onChangeText={text =>
                this.setState(...this.state, { amount: text })
              }
              value={this.state.amount}
              onSubmitEditing={() => this.nodeaddress.focus()}
              returnKeyType={'next'}
              keyboardType="numeric"
            />
          </View>

          {/* input node address */}
          <View style={{ marginBottom: 20 }}>
            <Text>Mining node address</Text>
            <TextInput
              style={{ color: '#fff', backgroundColor: 'rgba(0,0,0,.1)' }}
              underlineColorAndroid={'transparent'}
              placeholderTextColor="rgba(255,255,255,0.7)"
              autoCapitalize="none"
              onChangeText={text =>
                this.setState(...this.state, { nodeaddress: text })
              }
              value={this.state.nodeaddress}
              ref={input => {
                this.nodeaddress = input;
              }}
              returnKeyType={'done'}
            />
          </View>

          {/* fees network */}
          <View
            style={{
              marginBottom: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text>Fee</Text>
            <Text>{this.state.fee}</Text>
          </View>
        </View>

        {/* button start leasing */}
        <View style={{ width: widthSpacePadding }}>
          <Button
            rounded
            block
            success
            onPress={() => navigate('LeasingStart')}>
            <Text>{I18N.t('LEASING_BT_START')}</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
