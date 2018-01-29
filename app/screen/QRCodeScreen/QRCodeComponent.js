import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Linking,
  StatusBar,
} from 'react-native';
import { Container, Item, Input, Toast, Root } from 'native-base';
import BosonColors from '../../native-base-theme/variables/bosonColor';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { navigate } from '../../config/routes';

export default class QRCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      showQRCode: false,
    };
  }

  onSuccess(e) {
    console.log(e.data);
    navigate('ConfirmSend', { addressToSend: e.data });
  }

  showQRCodeScan() {
    this.setState({
      showQRCode: true,
    });
  }

  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor={BosonColors.$bosonLightGreen}
          barStyle="light-content"
        />
        <Root>
          <View style={styles.container}>
            <QRCodeScanner
              reactivate={true}
              checkAndroid6Permissions={true}
              showMarker={true}
              onRead={e => {
                this.onSuccess(e);
              }}
            />
          </View>
        </Root>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
