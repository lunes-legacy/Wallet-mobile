/* eslint-disable */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import BosonColors from '../variables/bosonColor';
import I18N from '../../i18n/i18n';
import LunesLogo from './LunesLogo';
import generalConstant from '../../constants/general';

const { width, height } = Dimensions.get('window');

export default class LunesAbout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <LunesLogo size={50} />
        <Text style={styles.text}>
          Lunes Wallet {generalConstant.VERSION_NAME}
        </Text>
        <Text style={styles.text}>
          <MaterialCommunityIcons name={'copyright'} color={'#fff'} size={20} />
          {'   '}
          2018 Lunes Platform
        </Text>
        <Text style={styles.text}>{I18N.t('ALL_RIGHTS_RESERVED')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: BosonColors.$bosonWhite,
    fontSize: 14,
    textAlign: 'center',
    padding: 10,
  },
});
