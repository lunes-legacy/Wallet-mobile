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
import BosonColors from '../variables/bosonColor';

const remote =
  'https://res.cloudinary.com/luneswallet/image/upload/v1515200280/circle.png';

export default class LunesQuotation extends React.Component {
  constructor() {
    super();
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
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
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            transform: [{ rotate: spin }],
          }}
          source={{ uri: remote }}
        />
        <View style={{ padding: 80 }}>
          <Text style={styles.textQuotation}>COTAÇÃO</Text>
          <Text style={styles.textQuotationPrice}>$17,500.90 | BRL 0.20</Text>
        </View>
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
    color: '#fff',
    marginBottom: 10,
  },
  textQuotationPrice: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
  },
});
