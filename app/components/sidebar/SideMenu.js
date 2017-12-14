/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import styles from '../styles/SideMenu';
import { ScrollView, View } from 'react-native';

import SideMenuItem from './SideMenuItem';
import SideMenuFooter from './SideMenuFooter';
import SideMenuAvatar from './SideMenuAvatar';

class SideMenu extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <SideMenuAvatar
              navigation={navigation}
            />
          </View>
          <View>
            <SideMenuItem
              screen={'LunesMarket'}
              menuOption={'Mercado Lunes'}
              navigation={navigation}
              space={38}
            />
          </View>
          <View>
            <SideMenuItem
              screen={'ValuesAlertSystem'}
              menuOption={'Sistema de Alerta de Valores'}
              navigation={navigation}
              space={14}
            />
          </View>
          <View>
            <SideMenuItem
              screen={'MultiCoinsSystem'}
              menuOption={'Sistema de Multi-Coins'}
              navigation={navigation}
              space={24}
            />
          </View>
          <View>
            <SideMenuItem
              screen={'CardManager'}
              menuOption={'Gestão de Gasto de Cartão'}
              navigation={navigation}
              space={17}
            />
          </View>
          <View>
            <SideMenuItem
              screen={'BoletoPayments'}
              menuOption={'Pagamento de Boletos'}
              navigation={navigation}
              space={24}
            />
          </View>
          <View>
            <SideMenuItem
              screen={'PhoneRecharges'}
              menuOption={'Recargas de Celular'}
              navigation={navigation}
              space={29}
            />
          </View>
        </ScrollView>
        <View>
          <SideMenuFooter />
        </View>
      </View>
    );
  }
}

export default SideMenu;
