/* eslint-disable */
// @flow

import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconIon from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import LunesQuotation from './LunesQuotation';
import commonColor from './../variables/commonColor';
import BosonColors from './../variables/bosonColor';
import { navigate } from '../../config/routes';
import I18N from '../../i18n/i18n';

export default class LunesScreenNotification extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View style={styles.containerMiddle}>
          <LunesQuotation type={this.props.type} icon="true" title={I18N.t('SENT')} label="" />
        </View>
        <View style={styles.containerFooter}>
          <Text style={styles.textFooter}>
            {this.props.userName}, {I18N.t('JUST_SENT')}
          </Text>
          <Text style={styles.transationValue}>{this.props.amount}</Text>
          <Text style={styles.textFooter}>{I18N.t('OF_YOUR_WALLET_LUNES')}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerTop: {
    marginBottom: 20
  },
  containerMiddle: {
    width: Dimensions.get('window').width
  },
  containerFooter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  transationValue: {
    color: BosonColors.$bosonLightGreen,
    fontSize: 30,
    fontWeight: '700',
    paddingTop: 10,
    paddingBottom: 10
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 32,
    color: BosonColors.$bosonWhite
  },
  textFooter: {
    color: BosonColors.$bosonWhite,
    fontSize: 13
  }
});
