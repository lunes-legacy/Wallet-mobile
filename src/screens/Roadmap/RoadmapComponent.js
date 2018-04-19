import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView
} from 'react-native';
import { Container, Item, Input, Button, Text } from 'native-base';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import { handleErrors } from '../../utils/stringUtils';
import I18N from '../../i18n/i18n';
import bosonColor from '../../native-base-theme/variables/bosonColor';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    padding: 10,
    width: width - 50,
    height: height - 200,
    backgroundColor: bosonColor.$bosonLightGreen,
    borderRadius: 8
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: width - 70,
    alignItems: 'center'
  },
  date: {
    position: 'absolute',
    top: 25,
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: bosonColor.$bosonLightRed,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  items: {
    flexDirection: 'row',
    width: width - 100,
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    borderRadius: 6
  },
  titleInner: {
    marginTop: 5,
    marginBottom: 20
  }
});

export default class Roadmap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemSelected: 2
    };
    this.items = [
      {
        title: I18N.t('HYBRID_WALLET_BETA'),
        date: '',
        checked: true
      },
      {
        title: 'Github',
        date: I18N.t('DATE_26_01'),
        checked: true
      },
      {
        title: I18N.t('START_PRE_ICO'),
        date: I18N.t('DATE_25_02'),
        checked: false
      },
      {
        title: I18N.t('HYBRID_WALLET'),
        date: I18N.t('DATE_25_02'),
        checked: false
      },
      {
        title: I18N.t('START_ACTIVITIES'),
        date: I18N.t('DATE_03_04'),
        checked: false
      },
      {
        title: I18N.t('STARTING_POINT'),
        date: 'Q2/18',
        checked: false
      },
      {
        title: I18N.t('WALLET_WIN_LINUX'),
        date: 'Q4/18',
        checked: false
      },
      {
        title: I18N.t('PRIVATE_LABEL'),
        date: 'Q4/18',
        checked: false
      },
      {
        title: I18N.t('GATEWAY_PAYMENT'),
        date: 'Q4/18',
        checked: false
      }
    ];
  }

  checkItemSelected(isChecked) {
    if (isChecked) {
      return {
        backgroundColor: bosonColor.$bosonPrimary,
        elevation: 5,
        borderRadius: 6
      };
    }
    return {};
  }

  getItems() {
    return this.items.map((item, index) => (
      <View key={index} style={[styles.items, this.checkItemSelected(item.checked)]}>
        <Text>{item.title}</Text>
        <Text>{item.date}</Text>
      </View>
    ));
  }

  renderItems() {
    return <TouchableOpacity onPress={() => {}}>{this.getItems()}</TouchableOpacity>;
  }

  render() {
    return (
      <Container style={{ margin: 0, padding: 0 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'transparent',
            width: width - 50,
            height: height - 50
          }}
        >
          <View>
            <Text>{I18N.t('ROADMAP')}</Text>
          </View>
          <View style={styles.container}>
            <ScrollView style={styles.containerScroll}>
              <View style={styles.innerContainer}>
                <Text style={styles.titleInner}>{I18N.t('JANUARY')}, 2018</Text>
                <View>{this.renderItems()}</View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.date}>
            <Text>25</Text>
          </View>
        </View>
      </Container>
    );
  }
}
