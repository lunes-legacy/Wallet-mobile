import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Swiper from './Swiper';

export default class Introduction extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  onPress() {
    this.props.navigation.navigate('Signin');
  }
  render() {
    return (
      <Swiper>
        {/* First screen */}
        <View style={[styles.slide2, { backgroundColor: '#C04DEE' }]}>
          <Text style={styles.header}>EAT</Text>
          <Text style={styles.text}>
            Good nutrition is an important part of leading a healthy lifestyle
          </Text>
        </View>
        {/* Second screen */}
        <View style={[styles.slide2, { backgroundColor: '#4AAFEE' }]}>
          <Text style={styles.header}>PRAY</Text>
          <Text style={styles.text}>
            Prayer is one of the most important things a Christian can do
          </Text>
        </View>
        {/* Third screen */}
        <View style={[styles.slide2, { backgroundColor: '#FC515B' }]}>
          <Text style={styles.header}>LOVE</Text>
          <Text style={styles.text}>Where there is love there is life</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  // Slide2 styles
  slide2: {
    flex: 1, // Take up all screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  // Header styles
  header: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  // Text below header
  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
  },
});
