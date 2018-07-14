/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';
import { Container, Button, Text, Picker, Content, Spinner } from 'native-base';
import { LunesIconSendPayment } from '../../native-base-theme/components/LunesCustomIcon';
import Big from 'big.js';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import LunesPIN from '../../native-base-theme/components/LunesPIN';
import { handleErrors } from '../../utils/stringUtils';
import I18N from '../../i18n/i18n';
import bosonColor from '../../native-base-theme/variables/bosonColor';
import LunesGradientButton from '../../native-base-theme/components/LunesGradientButton';

export default class ConfirmSend extends React.Component {
  constructor(props) {
    super(props);
    this.conversion = 100000000;
    this.state = {
      amountToSend: 0,
      addressToSend: '',
      fee: 0.00000034,
      showPIN: false,
      feeSelected: '',
      fees: [
        {
          label: I18N.t('HIGH'),
          name: 'high',
        },
        {
          label: I18N.t('MEDIUM'),
          name: 'medium',
        },
        {
          label: I18N.t('LOW'),
          name: 'low',
        },
      ],
    };
  }

  // TODO - improve logic in this block, either put in lunes-lib or search another alternative
  toNumber(num) {
    return typeof num === 'number' && num % 1 === 0;
  }

  toBitcoin(satoshi) {
    return (satoshi / this.conversion).toFixed(8);
  }
  // end TODO

  componentDidMount() {
    this.props.getFee(this.props.currentCoinSelected);
    const { state } = this.props.navigation;
    const amountToSend = state.params ? state.params.amountToSend : 0;
    const addressToSend = state.params ? state.params.addressToSend : 0;
    this.setState({
      amountToSend,
      addressToSend,
    });
  }

  showPIN() {
    this.setState({ showPIN: true });
  }

  onValueChange(value) {
    this.setState({ feeSelected: value });
  }

  renderFeesPicker() {
    return this.state.fees.map(fee => {
      if (this.props.fee) {
        const valueFee = this.toBitcoin(this.props.fee.data[fee.name]);
        return (
          <Picker.Item
            label={`${fee.label} - ${valueFee}`}
            value={valueFee}
            key={fee.name}
          />
        );
      }
      return (
        <Picker.Item label={fee.label} value={fee.value} key={fee.value} />
      );
    });
  }

  renderFees() {
    if (this.props.fee) {
      return (
        <Picker
          style={styles.picker}
          iosHeader={I18N.t('SELECT_FEE')}
          mode="dropdown"
          selectedValue={this.state.feeSelected}
          onValueChange={this.onValueChange.bind(this)}>
          {this.renderFeesPicker()}
        </Picker>
      );
    }
    return <Spinner />;
  }

  renderConfirmation() {
    if (this.state.showPIN === false) {
      return (
        <View style={styles.container}>
          <LunesIconSendPayment size={50} color={bosonColor.$bosonLightGreen} />
          <View style={styles.separator} />
          <Text style={styles.title}>{I18N.t('CONFIRMATION')}</Text>

          <View style={styles.separator} />

          <Text style={styles.text}>{I18N.t('YOU_WILL_SEND')}</Text>
          <Text style={styles.text}>{this.state.amountToSend}</Text>

          <View style={styles.separator} />

          <Text style={styles.text}>{I18N.t('ADDRESS_TO_RECEIVE')}</Text>
          <Text style={styles.text}>{this.state.addressToSend}</Text>

          <View style={styles.separator} />

          <Text style={styles.text}>{I18N.t('FEE')}</Text>
          <View>{this.renderFees()}</View>

          <View>
            {this.state.amountToSend > 0 ? (
              <Button
                rounded
                block
                success
                style={styles.touchable}
                onPress={() => this.showPIN()}>
                <Text style={{ fontSize: 12 }}>{I18N.t('CONFIRM')}</Text>
              </Button>
            ) : (
              <View style={styles.touchable}>
                <LunesGradientButton text={I18N.t('CONFIRM')} />
              </View>
            )}
          </View>
        </View>
      );
    }
    return null;
  }

  renderPIN() {
    if (this.state.showPIN === true) {
      return (
        <View style={styles.container}>
          <LunesPIN
            onSavePIN={pin => {
              if (!this.state.fee) {
                alert(I18N.t('PLEASE_SELECT_FEE'));
                return;
              }
              this.props.confirmTransactionSend(
                pin,
                this.props.user,
                this.state.addressToSend,
                this.state.amountToSend,
                this.state.feeSelected
              );
            }}
          />
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <Container>
        {this.props.loading ? <LunesLoading /> : null}
        {this.renderConfirmation()}
        {this.renderPIN()}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: bosonColor.$bosonLightGreen,
  },
  text: {
    color: bosonColor.$bosonWhite,
  },
  touchable: {
    width: Dimensions.get('window').width - 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  separator: {
    height: 5,
    width: Dimensions.get('window').width,
    marginTop: 10,
    marginBottom: 10,
  },
  picker: {
    width: Platform.OS === 'ios' ? undefined : 200,
    color: '#fff',
  },
});
