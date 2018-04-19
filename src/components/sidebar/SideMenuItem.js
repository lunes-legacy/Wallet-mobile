/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from '../styles/SideMenu';
import BosonColors from '../../native-base-theme/variables/bosonColor';
import { navigate } from '../../config/routes';

const getSpace = space =>
  Array.from({ length: space }, () => ' ')
    .join()
    .replace(/,/g, '');

export default class SideMenuItem extends Component {
  navigateToScreen = route => () => {
    navigate(route);
  };

  renderMenuItem() {
    const { screen, menuOption, space, disabled } = this.props;
    if (disabled) {
      return (
        <Text style={styles.navItemStyle}>
          <Text
            style={{
              color: '#7c69bcff'
            }}
          >{`${menuOption}${getSpace(space)}`}</Text>
        </Text>
      );
    }
    return (
      <Text style={styles.navItemStyle} onPress={this.navigateToScreen(screen)}>
        <Text>{`${menuOption}${getSpace(space)}`}</Text>
      </Text>
    );
  }

  render() {
    return (
      <View>
        {this.renderMenuItem()}
        <View style={styles.divider} />
      </View>
    );
  }
}

SideMenuItem.propTypes = {
  navigation: PropTypes.object,
  screen: PropTypes.string,
  menuOption: PropTypes.string
};
