import React, { Component, Fragment } from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles/SwiperStyles';

class Swiper extends Component {
  render() {
    const BodyText = this.props.swiper.bodyText.map((text, index) => (
      <Text key={index} numberOfLines={5} style={styles.text}>
        {text}
      </Text>
    ));

    return (
      <View style={[styles.slide]}>
        <Image
          resizeMode={'contain'}
          style={styles.introductionImages}
          source={{ uri: this.props.swiper.uri }}
        />
        <Text style={styles.header}>{this.props.swiper.headerText}</Text>
        {BodyText}
      </View>
    );
  }
}

export default Swiper;
