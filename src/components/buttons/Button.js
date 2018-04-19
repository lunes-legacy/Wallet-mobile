import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconIon from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import BosonColors from 'app/src/native-base-theme/variables/bosonColor';
import styles from './styles/ButtonStyles';

export default class Button extends Component {
  defaultButton() {
    if (this.props.type === 'default') {
      return (
        <TouchableOpacity onPress={() => this.props.onPress()}>
          <View style={styles.default}>
            <Text style={styles.textDefault}> {this.props.text}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return null;
  }

  disabledButton() {
    if (this.props.type === 'disabled') {
      return (
        <TouchableOpacity onPress={() => this.props.onPress()}>
          <View style={styles.disabled}>
            <Text style={styles.textDisabled}> {this.props.text}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return null;
  }

  primaryButton() {
    if (this.props.type === 'primary') {
      return (
        <TouchableOpacity onPress={() => this.props.onPress()}>
          <View style={styles.primary}>
            <Text style={styles.textPrimary}> {this.props.text}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return null;
  }

  roundedPrimaryButton() {
    if (this.props.type === 'rounded') {
      return (
        <TouchableHighlight onPress={() => this.props.onPress()} style={styles.roundedPrimary}>
          <View>
            <Text style={styles.textRounded}>{this.props.text}</Text>
          </View>
        </TouchableHighlight>
      );
    }
    return null;
  }

  roundedButtonOpened() {
    const sizeIcon = 15;
    if (this.props.type === 'rounded-opened') {
      return (
        <TouchableHighlight onPress={() => this.props.onPress()} style={styles.roundedOpened}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.itemButtonOpened}>
              <MaterialIcons name="arrow-upward" size={sizeIcon} color="#fff" />
              <Text style={styles.textItemOpened}>Enviar</Text>
            </View>

            <View style={styles.itemButtonOpened}>
              <MaterialIcons name="arrow-downward" size={sizeIcon} color="#fff" />
              <Text style={styles.textItemOpened}>Receber</Text>
            </View>

            <TouchableHighlight
              onPress={() => this.props.onPress()}
              style={styles.roundedAbsolutePosition}
            >
              <View>
                <Text style={styles.textRounded}>
                  <IconIon name="md-close" size={25} color="#fff" />
                </Text>
              </View>
            </TouchableHighlight>

            <View style={styles.itemButtonOpened}>
              <Icon name="money" size={sizeIcon} color="#fff" />
              <Text style={styles.textItemOpened}>Comprar</Text>
            </View>

            <View style={styles.itemButtonOpened}>
              <Icon reverse name="line-chart" size={sizeIcon} color="#fff" />
              <Text style={styles.textItemOpened}>Vender</Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    }
    return null;
  }

  renderTest() {
    const SIZE_ICON = 15;
    return (
      <View style={styles.container}>
        <View
          style={[styles.openedCircle, { flexDirection: 'row', justifyContent: 'space-between' }]}
        >
          <TouchableOpacity onPress={() => Alert.alert('enviar')}>
            <View style={styles.iconButtonOpened}>
              <MaterialIcons name="arrow-upward" size={SIZE_ICON} color={BosonColors.$bosonWhite} />
              <Text style={styles.textItemIcons}>Enviar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Alert.alert('receber')}>
            <View style={[styles.iconButtonOpened, { paddingLeft: 13 }]}>
              <MaterialIcons
                name="arrow-downward"
                size={SIZE_ICON}
                color={BosonColors.$bosonWhite}
              />
              <Text style={styles.textItemIcons}>Receber</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Alert.alert('comprar')}>
            <View style={[styles.iconButtonOpened, { paddingLeft: 70 }]}>
              <Icon name="money" size={SIZE_ICON} color={BosonColors.$bosonWhite} />
              <Text style={styles.textItemIcons}>Comprar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Alert.alert('vender')}>
            <View style={[styles.iconButtonOpened, { paddingRight: 10 }]}>
              <Icon name="line-chart" size={SIZE_ICON} color={BosonColors.$bosonWhite} />
              <Text style={styles.textItemIcons}>Vender</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.centralizedBtn} onPress={() => Alert.alert('close')}>
          <View>
            <Text style={styles.text}>
              <IconIon name="md-close" size={30} color={BosonColors.$bosonWhite} />
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
        {/* this.roundedButtonOpened() */}
        {this.renderTest()}
      </View>
    );
  }
}
