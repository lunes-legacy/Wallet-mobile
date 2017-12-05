import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import styles from '../styles/SideMenu';

export default class SideMenuItem extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    const { screen, menuOption } = this.props;
    return (
      <View>
        <Text
          style={styles.navItemStyle}
          onPress={this.navigateToScreen(screen)}>
          <FontAwesome>{Icons.chevronDown}</FontAwesome>
          {`      ${menuOption}`}
        </Text>
        <View
          style={styles.navItemStyle.divider}
        />
      </View>
    );
  }
}

SideMenuItem.propTypes = {
  navigation: PropTypes.object,
  screen: PropTypes.string,
  menuOption: PropTypes.string,
};
