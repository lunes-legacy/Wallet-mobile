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
import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import LunesAlert from '../../native-base-theme/components/LunesAlert';
import { handleErrors } from '../../utils/stringUtils';
import I18N from '../../i18n/i18n';
import bosonColor from '../../native-base-theme/variables/bosonColor';

export default class ConfirmSend extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Text style={styles.title}>Confirmação</Text>
          <Text style={styles.text}>
            Você irá enviar {0.0000002} BTC para o endereço{' '}
            {'mrf4kBMPubs1M27T75uXaNUMEEkNQPPjpu'}
          </Text>
          <Text style={styles.text}>Taxa de {0.0000001}</Text>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => {
              this.props.confirmTransactionSend(
                this.props.user,
                'mrf4kBMPubs1M27T75uXaNUMEEkNQPPjpu'
              );
            }}>
            <Text style={styles.text}>{I18N.t('CONFIRM')}</Text>
          </TouchableOpacity>
        </View>
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
  },
});
