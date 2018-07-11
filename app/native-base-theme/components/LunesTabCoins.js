/* eslint-disable */
import React from 'react';
import { View, Text, Image, Animated, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { LunesTabCoinsConstant } from '../constants';
import BosonColors from '../variables/bosonColor';
import LunesTabCoinsPrice from './LunesTabCoinsPrice';
import LunesTabCoinsKPI from './LunesTabCoinsKPI';
import { navigate } from '../../config/routes';

export default class LunesTabCoin extends React.Component {
  constructor() {
    super();
    this.springValue = new Animated.Value(0.3);
  }

  componentDidMount() {
    this.spring();
  }

  spring() {
    this.springValue.setValue(0.3);
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1,
    }).start();
  }

  renderBorder(index) {
    const last = LunesTabCoinsConstant.length - 1 === index;
    if (!last) {
      return {
        borderRightWidth: 1,
        borderRightColor: '#775dc1',
      };
    }
    return {};
  }

  renderTabs() {
    const { ticker } = this.props;
    if (LunesTabCoinsConstant) {
      return LunesTabCoinsConstant.map((tabCoin, index) => {
        if (tabCoin.isActive) {
          const currentCoin = ticker[tabCoin.name];
          let price = tabCoin.price.displayPrice;
          let percent = tabCoin.price.displayPercent;
          if (currentCoin) {
            if (currentCoin.CHANGE24HOUR !== '-') {
              price = currentCoin.CHANGE24HOUR;
            }

            if (currentCoin.CHANGE24HOUR !== '-') {
              percent = currentCoin.CHANGE24HOURPCT;
            }

            tabCoin.price.status = currentCoin.CHANGE || '-';
          }

          tabCoin.price.percent = `${price} (${percent})`; // '0 (0%)'

          return (
            <View
              key={tabCoin.name}
              style={[
                { paddingLeft: 10, paddingRight: 10 },
                this.renderBorder(index),
              ]}>
              <TouchableOpacity
                onPress={() => {
                  if (
                    tabCoin.name === 'LTC' ||
                    tabCoin.name === 'ETH'
                  ) {
                    navigate('AlertMessages');
                  }

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
        }
        return null;
      });
    }
    return null;
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        {this.renderTabs()}
      </View>
    );
  }
}
