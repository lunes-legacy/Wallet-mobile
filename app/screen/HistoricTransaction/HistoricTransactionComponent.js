import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Container, Item, Input, Button, Text } from 'native-base';
import { LunesIconSendPayment } from '../../native-base-theme/components/LunesCustomIcon';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import LunesPIN from '../../native-base-theme/components/LunesPIN';
import { handleErrors } from '../../utils/stringUtils';
import I18N from '../../i18n/i18n';
import bosonColor from '../../native-base-theme/variables/bosonColor';

export default class ConfirmSend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amountToSend: 0,
      addressToSend: '',
      fee: 0.0000034,
      showPIN: false,
    };
  }

  componentDidMount() {
    const { state } = this.props.navigation;
    const amountToSend = state.params ? state.params.amountToSend : 0;
    const addressToSend = state.params ? state.params.addressToSend : 0;
    this.setState({
      amountToSend,
      addressToSend,
    });
  }

  showPIN() {
    this.setState({ showPIN: true });
  }

  renderConfirmation() {
    if (this.state.showPIN === false) {
      return (
        <View style={styles.container}>
          <LunesIconSendPayment size={50} color={bosonColor.$bosonLightGreen} />
          <View style={styles.separator} />
          <Text style={styles.title}>{I18N.t('CONFIRMATION')}</Text>

          <View style={styles.separator} />

          <Text style={styles.text}>{I18N.t('YOU_WILL_SEND')}</Text>
          <Text style={styles.text}>{this.state.amountToSend}</Text>

          <View style={styles.separator} />

          <Text style={styles.text}>{I18N.t('ADDRESS_TO_RECEIVE')}</Text>
          <Text style={styles.text}>{this.state.addressToSend}</Text>

          <View style={styles.separator} />

          <Text style={styles.text}>{I18N.t('FEE')}</Text>
          <Text style={styles.text}>{this.state.fee}</Text>

          <View>
            <Button
              rounded
              block
              success
              style={styles.touchable}
              onPress={() => this.showPIN()}>
              <Text style={{ fontSize: 12 }}>{I18N.t('CONFIRM')}</Text>
            </Button>
          </View>
        </View>
      );
    }
    return null;
  }

  renderPIN() {
    if (this.state.showPIN === true) {
      return (
        <View style={styles.container}>
          <LunesPIN
            onSavePIN={pin => {
              this.props.confirmTransactionSend(
                pin,
                this.props.user,
                this.state.addressToSend,
                this.state.amountToSend,
                this.state.fee
              );
            }}
          />
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <Container>
        {this.renderConfirmation()}
        {this.renderPIN()}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: bosonColor.$bosonLightGreen,
  },
  text: {
    color: bosonColor.$bosonWhite,
  },
  touchable: {
    width: Dimensions.get('window').width - 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  separator: {
    height: 5,
    width: Dimensions.get('window').width,
    marginTop: 10,
    marginBottom: 10,
  },
});
