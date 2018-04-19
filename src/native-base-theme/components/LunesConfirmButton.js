/* eslint-disable */
import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconIon from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import commonColor from './../variables/commonColor';
import BosonColors from './../variables/bosonColor';
import { navigate } from '../../config/routes';

export default class LunesConfirmButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onPress() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  redirect(routeName) {
    navigate(routeName);
  }

  renderOpenedButton() {
    if (this.state.isOpen) {
      const SIZE_ICON = 15;
      return (
        <View style={styles.container}>
          <LinearGradient colors={['green', 'red']} style={styles.linearGradient}>
            <Text style={styles.buttonText}>Sign in with Facebook</Text>
          </LinearGradient>

          <View
            style={[styles.openedCircle, { flexDirection: 'row', justifyContent: 'space-between' }]}
          >
            <TouchableOpacity onPress={() => this.redirect('SendPayment')}>
              <View style={styles.iconButtonOpened}>
                <MaterialIcons
                  name="arrow-upward"
                  size={SIZE_ICON}
                  color={BosonColors.$bosonWhite}
                />
                <Text style={styles.textItemIcons}>SIM</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.redirect('SellCoins')}>
              <View style={[styles.iconButtonOpened, { paddingRight: 10 }]}>
                <Icon name="line-chart" size={SIZE_ICON} color={BosonColors.$bosonWhite} />
                <Text style={styles.textItemIcons}>NÂO</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableHighlight style={styles.centralizedBtn} onPress={() => this.onPress()}>
            <View>
              <Text style={styles.text}>
                <IconIon name="md-close" size={30} color={BosonColors.$bosonWhite} />
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
    return null;
  }

  renderClosedButton() {
    if (!this.state.isOpen) {
      return (
        <TouchableHighlight onPress={() => this.onPress()} style={styles.roundedPrimary}>
          <View>
            <Text style={styles.text}>
              <Entypo name="plus" size={30} color={BosonColors.$bosonWhite} />
            </Text>
          </View>
        </TouchableHighlight>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={{ height: 100, position: 'relative', alignItems: 'center' }}>
        {this.renderOpenedButton()}
        {this.renderClosedButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 60,
    justifyContent: 'center',
    alignItems: 'center',
    height: 90
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
    paddingRight: 10
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
    elevation: 15
  },
  iconButtonOpened: {
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  roundedPrimary: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: BosonColors.$bosonLightGreen,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    elevation: 10
  },
  textRounded: {
    color: BosonColors.$bosonWhite,
    fontSize: 30
  },
  textItemIcons: {
    fontSize: 12,
    color: BosonColors.$bosonWhite
  },
  text: {
    color: BosonColors.$bosonWhite,
    fontSize: 20
  }
});
