// @flow

import React from 'react';
import { Platform, View, StyleSheet, TextInput, Image } from 'react-native';
import { Container, Item, Input, Button, Text, Picker } from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import commonColor from './../variables/commonColor';
import BosonColors from './../variables/bosonColor';
import I18n from '../../i18n/i18n';

export default class LunesPickerCountry extends React.Component {
  constructor(props) {
    super(props);
    const countries = [
      {
        label: 'BRL',
        code: 'BR',
        value: '+55',
        flag:
          'https://res.cloudinary.com/luneswallet/image/upload/v1516117025/brazil_kxeh78.png',
      },
      {
        label: 'USD',
        code: 'US',
        value: '+1',
        flag:
          'https://res.cloudinary.com/luneswallet/image/upload/v1516117030/united-states_vhn7rj.png',
      },
    ];
    this.state = {
      countries: countries,
      countrySelected:
        I18n.t('CURRENCY_USER') === 'BRL' ? countries[0] : countries[1],
    };
  }

  onValueChange(value) {
    if (this.props.selectable === false) {
      return;
    }
    const countryFiltered = this.state.countries.filter(country => {
      return country.value === value;
    });
    this.setState({
      countrySelected: countryFiltered[0],
    });
  }

  renderCountries() {
    return this.state.countries.map(country => {
      return (
        <Picker.Item
          label={country.label}
          value={country.value}
          key={country.code}
        />
      );
    });
  }

  renderFlag() {
    return (
      <Image
        style={{ height: 32, width: 32 }}
        source={{
          uri: this.state.countrySelected.flag,
        }}
      />
    );
  }

  render() {
    const Item = Picker.Item;
    return (
      <View style={styles.container}>
        {this.renderFlag()}
        <Picker
          style={styles.picker}
          iosHeader={I18n.t('selectCode')}
          mode="dropdown"
          selectedValue={this.state.countrySelected.value}
          onValueChange={this.onValueChange.bind(this)}>
          {this.renderCountries()}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingRight: 10,
  },
  picker: {
    width: Platform.OS === 'ios' ? undefined : 80,
    color: '#fff',
  },
});
