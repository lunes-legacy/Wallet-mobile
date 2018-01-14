// @flow

import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconIon from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import LunesQuotation from './LunesQuotation';
import commonColor from './../variables/commonColor';
import BosonColors from './../variables/bosonColor';
import { navigate } from '../../config/routes';

export default class LunesScreenNotification extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View style={styles.containerMiddle}>
          <LunesQuotation
            type="warning"
            icon="true"
            title="Recebidos"
            label=""
          />
        </View>
        <View style={styles.containerFooter}>
          <Text style={styles.textFooter}>Damião, acabou de receber</Text>
          <Text style={styles.transationValue}>
            {this.props.transationValue}
          </Text>
          <Text>{this.props.text2}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMiddle: {
    flex: 3,
    width: Dimensions.get('window').width - 50,
  },
  containerFooter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transationValue: {
    color: BosonColors.$bosonLightGreen,
    fontSize: 30,
    fontWeight: '700',
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 32,
    color: BosonColors.$bosonWhite,
  },
  textFooter: {
    color: BosonColors.$bosonWhite,
    fontSize: 13,
  },
});
