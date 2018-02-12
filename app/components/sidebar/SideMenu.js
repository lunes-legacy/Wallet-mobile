/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import styles from '../styles/SideMenu';
import { ScrollView, View } from 'react-native';

import SideMenuItem from './SideMenuItem';
import SideMenuFooter from './SideMenuFooterContainer';
import SideMenuAvatar from './SideMenuAvatarContainer';
import I18N from '../../i18n/i18n';

class SideMenu extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <SideMenuAvatar navigation={navigation} />
          </View>
          <View>
            <SideMenuItem
              screen={'LunesMarket'}
              menuOption={I18N.t('MENU_WALLETS')}
              navigation={navigation}
              space={38}
            />
          </View>
          <View>
            <SideMenuItem
              screen={'HistoricTransaction'}
              menuOption={I18N.t('HISTORIC_TRANSACTION')}
              navigation={navigation}
              space={38}
            />
          </View>
          <View>
            <SideMenuItem
              screen={'Roadmap'}
              menuOption={I18N.t('ROADMAP')}
              navigation={navigation}
              space={38}
            />
          </View>
          <View>
            <SideMenuItem
              screen={'ValuesAlertSystem'}
              menuOption={I18N.t('MENU_ALERT_SYSTEMS')}
              navigation={navigation}
              disabled="true"
              space={14}
            />
          </View>
          <View>
            <SideMenuItem
              screen={'MultiCoinsSystem'}
              menuOption={I18N.t('MENU_MULTI_COINS')}
              navigation={navigation}
              disabled="true"
              space={24}
            />
          </View>
          <View>
            <SideMenuItem
              screen={'CardManager'}
              menuOption={I18N.t('MENU_PREPAID_CARDS')}
              navigation={navigation}
              disabled="true"
              space={17}
            />
          </View>
          <View>
            <SideMenuItem
              screen={'BoletoPayments'}
              menuOption={I18N.t('MENU_INVOICES_PAYMENT')}
              navigation={navigation}
              disabled="true"
              space={24}
            />
          </View>
          <View>
            <SideMenuItem
              screen={'PhoneRecharges'}
              menuOption={I18N.t('MENU_MOBILE_PHONE_TOPUP')}
              navigation={navigation}
              disabled="true"
              space={29}
            />
          </View>
          <View>
            <SideMenuItem
              screen={'InviteFriends'}
              menuOption={I18N.t('MENU_INVITE_FRIENDS')}
              navigation={navigation}
              disabled="true"
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
