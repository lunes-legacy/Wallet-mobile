import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Container, Item, Input } from 'native-base';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import LunesPIN from '../../native-base-theme/components/LunesPIN';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import I18N from '../../i18n/i18n';

export default class PIN extends React.Component {
  renderLoading() {
    return <LunesLoading text={I18N.t('CHECKING_PIN_FOR_ACTIVATION')} />;
  }

  render() {
    const { state } = this.props.navigation;
    const isLogged = state.params ? state.params.isLogged : null;
    return (
      <Container>
        {this.props.loading ? this.renderLoading() : null}
        <LunesPIN
          toValidate={isLogged}
          onSavePIN={PIN => {
            let userInfo = {};
            if (this.props && this.props.user && this.props.user.userInfo) {
              userInfo = this.props.user.userInfo;
            }
            if (isLogged) {
              this.props.requestValidPIN(PIN, userInfo);
            } else {
              this.props.requestAddPIN(PIN, userInfo);
            }
          }}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textBold: {
    fontWeight: '900',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    width: 220,
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
    marginBottom: 20,
  },
});
