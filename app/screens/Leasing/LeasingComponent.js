import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';

import { Container, Spinner, Text, Button } from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import I18N from '../../i18n/i18n';
import bosonColor from '../../native-base-theme/variables/bosonColor';
import { navigate } from '../../config/routes';

// CONVERT DECIMALS
import { MoneyClass } from '../../utils/moneyConvert';
import { numeral } from '../../utils/numeral';

const money = new MoneyClass();

const { width, height } = Dimensions.get('window');
const widthSpacePadding = width - 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: widthSpacePadding,
    padding: 8,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: bosonColor.$bosonDarkPurple,
  },
  footer: {
    width: widthSpacePadding,
    paddingTop: 16,
  },
  boxLeasing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  containerScroll: {
    width: widthSpacePadding,
    height: height - 20,
  },
  emptyTransactions: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  lunesAmount: {
    color: bosonColor.$bosonLightGreen,
    fontWeight: 'bold',
  },
  btCancel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class Leasing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  normalizeStatus = status => {
    if (status === 'active') {
      return true;
    }
    return false;
  };

  buttonCancel = (status, id, type) => {
    if (type === 8) {
      if (status) {
        return (
          // icon cancel
          <TouchableOpacity
            onPress={() => alert('cancelar')}
            style={styles.btCancel}>
            <View>
              <FontAwesomeIcon name={'cogs'} size={28} color={'#fff'} />
            </View>
          </TouchableOpacity>
        );
      }

      return (
        // icon canceled
        <TouchableOpacity style={styles.btCancel}>
          <View>
            <FontAwesomeIcon name={'ban'} size={28} color={'#fff'} />
          </View>
        </TouchableOpacity>
      );
    }
    return null;
  };

  formatStyleLunes = val => {
    return numeral(money.conevertCoin('btc', val)).format('0,0.00000000');
  };

  renderList = () => {
    return this.props.list.map((obj, index) => {
      const nativeAmount = this.formatStyleLunes(obj.nativeAmount);
      const status = this.normalizeStatus(obj.otherParams.status);

      return (
        <View
          style={[styles.boxLeasing, !status ? { opacity: 0.2 } : {}]}
          key={index}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ color: '#fff', fontSize: 10 }}>
              {new Date(obj.date).toLocaleDateString()}
            </Text>
            <Text
              style={{ color: '#fff', fontSize: 12 }}
              onPress={() => {
                Linking.openURL(
                  `https://blockexplorer.lunes.io/tx/${obj.txid}`
                );
              }}>
              {obj.txid}
            </Text>
            <Text style={styles.lunesAmount}>{nativeAmount} LUNES</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            {this.buttonCancel(status, obj.txid, obj.otherParams.type)}
          </View>
        </View>
      );
    });
  };

  renderSpinner = () => {
    if (this.props.loading) {
      return <Spinner />;
    } else if (this.props.list.length === 0) {
      return (
        <View style={styles.emptyTransactions}>
          <FontAwesomeIcon name={'list-alt'} size={40} color={'#fff'} />
          <Text style={{ marginTop: 20 }}>{I18N.t('EMPTY_TRANSACTION')}</Text>
        </View>
      );
    }
    return null;
  };

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 10 }}>
                {I18N.t('LEASING_TITLE_AVAILABLE')}
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  color: bosonColor.$bosonLightGreen,
                }}>
                {this.formatStyleLunes(this.props.balanceData)}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{ fontSize: 10, opacity: 0.5 }}>
                  {I18N.t('LEASING_TITLE_LEASING')}
                </Text>
                <Text>{this.formatStyleLunes(this.props.resume.leasing)}</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 10, opacity: 0.5 }}>
                  {I18N.t('LEASING_TITLE_TOTAL')}
                </Text>
                <Text>{this.formatStyleLunes(this.props.resume.total)}</Text>
              </View>
            </View>
          </View>

          <ScrollView style={styles.containerScroll}>
            {this.renderSpinner()}
            {this.renderList()}
          </ScrollView>

          <View style={styles.footer}>
            <Button
              rounded
              block
              success
              onPress={() => navigate('LeasingStart')}>
              <Text>{I18N.t('LEASING_BT_START')}</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}
