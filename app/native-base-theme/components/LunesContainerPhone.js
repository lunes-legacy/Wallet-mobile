/* eslint-disable */
// @flow

import React from 'react';
import { Platform, View, StyleSheet, TextInput } from 'react-native';
import { Container, Item, Input, Button, Text, Picker } from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import commonColor from './../variables/commonColor';
import BosonColors from './../variables/bosonColor';
import LunesInputPhone from './LunesInputPhone';

export default class LunesContainerPhone extends React.Component {
  constructor(props) {
    super(props);
    const countries = [
      { label: 'BR (+55)', code: 'BR', value: '+55' },
      { label: 'US (+1)', code: 'US', value: '+1' },
    ];
    this.state = {
      countries,
      countrySelected: countries[0],
    };
  }

  onValueChange(value) {
    this.props.changePrefixCountry(value);
    this.setState({
      countrySelected: value,
    });
  }

  renderCountries() {
    return this.state.countries.map(country => (
      <Picker.Item
        label={country.label}
        value={country.value}
        key={country.code}
      />
    ));
  }

  render() {
    const Item = Picker.Item;

    return (
      <View style={styles.container}>
        <View style={styles.viewIconPhone}>
          <FontAwesomeIcon
            name="phone"
            size={20}
            color={BosonColors.$bosonGreen}
          />
        </View>

        <View style={styles.viewCodeCountry}>
          <Picker
            style={styles.picker}
            iosHeader="Selecionar código"
            mode="dropdown"
            selectedValue={this.state.countrySelected}
            onValueChange={this.onValueChange.bind(this)}>
            {this.renderCountries()}
          </Picker>
        </View>

        <View style={styles.viewInput}>
          <LunesInputPhone
            styles={styles.inputDDD}
            maxLength={2}
            placeholder="XX"
            onChangeText={code => {
              this.props.changeCodePhone(code);
            }}
          />
          <LunesInputPhone
            styles={styles.inputPhone}
            maxLength={9}
            placeholder="000000000"
            onChangeText={phone => {
              this.props.changePhone(phone);
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', paddingTop: 10 },
  logo: {
    fontSize: commonColor.sizeLogo,
    textAlign: 'center',
    margin: 10,
    color: BosonColors.$bosonWhite,
    fontFamily: commonColor.fontLogo,
  },
  textGreen: {
    color: BosonColors.$bosonGreen,
  },
  picker: {
    width: Platform.OS === 'ios' ? undefined : 110,
    color: '#fff',
  },
  viewIconPhone: { paddingTop: 15, paddingRight: 10 },
  viewCodeCountry: { paddingTop: 0, paddingRight: 5 },
  viewInput: { flexDirection: 'row', paddingTop: 5 },
  inputDDD: {
    width: 50,
  },
  inputPhone: {
    width: 100,
  },
});
