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

export default class PIN extends React.Component {
  renderLoading() {
    return <LunesLoading text="Verificando o PIN para validação" />;
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
            if (isLogged) {
              this.props.requestValidPIN(PIN);
            } else {
              this.props.requestAddPIN(PIN);
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
