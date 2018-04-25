/* eslint-disable */
// @flow

import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Text,
  Modal,
  StyleSheet,
} from 'react-native';
import { Button, Root } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppStyle } from './theme';
import MenuButton from './styles/MenuButton';
import BosonColors from '../native-base-theme/variables/bosonColor';
import { requestSignout } from 'lunesmobilewallet/app/screens/Signin/actions';
import { navigate } from '../config/routes';
import I18N from '../i18n/i18n';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }
  renderIconHamburguerMenu() {
    const { navigation, onPress } = this.props;
    return (
      <TouchableHighlight
        style={{ padding: MenuButton.padding }}
        onPress={onPress}>
        <Text>
          <Icon name="navicon" size={20} color="#fff" />
        </Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: BosonColors.$bosonPrimary,
        }}>
        {this.renderIconHamburguerMenu()}
        <TouchableWithoutFeedback
          onPress={() => this.setState({ modalVisible: false })}>
          <Modal
            transparent={true}
            visible={this.state.modalVisible}
            animationType={'fade'}
            onRequestClose={this.closeModal.bind(this)}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const mpStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestSignout }, dispatch);

export default connect(mpStateToProps, mapDispatchToProps)(Header);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  innerContainer: {
    width: 100,
    position: 'absolute',
    right: 5,
    top: 5,
  },
});
