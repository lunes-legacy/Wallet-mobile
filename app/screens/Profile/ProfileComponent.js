/* eslint-disable */
import React from 'react';
import {
  Text,
  TextInput,
  ScrollView,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Container, Button } from 'native-base';
import PhotoUpload from 'react-native-photo-upload';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Svg, { RadialGradient, Rect, Defs, Stop } from 'react-native-svg';
import { GetDefaultURIAvatar } from '../../utils/stringUtils';
import LunesPIN from '../../native-base-theme/components/LunesPIN';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import LunesAbout from '../../native-base-theme/components/LunesAbout';
import LunesSupport from '../../native-base-theme/components/LunesSupport';
import LunesAlert from '../../native-base-theme/components/LunesAlert';
import I18N from '../../i18n/i18n';
import { navigate } from '../../config/routes';
import bosonColor from '../../native-base-theme/variables/bosonColor';
import {
  LunesIconVersion,
  LunesIconAbout,
  LunesIconSupport,
  LunesIconLocal,
  LunesIconMail,
  LunesIconCalendar,
  LunesIconPhone,
} from '../../native-base-theme/components/LunesCustomIcon';
import generalConstant from '../../constants/general';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(43, 19, 74, 0.86)',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textModal: {
    color: '#fff',
    padding: 20,
  },
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
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: bosonColor.$bosonLightGrey,
  },
  textFooter: {
    color: bosonColor.$bosonWhite,
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
  divider: {
    height: 20,
    marginBottom: 20,
  },
});

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      textModal: '',
    };
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
          showCloseIcon={true}
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
          showCloseIcon={true}
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

  openModal(textModal) {
    this.setState({ modalVisible: true, textModal });
  }

  closeModal() {
    this.setState({ modalVisible: false, textModal: '' });
  }

  render() {
    // eslint-disable-next-line
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
        <Modal
          transparent={true}
          visible={this.state.modalVisible}
          animationType={'fade'}
          onRequestClose={this.closeModal.bind(this)}>
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              {this.state.textModal === 'ABOUT' ? <LunesAbout /> : null}
              {this.state.textModal === 'SUPPORT' ? <LunesSupport /> : null}
              <View>
                <Button
                  style={{ marginTop: 20 }}
                  bordered
                  rounded
                  onPress={() => this.closeModal()}>
                  <Text
                    style={{
                      paddingHorizontal: 50,
                      color: bosonColor.$bosonWhite,
                    }}>
                    {I18N.t('CLOSE')}
                  </Text>
                </Button>
              </View>
            </View>
          </View>
        </Modal>

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
              placeholderTextColor={
                fullname ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.2)'
              }
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
              placeholderTextColor={
                city ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.2)'
              }
              autoCapitalize="none"
              onChangeText={text => this.setState({ city: text })}
              autoCorrect={false}
              returnKeyType={'next'}
            />
            <View style={styles.lineBreaker} />
            <View style={styles.containerQuotation}>
              <Text style={styles.textQuotation}>
                {this.props.ticker.BTC.DISPLAYPRICE}
              </Text>
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
            <LunesIconMail size={30} color={'#fff'} style={styles.iconForm} />
            <TextInput
              maxLength={60}
              underlineColorAndroid={'transparent'}
              style={styles.input}
              value={this.state.email}
              placeholder={email || I18N.t('EMAIL')}
              placeholderTextColor={
                email ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.2)'
              }
              autoCapitalize="none"
              editable={false}
              onChangeText={text => this.setState({ email: text })}
              autoCorrect={false}
              returnKeyType={'next'}
            />
          </View>
          <View style={styles.container}>
            <LunesIconPhone size={30} color={'#fff'} style={styles.iconForm} />
            <TextInput
              maxLength={15}
              underlineColorAndroid={'transparent'}
              style={styles.input}
              placeholder={phoneNumber || I18N.t('PHONE_NUMBER')}
              placeholderTextColor={
                phoneNumber ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.2)'
              }
              autoCapitalize="none"
              onChangeText={text => this.setState({ phoneNumber: text })}
              value={this.state.phoneNumber}
              autoCorrect={false}
              returnKeyType={'next'}
            />
          </View>
          <View style={styles.container}>
            <LunesIconCalendar
              size={30}
              color={'#fff'}
              style={styles.iconForm}
            />
            <TextInput
              maxLength={10}
              underlineColorAndroid={'transparent'}
              style={styles.input}
              placeholder={birthDate || I18N.t('BIRTH_DATE')}
              placeholderTextColor={
                birthDate ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.2)'
              }
              autoCapitalize="none"
              onChangeText={text => this.setState({ birthDate: text })}
              autoCorrect={false}
              returnKeyType={'next'}
            />
          </View>
          <View style={styles.container}>
            <LunesIconLocal size={30} color={'#fff'} style={styles.iconForm} />
            <TextInput
              maxLength={60}
              underlineColorAndroid={'transparent'}
              style={styles.input}
              placeholder={homeAddress || I18N.t('HOME_ADDRESS')}
              placeholderTextColor={
                homeAddress ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.2)'
              }
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

          <View style={styles.divider} />
          <View style={styles.lineBreakerPurple} />
          <View style={styles.divider} />

          <TouchableOpacity onPress={() => this.openModal('SUPPORT')}>
            <View style={styles.footer}>
              <Text>{'  '}</Text>
              <LunesIconSupport
                color={bosonColor.$bosonLightGreen}
                size={25}
                style={styles.iconForm}
              />
              <Text
                style={{ paddingLeft: 25, color: bosonColor.$bosonLightGreen }}>
                {I18N.t('SUPPORT')}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.openModal('ABOUT')}>
            <View style={styles.footer}>
              <Text>{'  '}</Text>
              <LunesIconAbout
                color={bosonColor.$bosonLightGreen}
                size={30}
                style={styles.iconForm}
              />
              <Text
                style={{ paddingLeft: 30, color: bosonColor.$bosonLightGreen }}>
                {I18N.t('ABOUT')}
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text>{'   '}</Text>
            <LunesIconVersion
              color={bosonColor.$bosonLightGreen}
              size={30}
              style={styles.iconForm}
            />
            <Text
              style={{ paddingLeft: 30, color: bosonColor.$bosonLightGreen }}>
              {I18N.t('VERSION_APP')} - {generalConstant.VERSION_NAME}
            </Text>
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
              <Text style={{ fontSize: 16, color: 'rgba(255,255,255,1)' }}>
                {I18N.t('SAVE').toUpperCase()}
              </Text>
            </Button>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
