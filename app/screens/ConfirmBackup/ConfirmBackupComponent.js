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
import { Container } from 'native-base';
import I18N from '../../i18n/i18n';
import Swiper from './SwiperContainer';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import BosonColors from '../../native-base-theme/variables/bosonColor';

export default class ConfirmBackup extends Component {
  state = {
    words: [{}],
  };

  componentWillMount() {
    StatusBar.setHidden(true);
  }

  wordsToObj() {
    return this.props.words.split(' ');
  }

  renderWords() {
    let words = this.wordsToObj();
    words.push('');
    return (
      <Swiper>
        {words.map((word, index) => (
          <View
            key={word}
            style={[styles.slide2, { backgroundColor: '#4b2c82' }]}>
            {index !== 12 ? (
              <Text style={styles.header}>Word {index + 1}</Text>
            ) : (
              <Text style={styles.header}>Confirm the backup words:</Text>
            )}

            {index !== 12 ? (
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
            {index === 12 ? this.renderWrongWord() : null}
          </View>
        ))}
      </Swiper>
    );
  }

  verifyWords(input) {
    let inputWords = input.split(' ');
    let words = this.wordsToObj();

    inputWords.map((word, i) => {
      if (word === '') {
        this.setState(prevState => ({
          words: [...prevState.words, { [i]: '', status: '' }],
        }));
      } else if (word !== words[i]) {
        this.setState(prevState => {
          return {
            words: [...prevState.words, { [i]: word, status: 'wrong' }],
          };
        });
      } else if (word === words[i]) {
        this.setState(prevState => ({
          words: [...prevState.words, { [i]: word, status: 'correct' }],
        }));
      }
    });

    console.log(this.state.words);
  }

  renderWrongWord() {
    // return (
    //   <View>
    //   {
    //     Object.keys(this.state.words).map( i => (
    //       <Text key={i} style={styles.correctWord}>{this.state.words[i]}</Text>
    //     ))
    //   }
    // </View>
    // );
  }

  renderSpinner() {
    return <LunesLoading />;
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
    fontSize: 26,
    fontWeight: '400',
    color: BosonColors.$bosonGreen,
    marginTop: 5,
    marginBottom: 10,
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
    width: '60%',
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
