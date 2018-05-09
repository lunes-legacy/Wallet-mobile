/* eslint-disable */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import ConfirmBackup from '../../screens/ConfirmBackup';
import LunesPIN from '../../native-base-theme/components/LunesPIN';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import LunesAlert from '../../native-base-theme/components/LunesAlert';
import I18N from '../../i18n/i18n';
import { navigate } from '../../config/routes';

export default class PIN extends React.Component {
  renderLoading() {
    return <LunesLoading text={I18N.t('CHECKING_PIN_FOR_ACTIVATION')} />;
  }

  alertError(message, isShow) {
    return (
      <LunesAlert
        isShow={isShow}
        type="error"
        showCloseIcon={false}
        onClose={() => {
          this.props.clearError();
        }}
        onPressConfirmation={() => {
          this.props.clearError();
        }}
        titleHeader={I18N.t('ACCESS_DENIED')}
        message={message}
        textConfirmation={I18N.t('TRY_AGAIN')}
      />
    );
  }

  renderError() {
    const { error } = this.props;
    if (error && error.messageKey === 'INCORRECT_PIN_NUMBER') {
      return this.alertError(I18N.t('INCORRECT_PIN_NUMBER'), true);
    }
    return null;
  }

  renderAlertInfoBackupSeed() {
    const { showDialogBackupSeed } = this.props;
    if (showDialogBackupSeed) {
      return (
        <LunesAlert
          isShow={showDialogBackupSeed}
          type="info"
          showCloseIcon={false}
          minHeighModal={250}
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
    if (showTextBackupSeed && seedText) {
      return (
        navigate('ConfirmBackup')
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
        {this.renderError()}
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
