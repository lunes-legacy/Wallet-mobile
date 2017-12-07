import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Logo, Base, Button } from '../../components';

class LunesMarket extends Component {
  render() {
    return (
      <View style={{ padding: 50 }}>
        <Text>Lunes Market</Text>
        <Button text="X" type="rounded-opened" />
      </View>
    );
  }
}

export default LunesMarket;
