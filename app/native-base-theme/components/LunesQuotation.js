/* eslint-disable */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import LunesBalanceText from './LunesBalanceText';
import {
  LunesIconSendPayment,
  LunesIconReceivePayment,
} from './LunesCustomIcon';
import BosonColors from '../variables/bosonColor';
import I18N from '../../i18n/i18n';

export default class LunesQuotation extends React.Component {
  constructor() {
    super();
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  renderImage() {
    const imageSourceURIDefault =
      'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_386/v1517161948/arco-btc.png';
    const imageSourceURIYellow =
      'https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_404/v1517351621/arco-success-gold.png';
    if (this.props.type && this.props.type === 'success') {
      return imageSourceURIDefault;
    }
    if (this.props.type && this.props.type === 'warning') {
      return imageSourceURIYellow;
    }
    return imageSourceURIDefault;
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
    }).start();
  }

  stopSpin() {
    this.spinValue.setValue(0);
  }

  renderContent() {
    if (!this.props.icon) {
      return (
        <View style={styles.areaPrice}>
          <Text style={styles.textQuotation}>{I18N.t('QUOTE')}</Text>
          <Text style={styles.textQuotationPrice}>
            {this.props.ticker[this.props.currentCoinSelected].DISPLAYPRICE}
          </Text>
          <LunesBalanceText
            style={{ marginTop: 30 }}
            icon={this.props.iconBalance}
            balance={this.props.balance}
          />
        </View>
      );
    }
    if (this.props.type === 'success') {
      return (
        <View style={{ alignItems: 'center' }}>
          <LunesIconReceivePayment
            color={BosonColors.$bosonLightGreen}
            size={60}
          />
          <Text style={styles.textPayment}>{this.props.title}</Text>
        </View>
      );
    }

    if (this.props.type === 'warning') {
      return (
        <View style={{ alignItems: 'center' }}>
          <LunesIconSendPayment
            color={BosonColors.$bosonMediumYellow}
            size={60}
          />
          <Text style={styles.textPayment}>{this.props.title}</Text>
        </View>
      );
    }
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    setTimeout(() => {
      this.stopSpin();
    }, 8000);

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Animated.Image
          style={{
            flex: 1,
            resizeMode: 'contain',
            position: 'absolute',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width,
            justifyContent: 'center',
            transform: [{ rotate: spin }],
          }}
          source={{ uri: this.renderImage() }}
        />
        <View>{this.renderContent()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  containerInline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaPrice: {},
  textQuotation: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 22,
    color: BosonColors.$bosonWhite,
    marginBottom: 10,
    fontWeight: '700',
  },
  textPayment: {
    fontSize: 24,
    fontWeight: '700',
    color: BosonColors.$bosonWhite,
    paddingTop: 10,
  },
  textQuotationPrice: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
  textQuotationPriceSmall: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
  },
});
