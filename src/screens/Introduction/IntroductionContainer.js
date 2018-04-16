import React, { Component } from 'react';
import { Text, View, StatusBar, StyleSheet, Image } from 'react-native';
import { Container } from 'native-base';
import SwiperContainer from 'app/src/screens/Swiper/SwiperContainer';
import { buildSwipers } from 'app/src/services/swiperServices';
import { Swiper } from 'app/src/components';
import { navigate } from 'app/src/config/routes';
import HOCContainer from '../HOCContainer';
import styles from './styles/IntroductionStyles';

class IntroductionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { swipers: [] };
  }
  componentWillMount() {
    StatusBar.setHidden(true);
    const swipers = buildSwipers(this.props.I18n);
    this.setState({
      swipers: [...this.state.swipers, ...swipers],
    });
  }

  skipTo = screen => navigate(screen);

  render() {
    const swiperList = this.state.swipers.map(item => (
      <Swiper I18n={this.props.I18n} key={item.uri} swiper={item} />
    ));
    return (
      <SwiperContainer I18n={this.props.I18n} skipTo={this.skipTo}>
        {swiperList}
      </SwiperContainer>
    );
  }
}

export default HOCContainer(IntroductionContainer);
