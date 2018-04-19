/* eslint-disable */
import React from 'react';
import { Text, TextInput, View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Container, Item, Input, Toast, Root, Button } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import BosonColors from '../../native-base-theme/variables/bosonColor';
import { navigate } from '../../config/routes';
import I18n from '../../i18n/i18n';
import bosonColor from '../../native-base-theme/variables/bosonColor';

export default class AlertMessage extends React.Component {
  render() {
    return (
      <Container>
        <View style={styles.container}>
          <MaterialCommunityIcons name={'timer-sand'} size={60} color={'#fff'} />
          <Text style={styles.title}>{I18n.t('COMING_SOON')}</Text>
          <View style={{ width: Dimensions.get('window').width - 50 }}>
            <Button
              rounded
              block
              success
              onPress={() => {
                navigate('Main');
              }}
            >
              <Text style={styles.text}>{I18n.t('BACK')}</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: BosonColors.$bosonWhite,
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 30
  },
  text: {
    color: bosonColor.$bosonWhite
  }
});
