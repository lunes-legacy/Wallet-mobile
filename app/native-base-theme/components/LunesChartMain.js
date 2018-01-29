// @flow
import React from 'react';
import _ from 'lodash';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { Container, Button, Tab, Tabs } from 'native-base';
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
  Text,
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
import { AreaChart, YAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import bosonColor from '../../native-base-theme/variables/bosonColor';
import LunesChartPeriod from './LunesChartPeriod';
import rangeConstant from '../../constants/general';

const { width, height } = Dimensions.get('window');

export default class LunesChartMain extends React.Component<{}> {
  render() {
    const dataFormatted =
      this.props.historic && this.props.historic.data
        ? _.map(this.props.historic.data, d => {
            return d.close;
          })
        : null;
    const data = dataFormatted || [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const max = _.max(data);
    const min = _.min(data);
    let test = '100%';
    if (this.props.range === rangeConstant.PERIOD.RANGE_1D) {
      test = '10%';
    } else if (this.props.range === rangeConstant.PERIOD.RANGE_1W) {
      test = '20%';
    } else if (this.props.range === rangeConstant.PERIOD.RANGE_1M) {
      test = '30%';
    }

    const TooltipTop = ({ x, y }) => (
      <G x={max} key={'tooltipTop'} onPress={() => alert('clicked')}>
        <G y={min + 6}>
          <Defs>
            <LinearGradient id="gradTop" x1="0" y1="0" x2="0" y2="20">
              <Stop
                offset="0"
                stopColor={bosonColor.$bosonLightYellow}
                stopOpacity="1"
              />
              <Stop
                offset="1"
                stopColor={bosonColor.$bosonDarkYellow}
                stopOpacity="1"
              />
            </LinearGradient>
          </Defs>
          <Rect
            height={30}
            width={75}
            stroke={bosonColor.$bosonDarkYellow}
            fill="url(#gradTop)"
            ry={2}
            rx={2}
          />
          <Text x={75 / 2} textAnchor={'middle'} y={min + 18} fill={'white'}>
            $1198.98
          </Text>
        </G>
      </G>
    );

    const TooltipBottom = ({ x, y }) => (
      <G
        x={x(data.length - 1) - 75}
        key={'tooltipBottom'}
        onPress={() => alert('clicked')}>
        <G y={max * 2 + 45}>
          <Defs>
            <LinearGradient id="gradBottom" x1="0" y1="0" x2="0" y2="40">
              <Stop
                offset="0"
                stopColor={bosonColor.$bosonLightBlue}
                stopOpacity="1"
              />
              <Stop
                offset="1"
                stopColor={bosonColor.$bosonLightBlue}
                stopOpacity="1"
              />
            </LinearGradient>
          </Defs>
          <Rect
            height={30}
            width={75}
            stroke={bosonColor.$bosonLightBlue}
            fill="url(#gradBottom)"
            ry={2}
            rx={2}
          />
          <Text x={75 / 2} textAnchor={'middle'} y={20} fill={'white'}>
            $68.98
          </Text>
        </G>
      </G>
    );

    const HorizontalLineTop = ({ y }) => (
      <Line
        key={'zero-axis-top'}
        x1={'0%'}
        x2={'100%'}
        y1={y(max)}
        y2={y(max)}
        stroke={bosonColor.$bosonLightBlue}
        strokeDasharray={[4, 8]}
        strokeWidth={1}
      />
    );

    const HorizontalLineBottom = ({ y }) => (
      <Line
        key={'zero-axis-bottom'}
        x1={'0%'}
        x2={'100%'}
        y1={y(min)}
        y2={y(min)}
        stroke={bosonColor.$bosonLightBlue}
        strokeDasharray={[4, 8]}
        strokeWidth={1}
      />
    );

    return (
      <Container>
        <LunesChartPeriod
          range={this.props.range}
          onChangeRange={this.props.changeRange}
        />
        <View style={{ position: 'absolute', width: width, height: '100%' }}>
          <AreaChart
            style={{ height: 250 }}
            dataPoints={data}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveNatural}
            showGrid={false}
            extras={[
              HorizontalLineTop,
              HorizontalLineBottom,
              TooltipTop,
              TooltipBottom,
            ]}
            renderExtra={({ item, ...args }) => item(args)}
            svg={{
              stroke: bosonColor.$bosonDarkYellow,
              strokeWidth: 7,
            }}
            renderDecorator={({ x, y, index, value }) => (
              <Circle
                onPress={() => alert('clicked')}
                key={index}
                cx={x(index)}
                cy={y(value)}
                r={6}
                stroke={'rgb(255, 255, 255)'}
                fill={'white'}
              />
            )}
            renderGradient={({ id }) => (
              <LinearGradient id={id} x1={'0%'} y={'0%'} x2={'0%'} y2={test}>
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

const styles = StyleSheet.create({});
