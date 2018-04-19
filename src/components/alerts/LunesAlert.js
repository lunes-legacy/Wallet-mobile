import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Button } from 'native-base';
import BosonColors from 'app/src/native-base-theme/variables/bosonColor';
import { LunesIconError, LunesIconSuccess, LunesIconWarning } from 'app/src/components';
import styles from './styles/AlertStyles';

export default class LunesAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  componentWillMount() {
    if (!this.props.onClose) {
      console.error('Você precisa passar via props o metodo onClose no LunesAlert');
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
        }}
      >
        <MaterialCommunityIcons name="close" size={20} color={'#fff'} />
      </TouchableOpacity>
    );
  }

  renderConfirmBtn() {
    if (this.state.isVisible) {
      return (
        <View>
          <Button rounded success onPress={() => this.props.onPressConfirmation()}>
            <Text
              style={{
                paddingLeft: 30,
                paddingRight: 30,
                color: '#fff',
                fontSize: 17,
                fontWeight: '700'
              }}
            >
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
          <View style={[styles.dialogHeader, { backgroundColor: BosonColors.$bosonLightPink }]}>
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
          <View style={[styles.dialogHeader, { backgroundColor: BosonColors.$bosonLightGreen }]}>
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
          <View style={[styles.dialogHeader, { backgroundColor: BosonColors.$bosonMediumYellow }]}>
            <Text style={styles.textHeader}>{this.props.titleHeader}</Text>
            <View style={styles.iconClose}>{this.renderCloseIcon()}</View>
          </View>

          <View style={styles.areaDescription}>
            <LunesIconWarning size={64} color={BosonColors.$bosonMediumYellow} />
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
      message="A melhor maneira de garantir que seus fundos estejam seguros durante
      uma possível divisão é garantir que você possua suas cchaves privadas, backups
      e certifique-se de que suas frases de recuperação estão bem seguras. Se
      você tem a posse de suas chaves, você não precisa fazer nada além de ter paciência
      e 'assistir' tudo acontecer."
      textConfirmation="Repetir"
    />
  */
  renderAlertInfo() {
    const titleMsg = this.props.title ? this.props.title : this.props.I18n.t('REMEMBER');
    if (this.props.type === 'info' && this.state.isVisible) {
      return (
        <View style={{ flex: 1, width: '100%' }}>
          <View style={[styles.dialogHeader, { backgroundColor: BosonColors.$bosonMediumPurple }]}>
            <Text style={styles.textHeader}>{titleMsg}</Text>
          </View>

          <View style={styles.iconClose}>{this.renderCloseIcon()}</View>

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
          <View style={styles.dialog}>
            {this.renderAlertSuccess()}
            {this.renderAlertError()}
            {this.renderAlertWarning()}
            {this.renderAlertInfo()}
          </View>
          <View style={styles.buttonsContainer}>{this.renderConfirmBtn()}</View>
        </View>
      );
    }
    return null;
  }

  render() {
    return this.renderAlert();
  }
}
