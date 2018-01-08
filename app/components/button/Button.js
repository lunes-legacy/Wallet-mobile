// @flow

import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconIon from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import buttonStyle from './style';
import BosonColors from '../../native-base-theme/variables/bosonColor';

export default class Button extends React.Component {
  defaultButton() {
    if (this.props.type === 'default') {
      return (
        <TouchableOpacity onPress={() => this.props.onPress()}>
          <View style={buttonStyle.default}>
            <Text style={buttonStyle.textDefault}> {this.props.text}</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  }

  disabledButton() {
    if (this.props.type === 'disabled') {
      return (
        <TouchableOpacity onPress={() => this.props.onPress()}>
          <View style={buttonStyle.disabled}>
            <Text style={buttonStyle.textDisabled}> {this.props.text}</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  }

  primaryButton() {
    if (this.props.type === 'primary') {
      return (
        <TouchableOpacity onPress={() => this.props.onPress()}>
          <View style={buttonStyle.primary}>
            <Text style={buttonStyle.textPrimary}> {this.props.text}</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  }

  roundedPrimaryButton() {
    if (this.props.type === 'rounded') {
      return (
        <TouchableHighlight
          onPress={() => this.props.onPress()}
          style={buttonStyle.roundedPrimary}>
          <View>
            <Text style={buttonStyle.textRounded}>{this.props.text}</Text>
          </View>
        </TouchableHighlight>
      );
    } else {
      return null;
    }
  }

  roundedButtonOpened() {
    const sizeIcon = 15;
    if (this.props.type === 'rounded-opened') {
      return (
        <TouchableHighlight
          onPress={() => this.props.onPress()}
          style={buttonStyle.roundedOpened}>
          <View style={{ flexDirection: 'row' }}>
            <View style={buttonStyle.itemButtonOpened}>
              <MaterialIcons name="arrow-upward" size={sizeIcon} color="#fff" />
              <Text style={buttonStyle.textItemOpened}>Enviar</Text>
            </View>

            <View style={buttonStyle.itemButtonOpened}>
              <MaterialIcons
                name="arrow-downward"
                size={sizeIcon}
                color="#fff"
              />
              <Text style={buttonStyle.textItemOpened}>Receber</Text>
            </View>

            <TouchableHighlight
              onPress={() => this.props.onPress()}
              style={buttonStyle.roundedAbsolutePosition}>
              <View>
                <Text style={buttonStyle.textRounded}>
                  <IconIon name="md-close" size={25} color="#fff" />
                </Text>
              </View>
            </TouchableHighlight>

            <View style={buttonStyle.itemButtonOpened}>
              <Icon name="money" size={sizeIcon} color="#fff" />
              <Text style={buttonStyle.textItemOpened}>Comprar</Text>
            </View>

            <View style={buttonStyle.itemButtonOpened}>
              <Icon reverse name="line-chart" size={sizeIcon} color="#fff" />
              <Text style={buttonStyle.textItemOpened}>Vender</Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    } else {
      return null;
    }
  }

  renderTest() {
    const SIZE_ICON = 15;
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.openedCircle,
            { flexDirection: 'row', justifyContent: 'space-between' },
          ]}>
          <TouchableOpacity onPress={() => alert('enviar')}>
            <View style={styles.iconButtonOpened}>
              <MaterialIcons
                name="arrow-upward"
                size={SIZE_ICON}
                color={BosonColors.$bosonWhite}
              />
              <Text style={styles.textItemIcons}>Enviar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert('receber')}>
            <View style={[styles.iconButtonOpened, { paddingLeft: 13 }]}>
              <MaterialIcons
                name="arrow-downward"
                size={SIZE_ICON}
                color={BosonColors.$bosonWhite}
              />
              <Text style={styles.textItemIcons}>Receber</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert('comprar')}>
            <View style={[styles.iconButtonOpened, { paddingLeft: 70 }]}>
              <Icon
                name="money"
                size={SIZE_ICON}
                color={BosonColors.$bosonWhite}
              />
              <Text style={styles.textItemIcons}>Comprar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert('vender')}>
            <View style={[styles.iconButtonOpened, { paddingRight: 10 }]}>
              <Icon
                name="line-chart"
                size={SIZE_ICON}
                color={BosonColors.$bosonWhite}
              />
              <Text style={styles.textItemIcons}>Vender</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.centralizedBtn}
          onPress={() => alert('close')}>
          <View>
            <Text style={styles.text}>
              <IconIon
                name="md-close"
                size={30}
                color={BosonColors.$bosonWhite}
              />
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.defaultButton()}
        {this.disabledButton()}
        {this.primaryButton()}
        {this.roundedPrimaryButton()}
        {/*this.roundedButtonOpened()*/}
        {this.renderTest()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width - 60,
  },
  openedCircle: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    width: '100%',
    height: 55,
    backgroundColor: BosonColors.$bosonLightGreen,
    borderRadius: 30,
    elevation: 3,
    paddingLeft: 10,
    paddingRight: 10,
  },
  centralizedBtn: {
    position: 'absolute',
    bottom: 5,
    left: Dimensions.get('window').width / 2 - 65,
    backgroundColor: BosonColors.$bosonLightGreen,
    height: 65,
    width: 65,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,
  },
  iconButtonOpened: {
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  textItemIcons: {
    fontSize: 12,
    color: BosonColors.$bosonWhite,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
  },
});
