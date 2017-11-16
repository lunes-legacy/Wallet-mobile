// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import {
  LogoSmall,
  Base,
  Tabs,
  TabLink,
  TabContent,
  LoginForm,
} from '../../components';
import styles from './styles';

class Signin extends React.Component {
  render() {
    let isTab1 = (this.props.tabSelected === 'tab1') ? true : false;
    let isTab2 = (this.props.tabSelected === 'tab2') ? true : false;
    return (
      <Base style={styles.container}>
        <LogoSmall />
        <Tabs>
          <View style={{ flexDirection: 'row' }}>
            <TabLink tabId="tab1" title="SIGNIN" isSelected={isTab1} />
            <TabLink tabId="tab2" title="SIGNUP" isSelected={isTab2} />
          </View>
          <View>
            <TabContent for="tab1" isVisible={isTab1}>
              <View style={styles.formContainer}>
                <LoginForm />
              </View>
            </TabContent>
            <TabContent for="tab2" isVisible={isTab2}>
              <View style={styles.formContainer}>
                <LoginForm />
              </View>
            </TabContent>
          </View>
        </Tabs>
      </Base>
    );
  }
}

const mapStateToprops = (state, ownProps) => {
  return {
    tabSelected: state.tabsReducer.tabSelected,
  };
};

export default connect(mapStateToprops)(Signin);
