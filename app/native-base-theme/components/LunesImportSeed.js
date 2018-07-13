/* eslint-disable */
// @flow

import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  ScrollView,
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

    if (this.props.seedWords) {
      this.props.importSeed(this.props.seedWords, this.props.userInfo);
      return;
    }
  }

  generateNewSeed() {
    this.setState({
      seedWords: '',
    });
    this.props.generateNewSeed();
  }

  render() {
    return (
      <View>
        <LunesLogo size={40} />

        <ScrollView>
          <View style={styles.textCenter}>
            <Text style={styles.textFastSafeSmart}>
              {I18N.t('FAST_SAFE_SMART')}
            </Text>

            <Text style={{ textAlign: 'center' }}>
              {I18N.t('IF_YOU_NOT_GENERATE_YOUR_SEED')}
            </Text>
            <Text style={{ textAlign: 'center' }}>
              {I18N.t('IF_YOU_NOT_HAVE_SEED_GENERATE')}
            </Text>

            <Text style={styles.textYourSeedWords}>
              {I18N.t('INSERT_YOURS_SEEDS')}
            </Text>
          </View>
          <View style={styles.textArea}>
            <TextInput
              multiline={true}
              underlineColorAndroid="rgba(0,0,0,0)"
              onChangeText={seedWords => {
                if (seedWords === '') {
                  this.props.clearSeedWords();
                }
                this.setState({ seedWords });
              }}
              style={styles.textInputArea}
              numberOfLines={5}
              value={this.state.seedWords || this.props.seedWords}
            />
          </View>
          <View style={styles.importButton}>
            <TouchableOpacity
              onPress={() => {
                this.generateNewSeed();
              }}>
              <LunesGradientButton text={I18N.t('GENERATE_NEW_SEED')} />
            </TouchableOpacity>
          </View>

          <View>
            <Button
              rounded
              block
              success
              style={styles.touchable}
              onPress={() => this.importSeed()}>
              <Text style={{ fontSize: 12 }}>{I18N.t('IMPORT_SEED')}</Text>
            </Button>
          </View>

          <View style={[styles.textCenter, styles.areaAddress]}>
            <Text>{I18N.t('ADDRESS')}</Text>
            <Text selectable={true} style={styles.outputAddress}>
              {' '}
              {this.props.address}{' '}
            </Text>
          </View>
        </ScrollView>
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
    borderColor: BosonColors.$bosonLightGreen,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
  },
  textInputArea: {
    color: BosonColors.$bosonLightGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFastSafeSmart: {
    fontSize: 22,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    elevation: 0,
  },
  outputAddress: {
    borderBottomColor: BosonColors.$bosonLightGreen,
  },
  areaAddress: {
    marginTop: 20,
  },
});
