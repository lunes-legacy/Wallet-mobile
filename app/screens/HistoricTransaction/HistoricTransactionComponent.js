/* eslint-disable */
import React from 'react';
import { coins } from 'lunes-lib';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Linking,
} from 'react-native';
import moment from 'moment';
import _ from 'lodash';
import { Container, Spinner, Text } from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import I18N from '../../i18n/i18n';
import bosonColor from '../../native-base-theme/variables/bosonColor';
import LunesTabCoins from '../../native-base-theme/components/LunesTabCoins';

// CONVERT DECIMALS
import { MoneyClass } from '../../utils/moneyConvert';
import { numeral } from '../../utils/numeral';

const money = new MoneyClass();

const { width, height } = Dimensions.get('window');
const widthSpacePadding = width - 40;

export default class HistoricTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { user, balance, currentCoinSelected, getHistoric } = this.props;
    getHistoric(user, balance, currentCoinSelected);
  }

  renderSubItems(items) {
    return items.map((item, index) => (
      <View key={index} style={styles.subAreaTransactions}>
        <View style={styles.itemTransaction}>
          {item.type === 'RECEIVED' ? (
            <MaterialIcons
              name="arrow-upward"
              size={15}
              color={bosonColor.$bosonLightGreen}
              style={{ marginRight: 7 }}
            />
          ) : (
            <MaterialIcons
              name="arrow-downward"
              size={15}
              color={bosonColor.$bosonLightRed}
              style={{ marginRight: 7 }}
            />
          )}

          <Text style={styles.textFooterTransaction}>
            {numeral(money.conevertCoin('btc', item.nativeAmount)).format(
              '0,0.00000000'
            )}
          </Text>

          <Text
            style={styles.textFooterTransaction}
            numberOfLines={1}
            onPress={() => {
              Linking.openURL(`https://blockexplorer.lunes.io/tx/${item.txid}`);
            }}>
            {item.txid}
          </Text>
        </View>
      </View>
    ));
  }

  renderItems() {
    const grouped = _.groupBy(this.props.history, result => {
      return moment(result.date).format(I18N.t('FORMAT_DATE'));
    });
    return Object.keys(grouped).map((item, index) => (
      <View key={index} style={styles.containerItemTransaction}>
        <View style={styles.roundedAreaTransactions}>
          <Text style={styles.headTextGroup}>
            {item} - {I18N.t('TRANSACTION')}(s): {grouped[item].length}
          </Text>
        </View>
        {this.renderSubItems(grouped[item])}
      </View>
    ));
  }

  getCurrentCoinName() {
    if (this.props.currentCoinSelected === 'LNS') {
      return 'LUNES';
    }
    return this.props.currentCoinSelected;
  }

  renderSpinner() {
    if (this.props.loading) {
      return <Spinner />;
    } else if (this.props.history.length === 0) {
      return (
        <View style={styles.emptyTransactions}>
          <FontAwesomeIcon name={'list-alt'} size={40} color={'#fff'} />
          <Text style={{ marginTop: 20 }}>{I18N.t('EMPTY_TRANSACTION')}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
            <LunesTabCoins
              ticker={this.props.ticker}
              doAction={tabCoin => {
                const { user, balance, doAction } = this.props;
                doAction(user, balance, tabCoin.name);
              }}
            />
          </View>

          <Text style={styles.titleTransaction}>
            {I18N.t('YOUR_TRANSACTION_HISTORIC')} - {this.getCurrentCoinName()}
          </Text>

          <ScrollView style={styles.containerScroll}>
            {this.renderSpinner()}
            {this.renderItems()}
          </ScrollView>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerScroll: {
    width: widthSpacePadding,
    height: height - 20,
  },
  containerItemTransaction: {
    marginBottom: 20,
  },
  roundedAreaTransactions: {
    borderRadius: 15,
    backgroundColor: bosonColor.$bosonDarkPurple,
    padding: 8,
    paddingLeft: 15,
  },
  headTextGroup: {
    fontSize: 12,
    opacity: 0.6,
  },
  emptyTransactions: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  titleTransaction: {
    fontSize: 18,
    color: bosonColor.$bosonLightGreen,
    marginTop: 10,
    marginBottom: 10,
  },
  subAreaTransactions: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  itemTransaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemValueTransaction: {
    fontSize: 18,
  },
  textFooterTransaction: {
    flex: 1,
    fontSize: 12,
  },
  footerLine: {
    width: widthSpacePadding,
    height: 2,
  },
  footerLineReceived: {
    backgroundColor: bosonColor.$bosonLightGreen,
  },
  footerLinePending: {
    backgroundColor: bosonColor.$bosonLightRed,
  },
});
