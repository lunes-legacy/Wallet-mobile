import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Linking,
  StatusBar,
} from 'react-native';
import { Container, Item, Input, Toast, Root, Button } from 'native-base';
import QRCode from 'react-native-qrcode';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import QRCodeScanner from 'react-native-qrcode-scanner';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import SimpleLineIcon from 'react-native-vector-icons/dist/SimpleLineIcons';
import BosonColors from '../../native-base-theme/variables/bosonColor';
import LunesConfirmButton from '../../native-base-theme/components/LunesConfirmButton';
import LunesTabCoins from '../../native-base-theme/components/LunesTabCoins';
import LunesPickerCountry from '../../native-base-theme/components/LunesPickerCountry';
import { navigate } from '../../config/routes';
import I18n from '../../i18n/i18n';
import { MoneyClass } from '../../utils/moneyConvert';
import { numeral } from '../../utils/numeral';

const money = new MoneyClass();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quotationAmount: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textQuotationAmount: {
    fontSize: 18,
    color: BosonColors.$bosonMediumYellow,
  },
  amount: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAmountAvailable: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: BosonColors.$bosonDarkPurple,
    width: Dimensions.get('window').width,
  },
  containerInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    width: Dimensions.get('window').width,
    borderBottomColor: BosonColors.$bosonLightGreen,
    borderBottomWidth: 1,
    color: BosonColors.$bosonWhite,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
  text: {
    color: BosonColors.$bosonWhite,
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
  },
  textAmountToType: {
    color: BosonColors.$bosonWhite,
    fontSize: 11,
    fontFamily: 'Roboto-Light',
  },
  textAmount: {
    color: BosonColors.$bosonLightGreen,
    fontSize: 13,
    fontFamily: 'Roboto-Medium',
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class SendPayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      amountToSend: '0.00000000',
      parcialValue: 0.00
    };
  }

  componentDidMount() {
    if (!this.props.balanceData) {
      this.props.getBalance();
    }
  }

  getValueTotal(value) {
    const currentPrice = this.props.ticker[this.props.currentCoinSelected].PRICE;
    let res = parseFloat(value) * currentPrice;

    if (res === 0) {
      res = currentPrice;
    }

    if (parseFloat(value) === 0) {
      res = 0.00;
    }

    this.setState({ amountToSend: value, parcialValue: res });
  }

  getBalanceTotal() {
    const { balanceData, currentCoinSelected } = this.props;
    const balance = (balanceData[currentCoinSelected])
      ? balanceData[currentCoinSelected].confirmed
      : 0
    return numeral(money.conevertCoin('btc', balance)).format('0,0.00000000');
  }

  redirectToQRCodeScreen() {
    navigate('PaymentOptions', { amountToSend: this.state.amountToSend });
  }

  renderChooseCoin() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text}>{I18n.t('chooseCoin')}</Text>
        <FontAwesomeIcon
          style={{ paddingLeft: 10 }}
          name={'chevron-down'}
          size={14}
          color={BosonColors.$bosonLightGreen}
        />
      </View>
    );
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={styles.keyboardContainer}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}>
        <Container>
          <StatusBar
            backgroundColor={BosonColors.$bosonPrimary}
            barStyle="light-content"
          />
          <Root>
            <View style={styles.container}>
              {/* CHOOSE COINS */}
              {/* this.renderChooseCoin() */}

              {/* TAB COINS */}
              <View style={{ flexDirection: 'row' }}>
                <LunesTabCoins
                  ticker={this.props.ticker}
                  doAction={this.props.doAction} />
              </View>

              {/* AMOUNT AVAIALABLE */}
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={styles.text}>{I18n.t('BALANCE')}</Text>
                  <Text style={styles.text}>{I18n.t('QUOTE')}</Text>
                </View>
                <View style={styles.containerAmountAvailable}>
                  <View style={styles.amount}>
                    <SimpleLineIcon
                      name={'wallet'}
                      size={10}
                      color={BosonColors.$bosonLightGreen}
                      style={{ paddingRight: 10 }}
                    />
                    <Text style={styles.textAmount}>
                      {this.getBalanceTotal()}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.text}>
                      {this.props.ticker[this.props.currentCoinSelected].DISPLAYPRICE}
                    </Text>
                  </View>
                </View>
              </View>

              {/* AMOUNT COIN to TYPE */}
              <View style={styles.containerInner}>
                <Text style={styles.textAmountToType}>
                  {I18n.t('typeYourAmountCoin')}
                </Text>
                <TextInput
                  style={styles.inputText}
                  maxLength={10}
                  keyboardType="numeric"
                  value={this.state.amountToSend}
                  onChangeText={value => { this.getValueTotal(value) }}
                  placeholder={I18n.t('typeHere')}
                  underlineColorAndroid={'transparent'}
                  placeholderTextColor="rgba(255,255,255,0.7)"
                />
              </View>

              {/* AMOUNT COIN to TYPE */}
              <View style={styles.containerInner}>
                <View style={{ flexDirection: 'row' }}>
                  {/*<LunesPickerCountry selectable={false} />*/}
                  <View style={styles.quotationAmount}>
                    <Text style={styles.textAmountToType}>
                      {I18n.t('VALUE_CURRENCY_LABEL')}
                    </Text>
                    <Text style={styles.textQuotationAmount}>
                      {I18n.t('CURRENCY_USER')} {this.state.parcialValue}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={[
                  styles.containerInner,
                  { width: Dimensions.get('window').width - 50 },
                ]}>
                <Button
                  rounded
                  block
                  success
                  onPress={() => {
                    this.redirectToQRCodeScreen();
                  }}>
                  <Text style={styles.text}>{I18n.t('optionsSent')}</Text>
                </Button>
              </View>
            </View>
          </Root>
        </Container>
      </KeyboardAwareScrollView>
    );
  }
}
