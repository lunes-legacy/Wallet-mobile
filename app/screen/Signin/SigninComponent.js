// @flow
import React from 'react';
import _ from 'lodash';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { Container, Button, Text, Tab, Tabs } from 'native-base';
import LunesLogo from '../../native-base-theme/components/LunesLogo';
import LunesLoginForm from '../../native-base-theme/components/LunesLoginForm';
import LunesLoading from '../../native-base-theme/components/LunesLoading';
import LunesAlert from '../../native-base-theme/components/LunesAlert';
import I18n from '../../i18n/i18n';
import { navigate } from '../../config/routes';
import Svg, {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Use,
  Defs,
  Stop,
} from 'react-native-svg';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import bosonColor from '../../native-base-theme/variables/bosonColor';

const { width, height } = Dimensions.get('window');

export default class Signin extends React.Component<{}> {
  render() {
    const data = [20, 5, 30, 15, 35, 40, 50, 45, 200];
    const max = _.max(data);
    const min = _.min(data);

    const Tooltip = ({ x, y }) => (
      <G
        x={x(data.length - 1) - 75}
        key={'tooltip'}
        onPress={() => alert('clicked')}>
        <G y={13}>
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="40">
              <Stop
                offset="0"
                stopColor={bosonColor.$bosonDarkYellow}
                stopOpacity="1"
              />
              <Stop
                offset="1"
                stopColor={bosonColor.$bosonLightYellow}
                stopOpacity="1"
              />
            </LinearGradient>
          </Defs>
          <Rect
            height={30}
            width={75}
            stroke={'grey'}
            fill="url(#grad)"
            ry={2}
            rx={2}
          />
          <Text
            x={x(data.length - 1) - 75}
            textAnchor={'middle'}
            y={10}
            stroke={'rgb(0, 0, 0)'}>
            $1198.98
          </Text>
        </G>
      </G>
    );

    const HorizontalLineTop = ({ y }) => (
      <Line
        key={'zero-axis'}
        x1={'0%'}
        x2={'100%'}
        y1={y(max)}
        y2={y(max)}
        stroke={bosonColor.$bosonLightBlue}
        strokeDasharray={[4, 8]}
        strokeWidth={2}
      />
    );

    const HorizontalLineBottom = ({ y }) => (
      <Line
        key={'zero-axis'}
        x1={'0%'}
        x2={'100%'}
        y1={y(min)}
        y2={y(min)}
        stroke={bosonColor.$bosonLightBlue}
        strokeDasharray={[4, 8]}
        strokeWidth={2}
      />
    );

    return (
      <Container>
        <View style={styles.containerChart}>
          <View style={styles.containerPeriod}>
            <View style={styles.columnPeriod}>
              <Text style={styles.labelPeriod}>1dia</Text>
            </View>
            <View style={styles.columnBorder} />
            <View style={styles.columnPeriod}>
              <Text style={styles.labelPeriod}>1semana</Text>
            </View>
            <View style={styles.columnBorder} />
            <View style={styles.columnPeriod}>
              <Text style={styles.labelPeriod}>1mês</Text>
            </View>
            <View style={styles.columnBorder} />
            <View style={styles.columnPeriod}>
              <Text style={styles.labelPeriod}>1ano</Text>
            </View>
            <View style={styles.columnBorder} />
            <View style={styles.columnPeriod}>
              <Text style={styles.labelPeriod}>Todo Período</Text>
            </View>
          </View>
        </View>
        <View style={{ position: 'absolute', width: width, height: 300 }}>
          <AreaChart
            style={{ height: 250 }}
            dataPoints={data}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveNatural}
            showGrid={false}
            extras={[HorizontalLineTop, HorizontalLineBottom, Tooltip]}
            renderExtra={({ item, ...args }) => item(args)}
            svg={{
              stroke: bosonColor.$bosonDarkYellow,
              strokeWidth: 7,
            }}
            gridMin={0}
            renderDecorator={({ x, y, index, value }) => (
              <Circle
                key={index}
                cx={x(index)}
                cy={y(value)}
                r={6}
                stroke={'rgb(255, 255, 255)'}
                fill={'white'}
              />
            )}
            renderGradient={({ id }) => (
              <LinearGradient id={id} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
                <Stop
                  offset={'0%'}
                  stopColor={'rgb(255, 195, 0)'}
                  stopOpacity={0.7}
                />
                <Stop
                  offset={'100%'}
                  stopColor={'rgb(255, 195, 0)'}
                  stopOpacity={0}
                />
              </LinearGradient>
            )}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerChart: {
    position: 'absolute',
    flex: 1,
    width: width,
    height: 400,
  },
  containerPeriod: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    padding: 5,
  },
  labelPeriod: {
    fontSize: 11,
  },
  columnPeriod: {
    flex: 1,
    alignItems: 'center',
  },
  columnBorder: {
    width: 1,
    backgroundColor: bosonColor.$bosonMediumPurple,
  },
});
