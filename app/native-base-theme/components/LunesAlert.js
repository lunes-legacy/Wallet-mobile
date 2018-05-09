/* eslint-disable */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import BosonColors from '../variables/bosonColor';
import { Button } from 'native-base';
import {
  LunesIconError,
  LunesIconSuccess,
  LunesIconWarning,
} from '../components/LunesCustomIcon';
import I18N from '../../i18n/i18n';

const { width, height } = Dimensions.get('window');

export default class LunesAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  componentWillMount() {
    if (!this.props.onClose) {
      console.error(
        'Você precisa passar via props o metodo onClose no LunesAlert'
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isVisible: true });
  }

  renderCloseIcon() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ isVisible: false });
          if (this.props.onClose && typeof this.props.onClose === 'function') {
            this.props.onClose();
          }
        }}>
        <MaterialCommunityIcons name="close" size={20} color={'#fff'} />
      </TouchableOpacity>
    );
  }

  renderConfirmBtn() {
    if (this.state.isVisible) {
      return (
        <View>
          <Button
            rounded
            success
            onPress={() => {
              if (
                this.props.onPressConfirmation &&
                typeof this.props.onPressConfirmation === 'function'
              ) {
                this.props.onPressConfirmation();
                this.setState({ isVisible: false });
              }
            }}>
            <Text style={styles.textConfirmBtn}>
              {this.props.textConfirmation}
            </Text>
          </Button>
        </View>
      );
    }
    return null;
  }

  /**
   * How to render
   * <LunesAlert
        type="error"
        onPressConfirmation={() => {
          alert('backup');
        }}
        titleHeader="Acesso Negado"
        message="Senha ou usuário incorreto"
        textConfirmation="Repetir"
      />
  */
  renderAlertError() {
    if (this.props.type === 'error' && this.state.isVisible) {
      return (
        <View style={{ flex: 1, width: '100%' }}>
          <View
            style={[
              styles.dialogHeader,
              { backgroundColor: BosonColors.$bosonDarkPink },
            ]}>
            <Text style={styles.textHeader}>{this.props.titleHeader}</Text>
            <View style={styles.iconClose}>{this.renderCloseIcon()}</View>
          </View>

          <View style={styles.areaDescription}>
            <LunesIconError size={64} />
            <Text style={styles.textDescription}>{this.props.message}</Text>
          </View>
        </View>
      );
    }
    return null;
  }

  /**
   * How to render
   * <LunesAlert
        type="success"
        onPressConfirmation={() => {
          alert('backup');
        }}
        titleHeader="Atenção"
        message="Usuário logado com sucesso..."
        textConfirmation="Repetir"
      />
  */
  renderAlertSuccess() {
    if (this.props.type === 'success' && this.state.isVisible) {
      return (
        <View style={{ flex: 1, width: '100%' }}>
          <View
            style={[
              styles.dialogHeader,
              { backgroundColor: BosonColors.$bosonLightGreen },
            ]}>
            <Text style={styles.textHeader}>{this.props.titleHeader}</Text>
            <View style={styles.iconClose}>{this.renderCloseIcon()}</View>
          </View>

          <View style={styles.areaDescription}>
            <LunesIconSuccess size={64} color={BosonColors.$bosonLightGreen} />
            <Text style={styles.textDescription}>{this.props.message}</Text>
          </View>
        </View>
      );
    }
    return null;
  }

  renderAlertWarning() {
    if (this.props.type === 'warning' && this.state.isVisible) {
      return (
        <View style={{ flex: 1, width: '100%' }}>
          <View
            style={[
              styles.dialogHeader,
              { backgroundColor: BosonColors.$bosonMediumYellow },
            ]}>
            <Text style={styles.textHeader}>{this.props.titleHeader}</Text>
            <View style={styles.iconClose}>{this.renderCloseIcon()}</View>
          </View>

          <View style={styles.areaDescription}>
            <LunesIconWarning
              size={64}
              color={BosonColors.$bosonMediumYellow}
            />
            <Text style={styles.textDescription}>{this.props.message}</Text>
          </View>
        </View>
      );
    }
    return null;
  }

  /**
   * How to render
   * <LunesAlert
      type="info"
      onPressConfirmation={() => {
        alert('backup');
      }}
      titleHeader="Lembre-se"
      message="A melhor maneira de garantir que seus fundos estejam seguros durante uma possível divisão é garantir que você possua suas cchaves privadas, backups e certifique-se de que suas frases de recuperação estão bem seguras. Se você tem a posse de suas chaves, você não precisa fazer nada além de ter paciência e 'assistir' tudo acontecer."
      textConfirmation="Repetir"
    />
  */

  // Close Modal
  //  View style={styles.iconClose}>{this.renderCloseIcon()}</View>

  renderAlertInfo() {
    const titleMsg = this.props.title ? this.props.title : I18N.t('REMEMBER');
    if (this.props.type === 'info' && this.state.isVisible) {
      return (
        <View style={{ flex: 1, width: '100%' }}>
          <View
            style={[
              styles.dialogHeader,
              { backgroundColor: BosonColors.$bosonMediumPurple },
            ]}>
            <Text style={styles.textHeader}>{titleMsg}</Text>
          </View>

          {this.props.showCloseIcon && (
            <View style={styles.iconClose}>{this.renderCloseIcon()}</View>
          )}

          <View style={styles.areaDescription}>
            <Text selectable={true} style={styles.textDescription}>
              {this.props.message}
            </Text>
          </View>
        </View>
      );
    }
    return null;
  }

  renderAlert() {
    if (this.state.isVisible) {
      return (
        <View style={styles.container}>
          <View style={styles.backdrop} />
          <View style={styles.dialogContent}>
            <View
              style={[
                styles.dialog,
                {
                  minHeight: this.props.minHeighModal
                    ? this.props.minHeighModal
                    : 200,
                },
              ]}>
              {this.renderAlertSuccess()}
              {this.renderAlertError()}
              {this.renderAlertWarning()}
              {this.renderAlertInfo()}
            </View>
            <View style={styles.buttonsContainer}>
              {this.renderConfirmBtn()}
            </View>
          </View>
        </View>
      );
    }
    return null;
  }

  render() {
    return this.renderAlert();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width,
    height,
    zIndex: 995,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    position: 'absolute',
    opacity: 0.7,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 996,
  },

  dialogContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dialog: {
    flex: 0.15,
    borderRadius: 20,
    width: width - 50,
    // minHeight: 200,
    backgroundColor: '#fff',
    zIndex: 997,
  },

  dialogHeader: {
    width: '100%',
    height: 50,
    backgroundColor: '#ccc',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textHeader: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },

  areaDescription: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textDescription: {
    color: BosonColors.$bosonMediumGrey,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 20,
  },

  buttonsContainer: {
    zIndex: 998,
    marginTop: -15,
  },
  textConfirmBtn: {
    paddingLeft: 30,
    paddingRight: 30,
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  text: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
  iconClose: {
    position: 'absolute',
    marginTop: 15,
    zIndex: 999,
    right: 15,
  },
});
