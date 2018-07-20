import React from 'react';
import {
  View,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';

import { Container, Text, Button } from 'native-base';
import LunesAlert from '../../native-base-theme/components/LunesAlert';
import I18N from '../../i18n/i18n';
import { navigate } from '../../config/routes';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import { isTestNet } from '../../utils/testnet-util';

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
      amount: '0.00000000',
      nodeaddress: '',
      fee: 0.001,
    };
  }

  renderError() {
    const { isShowError } = this.props;
    if (isShowError) {
      return (
        <LunesAlert
          isShow={isShowError}
          type="error"
          showCloseIcon={true}
          onClose={() => {
            this.props.closeAlert();
          }}
          onPressConfirmation={() => {
            this.props.closeAlert();
          }}
          title={I18N.t('ERROR')}
          message={I18N.t('ERROR_ON_SET_LEASE')}
          textConfirmation={I18N.t('OK')}
        />
      );
    }
    return null;
  }

  renderSuccess() {
    const { isShowSuccess } = this.props;
    if (isShowSuccess) {
      return (
        <LunesAlert
          isShow={isShowSuccess}
          type="success"
          showCloseIcon={true}
          onClose={() => {
            this.props.closeAlert();
            navigate('Leasing');
          }}
          onPressConfirmation={() => {
            this.props.closeAlert();
            navigate('Leasing');
          }}
          title={I18N.t('SUCCESS')}
          message={I18N.t('SUCCESS_ON_SET_LEASE')}
          textConfirmation={I18N.t('OK')}
        />
      );
    }
    return null;
  }

  renderLoading() {
    return <LunesLoading />;
  }

  doStartLeasing() {
    const data = {
      toAddress: this.state.nodeaddress,
      amount: parseFloat(this.state.amount),
      fee: this.state.fee,
      testnet: isTestNet(),
    };
    this.props.startLeasing(data);
  }

  formatInputAmount = value => {
    const rest = numeral(value).format('0,0.00000000');
    this.setState(...this.state, { amount: rest });
  };

  render() {
    const { resume } = this.props;
    return (
      <Container>
        {this.props.loading ? this.renderLoading() : null}
        {this.renderError()}
        {this.renderSuccess()}
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
            <Text>{I18N.t('AMOUNT')}</Text>
            <TextInput
              style={{ color: '#fff', backgroundColor: 'rgba(0,0,0,.1)' }}
              underlineColorAndroid={'transparent'}
              autoCapitalize="none"
              onChangeText={text => this.formatInputAmount(text)}
              value={this.state.amount}
              onSubmitEditing={() => this.nodeaddress.focus()}
              returnKeyType={'next'}
              keyboardType="numeric"
            />
          </View>

          {/* input node address */}
          <View style={{ marginBottom: 20 }}>
            <Text>{I18N.t('LEASING_MINING_NODE_ADDRESS')}</Text>
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
            <Text>{I18N.t('FEE')}</Text>
            <Text>{this.state.fee}</Text>
          </View>

          {/* button start leasing */}
          <Button
            rounded
            block
            success
            style={{elevation: 0}}
            onPress={() => {
              this.doStartLeasing();
            }}>
            <Text>{I18N.t('CONFIRM')}</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
