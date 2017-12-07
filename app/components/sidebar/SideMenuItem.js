import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
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
          <Icon name="chevron-down" size={15} color="#fff" />
          {`      ${menuOption}`}
        </Text>
        <View style={styles.divider} />
      </View>
    );
  }
}

SideMenuItem.propTypes = {
  navigation: PropTypes.object,
  screen: PropTypes.string,
  menuOption: PropTypes.string,
};
