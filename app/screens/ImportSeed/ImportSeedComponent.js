/* eslint-disable */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import LunesImportSeed from '../../native-base-theme/components/LunesImportSeed';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import LunesAlert from '../../native-base-theme/components/LunesAlert';
import I18N from '../../i18n/i18n';
import { navigate } from '../../config/routes';

export default class ImportSeed extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSuccess() {
    const { showSuccess, msgSuccess } = this.props;
    if (showSuccess) {
      return (
        <LunesAlert
          isShow={showSuccess}
          type="success"
          showCloseIcon={true}
          onClose={() => {
            this.props.closeAlert();
            navigate('Main');
          }}
          onPressConfirmation={() => {
            this.props.closeAlert();
            navigate('Main');
          }}
          title={I18N.t('YOUR_WORDS')}
          message={`${I18N.t(msgSuccess)}`}
          textConfirmation={I18N.t('OK')}
        />
      );
    }
    return null;
  }

  renderError() {
    const { showError, msgError } = this.props;
    if (showError) {
      return (
        <LunesAlert
          isShow={showError}
          type="error"
          showCloseIcon={true}
          onClose={() => {
            this.props.closeAlert();
          }}
          onPressConfirmation={() => {
            this.props.closeAlert();
          }}
          title={I18N.t('YOUR_WORDS')}
          message={I18N.t(msgError)}
          textConfirmation={I18N.t('OK')}
        />
      );
    }
    return null;
  }

  renderLoading() {
    return <LunesLoading text={I18N.t('LOADING')} />;
  }

  getAddressLNS() {
    if (
      this.props.balance &&
      this.props.balance['LNS'] &&
      this.props.balance['LNS'].address
    ) {
      return this.props.balance['LNS'].address;
    }
    return '';
  }

  render() {
    return (
      <Container>
        {this.props.loading ? this.renderLoading() : null}
        {this.renderSuccess()}
        {this.renderError()}
        <LunesImportSeed
          address={this.getAddressLNS()}
          seedWords={this.props.seedWords}
          importSeed={this.props.importSeed}
          generateNewSeed={this.props.generateNewSeed}
          clearSeedWords={this.props.clearSeedWords}
          userInfo={this.props.userInfo}
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
