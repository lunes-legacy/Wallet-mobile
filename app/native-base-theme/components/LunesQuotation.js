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
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {
  LunesIconSendPayment,
  LunesIconReceivePayment,
} from './LunesCustomIcon';
import BosonColors from '../variables/bosonColor';

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
        <View>
          <Text style={styles.textQuotation}>COTAÇÃO</Text>
          <Text style={styles.textQuotationPrice}>$17,500.90 | BRL 0.20</Text>
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
      <View style={{ flex: 1 }}>
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
        <View style={{ paddingTop: 80 }}>{this.renderContent()}</View>
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
  textQuotation: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 18,
    color: BosonColors.$bosonWhite,
    marginBottom: 10,
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
    fontSize: 14,
    color: '#fff',
  },
});
