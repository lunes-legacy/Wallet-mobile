import React, { Component } from 'react';
import { ScrollView, NetInfo } from 'react-native';
import { Container, Content, Button, Text, Tab, Tabs } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateConnectionStatus } from 'app/src/services/connectionService/actions';
import {
  ValidateEmail,
  handleErrors,
  upperCaseFirstLetterText,
  PasswordIsStronger,
} from 'app/src/utils/stringUtils';
import LunesLogo from 'app/src/native-base-theme/components/LunesLogo';
import { LoginForm, LunesAlert } from 'app/src/components';
import generalConstant from 'app/src/constants/general';
import LunesLoading from 'app/src/native-base-theme/components/LunesLoading';
import { ModeAuth } from 'app/src/models';
import {
  isValidUser,
  isValidSignin,
  isValidSignUp,
  getItem,
} from 'app/src/services/UserServices';
import SigninActions from 'app/src/redux/signinRedux';
import HOCContainer from '../HOCContainer';
import styles from './styles/SigninStyles';

class SigninContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isDisabled: true,
      passwordIsWeak: true,
      showHelpPassword: false,
      secureTextEntry: true,
      isSigninForm: true,
    };
  }

  async componentDidMount() {
    const email = await getItem();
    this.setState({
      user: { email },
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (isValidUser(this.props)) {
      this.goTo('PIN', { isLogged: this.props.user.pinIsValidated });
    }
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.networkConnectionChange
    );
  }

  goTo = (screen, params) => {
    const { navigate } = this.props.navigation;
    navigate('PIN', params);
  };

  networkConnectionChange = isConnected => {
    // this.props.updateConnectionStatus(isConnected);
  };

  isRenderError = () => {
    if (this.props.appState === 'error') {
      return (
        <LunesAlert
          {...this.props}
          isShow={true}
          type="error"
          onClose={() => this.props.clean()}
          onPressConfirmation={() => this.props.clean()}
          titleHeader={this.props.I18n.t('ACCESS_DENIED')}
          message={this.props.I18n.t(this.props.problem.messageKey)}
          textConfirmation={this.props.I18n.t('TRY_AGAIN')}
        />
      );
    }
    return null;
  };

  redirectToChangePassword = () => {
    const { navigate } = this.props.navigation;
    navigate('ChangePassword');
  };

  handleChange = fieldName => text => {
    const { user } = { ...this.state };
    user[fieldName] = text;

    this.setState({ user });
  };

  chackeChange = fieldName => {
    this.setState({ [fieldName]: !this.state[fieldName] });
  };

  submitLogin = () => {
    const { user } = { ...this.state };
    const objValid = isValidSignin(user);
    if (!objValid.isValid) {
      alert(this.props.I18n.t(objValid.type));
      return;
    }

    this.props.requestLogin(user);
  };

  submitSignup = () => {
    const { user } = { ...this.state };
    const objValid = isValidSignUp(user);
    if (!objValid.isValid) {
      alert(this.props.I18n.t(objValid.type));
      return;
    }
    this.props.requestSignup(user);
  };

  render() {
    const email = this.props.user.email || this.state.user.email;
    const user = { ...this.state.user, email };
    return (
      <Container>
        {this.isRenderError()}
        <ScrollView style={styles.container}>
          <Content>
            <LunesLogo size={50} />
            <Text style={styles.version}>
              {this.props.I18n.t('VERSION')} {generalConstant.VERSION_NAME}
            </Text>
          </Content>

          <Content style={styles.contentTabs}>
            <Tabs
              tabContainerStyle={styles.tabs}>
              <Tab
                heading={this.props.I18n.t('SIGNIN').toUpperCase()}
                textStyle={styles.tabText}>
                <LoginForm
                  {...this.props}
                  user={user}
                  email={email}
                  isSigninForm={this.state.isSigninForm}
                  handleChange={this.handleChange}
                  chackeChange={this.chackeChange}
                  submitButton={this.submitLogin}
                  secureTextEntry={this.state.secureTextEntry}
                />
                <Button
                  block
                  transparent
                  style={styles.btnChangePassword}
                  onPress={() => {
                    this.redirectToChangePassword();
                  }}>
                  <Text uppercase={false} style={styles.textChangePassword}>
                    {upperCaseFirstLetterText(
                      this.props.I18n.t('CHANGE_PASSWORD')
                    )}
                  </Text>
                </Button>
              </Tab>
              <Tab
                heading={this.props.I18n.t('SIGNUP').toUpperCase()}
                textStyle={styles.tabText}>
                <LoginForm
                  {...this.props}
                  user={user}
                  email={email}
                  isSigninForm={!this.state.isSigninForm}
                  handleChange={this.handleChange}
                  chackeChange={this.chackeChange}
                  submitButton={this.submitSignup}
                  secureTextEntry={this.state.secureTextEntry}
                />
              </Tab>
            </Tabs>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const handleConnectionError = status =>
  !status && { messageKey: 'NOT_CONNECTED' };

const mapStateToProps = state => {
  const { signin: { user, appState, problem } } = state;
  return {
    user,
    appState,
    problem,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(SigninActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  HOCContainer(SigninContainer)
);
