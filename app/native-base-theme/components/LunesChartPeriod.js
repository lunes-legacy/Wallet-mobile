// @flow

import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import bosonColor from '../variables/bosonColor';
import I18N from '../../i18n/i18n';
const { width, height } = Dimensions.get('window');
export default class LunesChartPeriod extends React.Component {
  render() {
    return (
      <View style={styles.containerChart}>
        <View style={styles.containerPeriod}>
          <View style={styles.columnPeriod}>
            <Text style={styles.labelPeriod}>{I18N.t('ONE_DAY')}</Text>
          </View>
          <View style={styles.columnBorder} />
          <View style={styles.columnPeriod}>
            <Text style={styles.labelPeriod}>{I18N.t('ONE_WEEK')}</Text>
          </View>
          <View style={styles.columnBorder} />
          <View style={styles.columnPeriod}>
            <Text style={styles.labelPeriod}>{I18N.t('ONE_MONTH')}</Text>
          </View>
          <View style={styles.columnBorder} />
          <View style={styles.columnPeriod}>
            <Text style={styles.labelPeriod}>{I18N.t('ONE_YEAR')}</Text>
          </View>
          <View style={styles.columnBorder} />
          <View style={styles.columnPeriod}>
            <Text style={styles.labelPeriod}>{I18N.t('ALL_TIME')}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerChart: {
    position: 'absolute',
    flex: 1,
    width: width,
    height: height,
    top: 0,
  },
  containerPeriod: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  labelPeriod: {
    fontSize: 11,
    color: bosonColor.$bosonWhite,
  },
  columnPeriod: {
    flex: 1,
    alignItems: 'center',
  },
  columnBorder: {
    width: 1,
    backgroundColor: '#715daa',
  },
});
