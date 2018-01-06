// @flow

import React from 'react';
import { View, TouchableOpacity, TouchableHighlight, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import ModalDropdown from 'react-native-modal-dropdown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppStyle } from './theme';
import LogoSmall from './LogoSmall';
import MenuButton from './styles/MenuButton';
import BosonColors from '../native-base-theme/variables/bosonColor';
import { requestSignout } from '../screen/Signin/actions';

class Header extends React.Component {
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

  renderIconBack() {
    const { navigation, onPress } = this.props;
    return (
      <TouchableOpacity
        style={{ padding: MenuButton.back.padding }}
        onPress={() => navigation.goBack()}>
        <Text>
          <Icon name="chevron-left" size={20} color={MenuButton.back.color} />
        </Text>
      </TouchableOpacity>
    );
  }

  renderLogo() {
    return (
      <TouchableOpacity style={AppStyle.screen.headerLogo}>
        <Text style={{ color: '#fff' }}>Home</Text>
      </TouchableOpacity>
    );
  }

  renderDropdown() {
    const { navigation, onPress } = this.props;
    return (
      <ModalDropdown
        options={['Logout']}
        style={{ padding: MenuButton.back.padding }}
        dropdownStyle={{ height: 36, marginTop: 14 }}
        onSelect={this.props.requestSignout}>
        <Text>
          <Entypo
            name="dots-three-vertical"
            size={20}
            color={MenuButton.back.color}
          />
        </Text>
      </ModalDropdown>
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
        {/*this.renderIconBack()*/}
        {this.renderLogo()}
        {this.renderDropdown()}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestSignout }, dispatch);

export default connect(null, mapDispatchToProps)(Header);
