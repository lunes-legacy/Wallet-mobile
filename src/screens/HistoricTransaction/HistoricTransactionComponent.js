/* eslint-disable */
import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView
} from 'react-native';
import { Container, Item, Input, Spinner, Text } from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import { handleErrors } from '../../utils/stringUtils';
import I18N from '../../i18n/i18n';
import bosonColor from '../../native-base-theme/variables/bosonColor';
import moment from 'moment';

const { width, height } = Dimensions.get('window');
const widthSpacePadding = width - 40;

export default class HistoricTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { user, getHistoric } = this.props;
    getHistoric(user);
  }

  renderItems() {
    return this.props.transactions.map((item, index) => (
      <View key={index} style={styles.containerItemTransaction}>
        <View style={styles.itemTransaction}>
          <Text>
            {I18N.t('TRANSACTION')} {moment(item.time * 1000).format('MMM DD, YYYY')}
          </Text>
          <Text style={styles.itemValueTransaction}>{item.value}</Text>
        </View>
        <View style={styles.itemTransaction}>
          <Text style={styles.textFooterTransaction}>Via Lunes</Text>
          <Text style={styles.textFooterTransaction}>{item.type}</Text>
        </View>
        {item.type === 'RECEIVED' ? (
          <View style={[styles.footerLine, styles.footerLineReceived]} />
        ) : (
          <View style={[styles.footerLine, styles.footerLinePending]} />
        )}
      </View>
    ));
  }

  renderSpinner() {
    if (this.props.loading) {
      return <Spinner />;
    } else if (this.props.transactions.length === 0) {
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
            <Text style={styles.titleTransaction}>{I18N.t('YOUR_TRANSACTION_HISTORIC')}</Text>
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
    alignItems: 'center'
  },
  containerScroll: {
    width: widthSpacePadding,
    height: height - 20
  },
  containerItemTransaction: {
    marginBottom: 30
  },
  emptyTransactions: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  titleTransaction: {
    fontSize: 18,
    marginBottom: 40
  },
  itemTransaction: {
    width: widthSpacePadding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  itemValueTransaction: {
    fontSize: 18
  },
  textFooterTransaction: {
    fontSize: 12
  },
  footerLine: {
    width: widthSpacePadding,
    height: 2
  },
  footerLineReceived: {
    backgroundColor: bosonColor.$bosonLightGreen
  },
  footerLinePending: {
    backgroundColor: bosonColor.$bosonLightRed
  }
});
