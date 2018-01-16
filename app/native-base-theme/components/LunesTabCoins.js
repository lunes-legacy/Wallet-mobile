import React from 'react';
import { View, Text, Image, Animated, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { LunesTabCoinsConstant } from '../constants';
import BosonColors from '../variables/bosonColor';
import LunesTabCoinsPrice from './LunesTabCoinsPrice';
import LunesTabCoinsKPI from './LunesTabCoinsKPI';

export default class LunesTabCoin extends React.Component {
  constructor() {
    super();
    this.springValue = new Animated.Value(0.3);
  }

  spring() {
    this.springValue.setValue(0.3);
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1,
    }).start();
  }

  renderBorder(index) {
    let last = LunesTabCoinsConstant.length - 1 === index;
    if (!last) {
      return {
        borderRightWidth: 1,
        borderRightColor: '#775dc1',
      };
    }
    return {};
  }

  renderTabs() {
    return LunesTabCoinsConstant.map((tabCoin, index) => {
      if (tabCoin.isActive) {
        return (
          <View
            key={tabCoin.name}
            style={[
              { paddingLeft: 10, paddingRight: 10 },
              this.renderBorder(index),
            ]}>
            <TouchableOpacity
              onPress={() => {
                if (this.props.doAction) {
                  this.props.doAction(tabCoin);
                }
              }}>
              <View>
                <LunesTabCoinsKPI kpi={tabCoin} />
              </View>
              <View>
                <LunesTabCoinsPrice tabCoinPrice={tabCoin} />
              </View>
            </TouchableOpacity>
          </View>
        );
      } else {
        return null;
      }
    });
  }
  render() {
    this.spring();
    return (
      <Animated.View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
          transform: [{ scale: this.springValue }],
        }}>
        {this.renderTabs()}
      </Animated.View>
    );
  }
}
