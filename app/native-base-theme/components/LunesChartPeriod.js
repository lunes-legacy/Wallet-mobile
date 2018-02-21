// @flow

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import bosonColor from '../variables/bosonColor';
import I18N from '../../i18n/i18n';
import periodConstant from '../../constants/general';

const { width, height } = Dimensions.get('window');
export default class LunesChartPeriod extends React.Component {
  isSelected(rangeSelected) {
    const { range } = this.props;
    if (range === rangeSelected) {
      return { color: bosonColor.$bosonLightGreen };
    }
    return {};
  }

  renderTouchablePeriod(range, translateName) {
    return (
      <View style={styles.columnPeriod}>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => {
            this.props.onChangeRange(range);
          }}>
          <Text style={[styles.labelPeriod, this.isSelected(range)]}>
            {I18N.t(translateName)}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.containerChart}>
        <View style={styles.containerPeriod}>
          {this.renderTouchablePeriod(
            periodConstant.PERIOD.RANGE_1D,
            'ONE_DAY'
          )}
          <View style={styles.columnBorder} />
          {this.renderTouchablePeriod(
            periodConstant.PERIOD.RANGE_1W,
            'ONE_WEEK'
          )}
          <View style={styles.columnBorder} />
          {this.renderTouchablePeriod(
            periodConstant.PERIOD.RANGE_1M,
            'ONE_MONTH'
          )}
          <View style={styles.columnBorder} />
          {this.renderTouchablePeriod(
            periodConstant.PERIOD.RANGE_1Y,
            'ONE_YEAR'
          )}
          <View style={styles.columnBorder} />
          {this.renderTouchablePeriod(
            periodConstant.PERIOD.RANGE_MAX,
            'ALL_TIME'
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerChart: {
    position: 'absolute',
    flex: 1,
    width,
    height,
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
