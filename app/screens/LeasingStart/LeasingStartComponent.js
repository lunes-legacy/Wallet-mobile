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

export default class LeasingStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <View>
          <Text>Start Leasing</Text>
        </View>
      </Container>
    );
  }
}
