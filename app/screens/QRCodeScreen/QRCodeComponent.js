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
  Vibration,
} from 'react-native';
import { Container, Item, Input, Toast, Root } from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Camera from 'react-native-camera';
import BosonColors from '../../native-base-theme/variables/bosonColor';
import { navigate } from '../../config/routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  border: {
    position: 'absolute',
    top: 20,
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 2,
    backgroundColor: 'transparent',
    borderColor: BosonColors.$bosonLightGreen,
    borderWidth: 3,
  },
});

export default class QRCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      showQRCode: false,
    };
  }

  onSuccess(e) {
    try {
      console.log(e.data);
      this.setState({ qrcode: e.data });
      Vibration.vibrate();
      const { state } = this.props.navigation;
      const amountToSend = state.params ? state.params.amountToSend : 0;
      navigate('ConfirmSend', { addressToSend: e.data, amountToSend });
    } catch (error) {
      // eslint-disable-next-line
      alert('Erro ao receber endereço da carteira');
    }
  }

  showQRCodeScan() {
    this.setState({
      showQRCode: true,
      qrcode: '',
    });
  }

  render() {
    return (
      <View style={styles.container2}>
        <StatusBar
          backgroundColor={BosonColors.$bosonLightGreen}
          barStyle="light-content"
        />
        <View style={styles.container2}>
          <Camera
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={
              'We need your permission to use your camera phone'
            }
            style={styles.preview}
            onBarCodeRead={e => {
              this.onSuccess(e);
            }}
            ref={cam => {
              this.camera = cam;
            }}
            aspect={Camera.constants.Aspect.stretch}>
            <View style={styles.border} />
            <Text
              style={{
                backgroundColor: 'white',
              }}>
              {this.state.qrcode}
            </Text>
          </Camera>
          {/* <QRCodeScanner
          reactivate={true}
          checkAndroid6Permissions={true}
          showMarker={true}
          onRead={e => {
            this.onSuccess(e);
          }}
        /> */}
        </View>
      </View>
    );
  }
}
