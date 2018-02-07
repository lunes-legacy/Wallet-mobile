import React from 'react';
import {
  Text,
  TextInput,
  ScrollView,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Container, Button } from 'native-base';
import PhotoUpload from 'react-native-photo-upload';
import { GetDefaultURIAvatar } from '../../utils/stringUtils';
import LunesPIN from '../../native-base-theme/components/LunesPIN';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import LunesAlert from '../../native-base-theme/components/LunesAlert';
import I18N from '../../i18n/i18n';
import { navigate } from '../../config/routes';
import bosonColor from '../../native-base-theme/variables/bosonColor';
import Svg, { RadialGradient, Rect, Defs, Stop } from 'react-native-svg';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    let _id = '';
    let accessToken = '';
    let email = '';
    let fullname = '';
    let phoneNumber = '';
    let homeAddress = '';
    let birthDate = '';
    let city = '';
    let avatar = {};
    if (this.props.userInfo) {
      _id = this.props.userInfo._id;
      accessToken = this.props.userInfo.accessToken;
      email = this.props.userInfo.email;
      fullname = this.props.userInfo.fullname;
      phoneNumber = this.props.userInfo.phoneNumber;
      homeAddress = this.props.userInfo.homeAddress;
      birthDate = this.props.userInfo.birthDate;
      city = this.props.userInfo.city;
      avatar = this.props.userInfo.avatar;
    }

    return (
      <Container>
        {this.props.loading ? this.renderLoading() : null}
        <ScrollView style={{ width: Dimensions.get('window').width }}>
          {/* AVATAR, NAME and LOCATION */}
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
            <View style={styles.lineBreaker} />
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
            <View style={styles.lineBreaker} />
            <View style={styles.containerQuotation}>
              <Text style={styles.textQuotation}>$ 1.20 | BRL 0.20</Text>
              <Svg width={Dimensions.get('window').width} height="60">
                <Defs>
                  <RadialGradient
                    id="grad"
                    cx="50%"
                    cy="0%"
                    rx="80%"
                    ry="90%"
                    fx="50%"
                    fy="50%"
                    gradientUnits="userSpaceOnUse">
                    <Stop
                      offset="0%"
                      stopColor={bosonColor.$bosonLightGreen}
                      stopOpacity="1"
                    />
                    <Stop offset="100%" stopColor="#654fa4" stopOpacity="1" />
                  </RadialGradient>
                </Defs>
                <Rect
                  x="0"
                  y="0"
                  width={Dimensions.get('window').width}
                  height="80"
                  fill="url(#grad)"
                />
              </Svg>
            </View>
          </View>

          {/* PERSONAL INFO */}
          <View style={styles.container}>
            <Text style={styles.labelText}>{I18N.t('PERSONAL_INFO')}</Text>
          </View>
          <View style={styles.container}>
            <FontAwesome
              name={'envelope-o'}
              size={30}
              color={'#fff'}
              style={styles.iconForm}
            />
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
            <FontAwesome
              name={'phone'}
              size={30}
              color={'#fff'}
              style={styles.iconForm}
            />
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
            <FontAwesome
              name={'calendar'}
              size={30}
              color={'#fff'}
              style={styles.iconForm}
            />
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
            <FontAwesome
              name={'map-marker'}
              size={30}
              color={'#fff'}
              style={styles.iconForm}
            />
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

          <View style={styles.lineBreaker} />
          <View style={styles.lineBreakerPurple} />

          <View style={styles.footer}>
            <FontAwesome
              name={'envelope-o'}
              size={30}
              color={'#fff'}
              style={styles.iconForm}
            />
            <Text>Support</Text>
          </View>

          <View style={styles.footer}>
            <FontAwesome
              name={'envelope-o'}
              size={30}
              color={'#fff'}
              style={styles.iconForm}
            />
            <Text>About</Text>
          </View>

          <View style={styles.footer}>
            <FontAwesome
              name={'envelope-o'}
              size={30}
              color={'#fff'}
              style={styles.iconForm}
            />
            <Text>Version App</Text>
          </View>

          {/* BUTTON save */}
          <View style={{ padding: 10 }}>
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
              <Text style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)' }}>
                {I18N.t('SAVE').toUpperCase()}
              </Text>
            </Button>
          </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: bosonColor.$bosonLightGrey,
  },
  iconForm: {
    width: 40,
    marginRight: 10,
    paddingTop: 10,
    paddingLeft: 10,
    textAlign: 'center',
  },
  labelText: {
    color: '#4CD566',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  input: {
    width: Dimensions.get('window').width - 80,
    color: '#fff',
    textAlign: 'left',
    borderBottomWidth: 1,
    borderBottomColor: bosonColor.$bosonMediumGrey,
  },
  fullname: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    margin: 5,
    padding: 0,
  },
  containerQuotation: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textQuotation: {
    textAlign: 'center',
    color: bosonColor.$bosonWhite,
    position: 'absolute',
    zIndex: 99,
    top: 10,
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
  lineBreaker: {
    height: 1,
    marginTop: 5,
  },
  lineBreakerPurple: {
    height: 1,
    marginTop: 10,
    backgroundColor: bosonColor.$bosonDarkPurple,
  },
});
