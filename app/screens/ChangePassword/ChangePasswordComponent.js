/* eslint-disable */
import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import { Container, Root, Button } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BosonColors from '../../native-base-theme/variables/bosonColor';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import { handleErrors, handleSuccess } from '../../utils/stringUtils';
import I18n from '../../i18n/i18n';

export default class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  renderError() {
    const { error, clearError } = this.props;
    return handleErrors(error, clearError, clearError);
  }

  renderSuccess() {
    const { success, clearSuccess } = this.props;
    return handleSuccess(success, clearSuccess, clearSuccess);
  }

  renderLoading() {
    return <LunesLoading />;
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={styles.keyboardContainer}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}>
        {this.renderError()}
        {this.renderSuccess()}
        {this.props.loading ? this.renderLoading() : null}
        <Container>
          <StatusBar
            backgroundColor={BosonColors.$bosonPrimary}
            barStyle="light-content"
          />
          <Root>
            <View style={styles.container}>
              <Text
                style={[styles.title, { paddingVertical: 30, lineHeight: 30 }]}>
                {I18n.t('CHANGE_PASSWORD_TITLE')}
              </Text>
              <TextInput
                style={styles.inputText}
                placeholder={I18n.t('EMAIL')}
                keyboardType="email-address"
                underlineColorAndroid={'transparent'}
                placeholderTextColor="rgba(255,255,255,0.7)"
                value={this.state.email}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={value => this.setState({ email: value })}
              />
              <View
                style={{
                  width: Dimensions.get('window').width - 50,
                  paddingTop: 20,
                }}>
                <Button
                  style={{ zIndex: 8 }}
                  rounded
                  block
                  success
                  onPress={() => {
                    if (!this.state.email) {
                      alert('Todos os campos são obrigatorios');
                      return;
                    }
                    this.props.changePasswordAction(this.state.email);
                  }}>
                  <Text style={styles.title}>{I18n.t('CONFIRM')}</Text>
                </Button>
              </View>
            </View>
          </Root>
        </Container>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: BosonColors.$bosonWhite,
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
  },
  inputText: {
    width: Dimensions.get('window').width - 50,
    borderBottomColor: BosonColors.$bosonLightGreen,
    borderBottomWidth: 1,
    color: BosonColors.$bosonWhite,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
});
