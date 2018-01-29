import React, { Component } from 'react';
import { Animated, Dimensions, ScrollView, View } from 'react-native';
import Behavior from 'react-native-behavior';

const { height, width } = Dimensions.get('window');

export default class LunesSwiper extends Component {
  componentWillMount() {
    this.props.children.forEach(({ props: { backgroundColor } }, i) => {
      this.indices.push(width * i);
      this.states.push({ backgroundColor });
    });
  }

  indices = [];
  states = [];

  render() {
    const animatedValue = new Animated.Value(0);
    const position = Animated.divide(animatedValue, width);

    const onScroll = Animated.event([
      { nativeEvent: { contentOffset: { x: animatedValue } } },
    ]);

    return (
      <View style={{ flex: 1 }}>
        <Behavior
          animatedValue={animatedValue}
          clamp
          indices={this.indices}
          states={this.states}
          style={{ height, position: 'absolute', width }}
        />
        <ScrollView
          bounces={this.props.bounces !== false}
          horizontal
          onScroll={onScroll}
          pagingEnabled
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}>
          {this.props.children.map((slide, i) => (
            <View key={`slide-${i}`} style={{ width }}>
              {slide}
            </View>
          ))}
        </ScrollView>
        {this.props.dots && (
          <View>
            {this.props.shadow && (
              <View
                style={[
                  styles.shadowContainer,
                  styles.shadow,
                  this.props.shadowStyle,
                ]}
              />
            )}
            <View
              style={[
                styles.dotContainer,
                { bottom: this.props.dotsBottom || 29 },
              ]}>
              {this.props.children.map((slide, i) => (
                <View
                  key={`swiper-dot-${i}`}
                  style={[
                    styles.dot,
                    this.props.dotStyle,
                    {
                      backgroundColor:
                        this.props.dotsColor || 'rgba(0, 0, 0, 0.25)',
                    },
                  ]}
                />
              ))}
            </View>
            <View
              style={[
                styles.dotContainer,
                { bottom: this.props.dotsBottom || 29 },
              ]}>
              {this.props.children.map((slide, i) => (
                <Animated.View
                  key={`swiper-dot-active-${i}`}
                  style={[
                    styles.dot,
                    this.props.dotStyleActive,
                    {
                      backgroundColor:
                        this.props.dotsColorActive || 'rgba(0, 0, 0, 0.75)',
                      opacity: Animated.add(position, 1 - i),
                    },
                  ]}
                />
              ))}
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = {
  dot: {
    borderRadius: 4,
    height: 8,
    marginLeft: 4,
    marginRight: 4,
    width: 8,
  },
  dotContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    width,
  },
  shadowContainer: {
    bottom: 0,
    height: 70,
    position: 'absolute',
    width,
  },
  shadow: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.125,
    shadowRadius: 8,
  },
};
