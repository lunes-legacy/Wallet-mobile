/* eslint-disable */
// @flow

import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Input, Text, Textarea, Button } from 'native-base';
import commonColor from './../variables/commonColor';
import BosonColors from './../variables/bosonColor';
import I18N from '../../i18n/i18n';
import LunesLogo from './LunesLogo';
import LunesGradientButton from './LunesGradientButton';

export default class LunesImportSeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seedWords: '',
    };
  }

  importSeed() {
    if (this.state.seedWords) {
      this.props.importSeed(this.state.seedWords, this.props.userInfo);
      return;
    }

    if (this.props.newSeedWords) {
      this.props.importSeed(this.props.newSeedWords, this.props.userInfo);
    }
  }

  generateNewSeed() {
    this.props.generateNewSeed();
  }

  render() {
    return (
      <View>
        <LunesLogo size={40} />
        <View style={styles.textCenter}>
          <Text style={styles.textFastSafeSmart}>
            {I18N.t('FAST_SAFE_SMART')}
          </Text>
          <Text>{I18N.t('IF_YOU_NOT_GENERATE_YOUR_SEED')}</Text>
          <Text>{I18N.t('IF_YOU_NOT_HAVE_SEED_GENERATE')}</Text>
          <Text style={styles.textYourSeedWords}>
            {I18N.t('INSERT_YOURS_SEEDS')}
          </Text>
        </View>
        <Textarea
          onChangeText={seedWords => {
            this.setState({ seedWords });
          }}
          style={styles.textArea}
          rowSpan={5}
          bordered
          placeholder={this.props.newSeedWords}
        />
        <View style={styles.importButton}>
          <TouchableOpacity
            onPress={() => {
              this.generateNewSeed();
            }}>
            <LunesGradientButton text={I18N.t('GENERATE_NEW_SEED')} />
          </TouchableOpacity>
        </View>
        <Button
          rounded
          block
          success
          style={styles.touchable}
          onPress={() => this.importSeed()}>
          <Text style={{ fontSize: 12 }}>{I18N.t('IMPORT_SEED')}</Text>
        </Button>
        <View style={[styles.textCenter, styles.areaAddress]}>
          <Text>{I18N.t('ADDRESS')}</Text>
          <Text selectable={true} style={styles.outputAddress}>
            --
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    borderBottomColor: '#fff',
    color: '#fff',
    padding: 10,
  },
  textArea: {
    color: '#fff',
  },
  textFastSafeSmart: {
    fontSize: 25,
    color: BosonColors.$bosonLightGreen,
    marginTop: 10,
    marginBottom: 10,
  },
  importButton: {
    marginTop: 20,
  },
  textCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textYourSeedWords: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  touchable: {
    width: Dimensions.get('window').width - 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  outputAddress: {
    borderBottomColor: BosonColors.$bosonLightGreen,
  },
  areaAddress: {
    marginTop: 20,
  },
});
