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
    words.push(''); // To confirm words page work
    return (
      <Swiper>
        {words.map((word, index) => (
          <View
            key={word}
            style={[styles.slide2, { backgroundColor: '#4b2c82' }]}>
            {index < words.length - 1 ? (
              <Text style={styles.header}>
                {I18N.t('YOUR_WORDS')} {index + 1}
              </Text>
            ) : (
              <Text style={styles.header}>
                {I18N.t('CONFIRM_BACKUP_HEADER')}
              </Text>
            )}

            {index < words.length - 1 ? (
              <Text style={styles.word}>{word}</Text>
            ) : (
              <TextInput
                multiline={true}
                numberOfLines={2}
                style={styles.inputText}
                onChangeText={inputWords => {
                  this.verifyWords(inputWords);
                }}
              />
            )}

            {index === words.length - 1 ? (
              <View>
                {this.renderWordStatus()}
                {this.renderConfirmButton()}
              </View>
            ) : null}
          </View>
        ))}
      </Swiper>
    );
  }

  verifyWords(input) {
    let inputWords = input.split(' ');
    let words = this.wordsToObj();

    if (inputWords.length <= 12) {
      inputWords.map((word, i) => {
        if (word === '') {
          delete this.state.words[i];
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
  }

  renderWordStatus() {
    let words = this.wordsToObj();
    return (
      <View>
        <Text style={styles.wordsLimit}>
          {Object.keys(this.state.words).length + '/' + words.length}
        </Text>

        {Object.keys(this.state.words).map(i => (
          <Text key={i} style={styles[this.state.words[i].status]}>
            {this.state.words[i].word}
          </Text>
        ))}
      </View>
    );
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
  // Slide2 styles
  slide2: {
    flex: 2, // Take up all screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    paddingTop: 5,
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
    fontSize: 16,
    marginHorizontal: 25,
    textAlign: 'center',
  },
  word: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
    marginHorizontal: 25,
    textAlign: 'center',
  },
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
  inputText: {
    color: '#FFFFFF',
    fontSize: 20,
    width: '75%',
    borderBottomColor: BosonColors.$bosonGreen,
  },
  // Images
  introductionImages: {
    height: 270,
    width: 270,
    marginTop: 40,
    marginBottom: 40,
  },
});
