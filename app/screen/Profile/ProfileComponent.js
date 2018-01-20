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
import LunesAlert from '../../native-base-theme/components/LunesAlert';
import I18N from '../../i18n/i18n';
import { navigate } from '../../config/routes';

export default class Profile extends React.Component {
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
    const { wordSeedWasViewed } = this.props;
    return (
      <Container>
        {this.props.loading ? this.renderLoading() : null}
        {this.renderAlertInfoBackupSeed()}
        {this.renderTextSeed()}
        <LunesPIN
          toValidate={isLogged}
          onSavePIN={PIN => {
            let userInfo = {};
            if (this.props && this.props.user && this.props.user.userInfo) {
              userInfo = this.props.user.userInfo;
            }
            if (isLogged) {
              this.props.requestValidPIN(PIN, userInfo, wordSeedWasViewed);
            } else {
              this.props.requestAddPIN(PIN, userInfo, wordSeedWasViewed);
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
