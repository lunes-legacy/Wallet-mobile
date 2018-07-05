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

  render() {
    return (
      <Container>
        <LunesImportSeed
          newSeedWords={this.props.newSeedWords}
          importSeed={this.props.importSeed}
          generateNewSeed={this.props.generateNewSeed}
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
