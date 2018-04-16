/* eslint-disable */
/*
  Some code in this component is deprecated
  do not use that code as an example,
  if you having time, refactor please.
*/
import React, { Component } from 'react';
import {
  Dimensions, // Detects screen dimensions
  Platform, // Detects platform running the app
  ScrollView, // Handles navigation between screens
  StyleSheet, // CSS-like styles
  View, // Container component
} from 'react-native';
import { Button, Text, Body, Left, Right, Icon } from 'native-base';
import styles from './styles/SwiperStyles';
const { width, height } = Dimensions.get('window');

class SwiperContainer extends Component {
  // Props for ScrollView component
  static defaultProps = {
    // Arrange screens horizontally
    horizontal: true,
    // Scroll exactly to the next screen, instead of continous scrolling
    pagingEnabled: true,
    // Hide all scroll indicators
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    // Do not bounce when the end is reached
    bounces: false,
    // Do not scroll to top when the status bar is tapped
    scrollsToTop: false,
    // Remove offscreen child views
    removeClippedSubviews: true,
    // Do not adjust content behind nav-, tab- or toolbars automatically
    automaticallyAdjustContentInsets: false,
    // Fisrt is screen is active
    index: 0,
  };

  state = this.initState(this.props);

  /**
   * Initialize the state
   */
  initState(props) {
    // Get the total number of slides passed as children
    const total = props.children ? props.children.length || 1 : 0,
      // Current index
      index = total > 1 ? Math.min(props.index, total - 1) : 0,
      // Current offset
      offset = width * index;

    const state = {
      total,
      index,
      offset,
      width,
      height,
    };

    // Component internals as a class property,
    // and not state to avoid component re-renders when updated
    this.internals = {
      isScrolling: false,
      offset,
    };

    return state;
  }

  /**
   * Scroll begin handler
   * @param {object} e native event
   */
  onScrollBegin = e => {
    // Update internal isScrolling state
    this.internals.isScrolling = true;
  };

  /**
   * Scroll end handler
   * @param {object} e native event
   */
  onScrollEnd = e => {
    // Update internal isScrolling state
    this.internals.isScrolling = false;

    // Update index
    this.updateIndex(
      e.nativeEvent.contentOffset
        ? e.nativeEvent.contentOffset.x
        : // When scrolled with .scrollTo() on Android there is no contentOffset
          e.nativeEvent.position * this.state.width
    );
  };

  /*
     * Drag end handler
     * @param {object} e native event
     */
  onScrollEndDrag = e => {
    const { contentOffset: { x: newOffset } } = e.nativeEvent,
      { children } = this.props,
      { index } = this.state,
      { offset } = this.internals;

    // Update internal isScrolling state
    // if swiped right on the last slide
    // or left on the first one
    if (
      offset === newOffset &&
      (index === 0 || index === children.length - 1)
    ) {
      this.internals.isScrolling = false;
    }
  };

  /**
   * Update index after scroll
   * @param {object} offset content offset
   */
  updateIndex = offset => {
    const state = this.state,
      diff = offset - this.internals.offset,
      step = state.width;
    let index = state.index;

    // Do nothing if offset didn't change
    if (!diff) {
      return;
    }

    // Make sure index is always an integer
    index = parseInt(index + Math.round(diff / step), 10);

    // Update internal offset
    this.internals.offset = offset;
    // Update index in the state
    this.setState({
      index,
    });
  };

  /**
   * Swipe one slide forward
   */
  swipe = endSwipeGoToScreen => {
    // end of slide, go to screen = endSwipeGoTo
    if (this.state.index >= this.props.children.length - 1) {
      this.props.skipTo(endSwipeGoToScreen);
    }
    // Ignore if already scrolling or if there is less than 2 slides
    if (this.internals.isScrolling || this.state.total < 2) {
      return;
    }

    const state = this.state,
      diff = this.state.index + 1,
      x = diff * state.width,
      y = 0;

    // Call scrollTo on scrollView component to perform the swipe
    this.scrollView && this.scrollView.scrollTo({ x, y, animated: true });

    // Update internal scroll state
    this.internals.isScrolling = true;

    // Trigger onScrollEnd manually on android
    if (Platform.OS === 'android') {
      setImmediate(() => {
        this.onScrollEnd({
          nativeEvent: {
            position: diff,
          },
        });
      });
    }
  };

  /**
   * Render ScrollView component
   * @param {array} slides to swipe through
   */
  renderScrollView = pages => (
    <ScrollView
      ref={component => {
        this.scrollView = component;
      }}
      {...this.props}
      contentContainerStyle={{ flexGrow: 1 }}
      onScrollBeginDrag={this.onScrollBegin}
      onMomentumScrollEnd={this.onScrollEnd}
      onScrollEndDrag={this.onScrollEndDrag}>
      {pages.map((page, i) => (
        // Render each slide inside a View
        <View style={[styles.fullScreen, styles.slide]} key={i}>
          {page}
        </View>
      ))}
    </ScrollView>
  );

  /**
   * Render pagination indicators
   */
  renderPagination = () => {
    if (this.state.total <= 1) {
      return null;
    }

    const ActiveDot = <View style={[styles.dot, styles.activeDot]} />,
      Dot = <View style={styles.dot} />;

    const dots = [];

    for (let key = 0; key < this.state.total; key++) {
      dots.push(
        key === this.state.index
          ? // Active dot
            React.cloneElement(ActiveDot, { key })
          : // Other dots
            React.cloneElement(Dot, { key })
      );
    }

    return (
      <View pointerEvents="none" style={[styles.pagination, styles.fullScreen]}>
        {dots}
      </View>
    );
  };

  renderLine = () => <View style={[styles.separator]} />;

  render = ({ children } = this.props) => (
    <View style={[styles.container, styles.fullScreen]}>
      {this.renderScrollView(children)}
      <View style={{ flexDirection: 'column' }}>
        {this.renderLine()}
        <View style={styles.buttonsContainer}>
          {this.renderPagination()}
          <Left>
            <Button
              transparent
              light
              rounded
              onPress={() => this.props.skipTo('SigninContainer')}>
              <Text>{this.props.I18n.t('SKIP')}</Text>
            </Button>
          </Left>
          <Right>
            <Button
              transparent
              light
              rounded
              onPress={() => this.swipe('SigninContainer')}>
              <Icon name="ios-arrow-forward" />
            </Button>
          </Right>
        </View>
      </View>
    </View>
  );
}

export default SwiperContainer;
