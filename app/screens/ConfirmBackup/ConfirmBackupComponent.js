/* eslint-disable */
import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  ListView,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';
import Button from './Button';
import BosonColors from '../../native-base-theme/variables/bosonColor';
import { Container } from 'native-base';
import { navigate } from '../../config/routes';
import I18N from '../../i18n/i18n';
import Swiper from './SwiperContainer';

export default class ConfirmBackup extends Component {
  state = {
    words: [],
    correctWords: false,
  };

  componentWillMount() {
    StatusBar.setHidden(true);
  }

  wordsToObj() {
    return this.props.seedText.split(' ');
  }

  renderWords() {
    let words = this.wordsToObj();
    words.push('');
    words.unshift(''); // To confirm words page work
    return (
      <Swiper style={styles.container}>
        {words.map((word, index) => (
          <View key={word} style={styles.slide}>
            {index === 0 && (
              <View style={styles.backupMessage}>
                <Text style={styles.header}>{I18N.t('REMEMBER')}</Text>
                <Text style={styles.defaultText}>
                  {I18N.t('SEED_BACKUP_MSG')}
                </Text>
              </View>
            )}

            {index < words.length - 1 &&
              index !== 0 && (
                <View style={styles.backupMessage}>
                  <Text style={styles.header}>
                    {I18N.t('YOUR_WORDS')} {index}
                  </Text>
                  <Text style={styles.individualWord}>{word}</Text>
                </View>
              )}

            {index === words.length - 1 && (
              <View>
                <View style={styles.backupMessage}>
                  {this.renderWordStatus()}
                </View>
                <View style={styles.confirmButton}>
                  {this.renderConfirmButton()}
                </View>
              </View>
            )}
          </View>
        ))}
      </Swiper>
    );
  }

  renderWordStatus() {
    let words = this.wordsToObj();
    return (
      <View style={styles.verifyWords}>
        <Text style={styles.header}>{I18N.t('CONFIRM_BACKUP_HEADER')}</Text>

        <TextInput
          multiline={true}
          numberOfLines={2}
          placeholder={I18N.t('YOUR_WORDS_PLACEHOLDER')}
          placeholderTextColor="rgba(255,255,255,0.2)"
          style={styles.inputText}
          onChangeText={inputWords => {
            this.verifyWords(inputWords);
          }}
        />

        <Text style={styles.wordsLimit}>
          {Object.keys(this.state.words).length + '/' + words.length}
        </Text>

        {Object.keys(this.state.words).map(i => {
          return (
            <Text key={i} style={styles[this.state.words[i].status]}>
              {this.state.words[i].word}
            </Text>
          );
        })}
      </View>
    );
  }

  verifyWords(input) {
    let inputWords = input.split(' ');
    let words = this.wordsToObj();

    if (inputWords.length <= 12) {
      inputWords.map((word, i) => {
        if (word === '') {
          delete this.state.words[i];
          this.setState(() => {
            return {
              words: this.state.words,
            };
          });
        } else if (word !== words[i]) {
          this.setState(prevState => {
            return {
              words: { ...prevState.words, [i]: { word, status: 'wrongWord' } },
            };
          });
        } else if (word === words[i]) {
          this.setState(prevState => ({
            words: { ...prevState.words, [i]: { word, status: 'correctWord' } },
          }));
        }
      });
    }

    return null;
  }

  renderConfirmButton() {
    let words = this.state.words;
    this.state.correctWords = true;

    Object.keys(words).map(i => {
      if (words[i].status === 'wrongWord') {
        this.state.correctWords = false;
      }
    });

    if (
      Object.keys(this.state.words).length === 12 &&
      this.state.correctWords
    ) {
      return (
        <Button
          style={{ width: 250 }}
          text={I18N.t('CONFIRM_WORDS')}
          onPress={() => navigate('Main')}
        />
      );
    }
  }

  render() {
    return <Container>{this.renderWords()}</Container>;
  }
}

const styles = StyleSheet.create({
  // Slide styles
  containe: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    paddingTop: 5,
    backgroundColor: '#4b2c82',
  },

  backupMessage: {
    flex: 2,
    justifyContent: 'center', // Center vertically
  },

  // Header styles
  header: {
    fontFamily: 'Offside-Regular',
    fontSize: 24,
    fontWeight: '400',
    color: BosonColors.$bosonGreen,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  // Text below header
  defaultText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    marginHorizontal: 25,
    textAlign: 'center',
  },

  individualWord: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
    marginHorizontal: 25,
    textAlign: 'center',
  },

  inputText: {
    color: '#FFFFFF',
    fontSize: 20,
    width: 300,
    borderBottomColor: BosonColors.$bosonGreen,
  },

  verifyWords: {
    flex: 2,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    paddingTop: 5,
  },

  // Check words
  wordsLimit: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    marginHorizontal: 25,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
  },

  wrongWord: {
    color: BosonColors.$bosonMediumRed,
    textAlign: 'center',
  },
  correctWord: {
    color: BosonColors.$bosonGreen,
    textAlign: 'center',
  },

  confirmButton: {
    alignItems: 'center',
  },
});
