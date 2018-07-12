/* eslint-disable */
import React from 'react';
import { coins } from 'lunes-lib';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import _ from 'lodash';
import { Container, Item, Input, Spinner, Text } from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import I18N from '../../i18n/i18n';
import bosonColor from '../../native-base-theme/variables/bosonColor';

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
          <Text style={styles.textFooterTransaction}>
          {I18N.t('ID')} - {item.txid}
          </Text>
        </View>
        <View style={styles.itemTransaction}>
          <Text style={styles.textFooterTransaction}>
            {I18N.t('VALUE')} - {coins.util.unitConverter.toBitcoin(item.nativeAmount)}
          </Text>
        </View>
        {item.type === 'RECEIVED' ? (
          <View style={[styles.footerLine, styles.footerLineReceived]} />
        ) : (
          <View style={[styles.footerLine, styles.footerLinePending]} />
        )}
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
          <Text>{ item } - {I18N.t('TRANSACTION')}(s): { grouped[item].length }</Text>
        </View>
        { this.renderSubItems(grouped[item]) }
      </View>
    ));
  }

  getCurrentCoinName() {
    if (this.props.currentCoinSelected === 'LNS') {
      return 'lunes';
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
        <ScrollView style={styles.containerScroll}>
          <View style={styles.container}>
            <Text style={styles.titleTransaction}>
              {I18N.t('YOUR_TRANSACTION_HISTORIC')} - {this.getCurrentCoinName()}
            </Text>
            {this.renderSpinner()}
            {this.renderItems()}
          </View>
        </ScrollView>
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
    marginBottom: 30,
  },
  roundedAreaTransactions: {
    borderRadius: 5,
    backgroundColor: bosonColor.$bosonDarkPurple,
    padding: 5,
  },
  emptyTransactions: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  titleTransaction: {
    fontSize: 18,
    marginBottom: 40,
  },
  subAreaTransactions: {
    marginTop: 5,
    marginBottom: 5,
  },
  itemTransaction: {
    width: widthSpacePadding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemValueTransaction: {
    fontSize: 18,
  },
  textFooterTransaction: {
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
