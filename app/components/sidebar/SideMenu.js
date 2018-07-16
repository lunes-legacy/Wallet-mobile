/* eslint-disable */
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
import SideMenuLogout from './SideMenuLogoutContainer';
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
              screen={'Leasing'}
              menuOption={I18N.t('LEASING_TITLE')}
              navigation={navigation}
              space={38}
            />
          </View>
          <View>
            <SideMenuItem
              screen={'ImportSeed'}
              menuOption={I18N.t('IMPORT_SEED')}
              navigation={navigation}
              space={38}
            />
          </View>
          <View>
            <SideMenuItem
              screen={'ConfirmBackup'}
              menuOption={I18N.t('MENU_BACKUP')}
              navigation={navigation}
              space={38}
            />
          </View>
          <View>
            <SideMenuLogout menuOption={I18N.t('LOGOUT')} space={38} />
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
