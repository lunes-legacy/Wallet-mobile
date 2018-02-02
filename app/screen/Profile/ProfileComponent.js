import React from 'react';
import {
  Text,
  TextInput,
  ScrollView,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Container, Button, Card, CardItem } from 'native-base';
import PhotoUpload from 'react-native-photo-upload';
import { GetDefaultURIAvatar } from '../../utils/stringUtils';
import LunesPIN from '../../native-base-theme/components/LunesPIN';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import LunesAlert from '../../native-base-theme/components/LunesAlert';
import I18N from '../../i18n/i18n';
import { navigate } from '../../config/routes';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { _id, accessToken } = this.props.userInfo;
    //this.props.requestObtain({ _id, accessToken });
  }

  renderLoading() {
    return <LunesLoading text={I18N.t('CHECKING_PIN_FOR_ACTIVATION')} />;
  }

  renderAlertInfoBackupSeed() {
    const { showDialogBackupSeed, seedText } = this.props;
    if (showDialogBackupSeed) {
      return (
        <LunesAlert
          isShow={showDialogBackupSeed}
          type="info"
          onClose={() => {
            this.props.closeShowDialogBackupSeed();
            navigate('Main');
          }}
          onPressConfirmation={() => {
            this.props.closeShowDialogBackupSeed();
            this.props.showTextBackupSeedAction(this.props.seedText);
          }}
          message={I18N.t('SEED_BACKUP_MSG')}
          textConfirmation={I18N.t('DO_BACKUP')}
        />
      );
    }
    return null;
  }

  renderTextSeed() {
    const { showTextBackupSeed, seedText } = this.props;
    if (showTextBackupSeed) {
      return (
        <LunesAlert
          isShow={showTextBackupSeed}
          type="info"
          onClose={() => {
            this.props.closeTextBackupSeedAction();
            navigate('Main');
          }}
          onPressConfirmation={() => {
            this.props.closeTextBackupSeedAction();
            navigate('Main');
          }}
          title={I18N.t('YOUR_WORDS')}
          message={seedText}
          textConfirmation={I18N.t('CONFIRM_BACKUP')}
        />
      );
    }
    return null;
  }

  render() {
    const { state } = this.props.navigation;
    const isLogged = state.params ? state.params.isLogged : null;
    const personalInfo = this.props.userInfo;
    const { _id, accessToken } = this.props.userInfo;
    const { wordSeedWasViewed } = this.props;
    const {
      email,
      fullname,
      phoneNumber,
      homeAddress,
      birthDate,
      city,
      avatar,
    } = personalInfo;
    const homeState = personalInfo.state;

    return (
      <Container>
        {this.props.loading ? this.renderLoading() : null}
        <ScrollView>
          <View style={styles.fullnameContainer}>
            <PhotoUpload onPhotoSelect={small => this.setState({ small })}>
              <Image
                style={{
                  paddingVertical: 30,
                  width: 150,
                  height: 150,
                  borderRadius: 75,
                }}
                resizeMode="cover"
                source={{
                  uri:
                    avatar && avatar.small
                      ? `data:image/png;base64,${avatar.small}`
                      : GetDefaultURIAvatar(),
                }}
              />
            </PhotoUpload>
            <TextInput
              maxLength={60}
              underlineColorAndroid={'transparent'}
              style={styles.fullname}
              placeholder={fullname || I18N.t('FULL_NAME')}
              placeholderTextColor="rgba(255,255,255,0.7)"
              autoCapitalize="none"
              onChangeText={text => this.setState({ fullname: text })}
              value={this.state.fullname}
              autoCorrect={false}
              returnKeyType={'next'}
            />
            <TextInput
              maxLength={60}
              underlineColorAndroid={'transparent'}
              style={styles.fullname}
              placeholder={city || I18N.t('CITY')}
              placeholderTextColor="rgba(255,255,255,0.7)"
              autoCapitalize="none"
              onChangeText={text => this.setState({ city: text })}
              value={this.state.city}
              autoCorrect={false}
              returnKeyType={'next'}
            />
          </View>
          <View style={styles.fullnameContainer}>
            <Text style={styles.labelText}>{I18N.t('PERSONAL_INFO')}</Text>
          </View>
          <View style={styles.container}>
            <TextInput
              maxLength={60}
              underlineColorAndroid={'transparent'}
              style={styles.input}
              placeholder={email || I18N.t('EMAIL')}
              placeholderTextColor="rgba(255,255,255,0.7)"
              autoCapitalize="none"
              editable={false}
              onChangeText={text => this.setState({ email: text })}
              value={this.state.email}
              autoCorrect={false}
              returnKeyType={'next'}
            />
          </View>
          <View style={styles.container}>
            <TextInput
              maxLength={9}
              underlineColorAndroid={'transparent'}
              style={styles.input}
              placeholder={phoneNumber || I18N.t('PHONE_NUMBER')}
              placeholderTextColor="rgba(255,255,255,0.7)"
              autoCapitalize="none"
              onChangeText={text => this.setState({ phoneNumber: text })}
              value={this.state.phoneNumber}
              autoCorrect={false}
              returnKeyType={'next'}
            />
          </View>
          <View style={styles.container}>
            <TextInput
              maxLength={10}
              underlineColorAndroid={'transparent'}
              style={styles.input}
              placeholder={birthDate || I18N.t('BIRTH_DATE')}
              placeholderTextColor="rgba(255,255,255,0.7)"
              autoCapitalize="none"
              onChangeText={text => this.setState({ birthDate: text })}
              value={this.state.birthDate}
              autoCorrect={false}
              returnKeyType={'next'}
            />
          </View>
          <View style={styles.container}>
            <TextInput
              maxLength={60}
              underlineColorAndroid={'transparent'}
              style={styles.input}
              placeholder={homeAddress || I18N.t('HOME_ADDRESS')}
              placeholderTextColor="rgba(255,255,255,0.7)"
              autoCapitalize="none"
              onChangeText={text =>
                this.setState({
                  homeAddress: text,
                })
              }
              value={this.state.homeAddress}
              autoCorrect={false}
              returnKeyType={'next'}
            />
          </View>
          <Button
            style={{ marginTop: 50 }}
            disabled={Object.keys(this.state).length === 0}
            rounded
            success
            block
            onPress={() =>
              this.props.requestUpdate({
                _id,
                updates: this.state,
                accessToken,
                userInfo: this.props.userInfo,
              })
            }>
            <Text style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>
              {I18N.t('CONFIRM')}
            </Text>
          </Button>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textBold: {
    fontWeight: '900',
  },
  container: {
    borderBottomColor: '#9f90c5',
    borderBottomWidth: 1,
  },
  labelText: {
    color: '#4CD566',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: -150,
  },
  input: {
    width: 250,
    color: '#fff',
    textAlign: 'left',
  },
  fullname: {
    color: '#fff',
    width: 260,
    fontSize: 16,
    textAlign: 'center',
  },
  fullnameContainer: {
    marginTop: 30,
    marginBottom: 10,
  },
  instructions: {
    width: 220,
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
    marginBottom: 20,
  },
});
