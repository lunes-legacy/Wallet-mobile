import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Container, Item, Input, Spinner, Text } from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import { handleErrors } from '../../utils/stringUtils';
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
    const { user, getHistoric } = this.props;
    getHistoric(user);
  }

  renderItems() {
    return this.props.transactions.map((item, index) => {
      return (
        <View key={index} style={styles.containerItemTransaction}>
          <View style={styles.itemTransaction}>
            <Text>Transação Jan 26, 2018</Text>
            <Text style={styles.itemValueTransaction}>+ 0.01806000</Text>
          </View>
          <View style={styles.itemTransaction}>
            <Text style={styles.textFooterTransaction}>Via Lunes</Text>
            <Text style={styles.textFooterTransaction}>Pending</Text>
          </View>
          <View style={styles.footerLine} />
        </View>
      );
    });
  }

  renderSpinner() {
    if (this.props.loading) {
      return <Spinner />;
    } else if (this.props.transactions.length === 0) {
      return (
        <View style={styles.emptyTransactions}>
          <FontAwesomeIcon name={'connectdevelop'} size={40} color={'#fff'} />
          <Text>Nenhuma transação até o momento</Text>
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
              Seu historico de transações
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
  emptyTransactions: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTransaction: {
    fontSize: 18,
    marginBottom: 40,
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
    backgroundColor: 'red',
  },
});
