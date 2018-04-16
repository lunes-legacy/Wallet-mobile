/* eslint-disable */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import BosonColors from '../variables/bosonColor';
import LunesLogo from './LunesLogo';

export default class LunesSupport extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <LunesLogo size={50} />
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('mailto:support@lunes.io');
          }}>
          <Text selectable={true} style={styles.text}>
            support@lunes.io
          </Text>
        </TouchableOpacity>
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
