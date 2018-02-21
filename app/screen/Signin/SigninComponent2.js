// @flow
import React from 'react';
import _ from 'lodash';
import { View, Dimensions } from 'react-native';
import { Container, Text } from 'native-base';
import {
  Circle,
  G,
  LinearGradient,
  Line,
  Rect,
  Defs,
  Stop,
} from 'react-native-svg';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import bosonColor from '../../native-base-theme/variables/bosonColor';
import LunesChartPeriod from '../../native-base-theme/components/LunesChartPeriod';

const { width } = Dimensions.get('window');

export default class Signin extends React.Component<{}> {
  render() {
    const data = [20, 2, 30, 15, 35, 40, 50, 45, 80];
    const max = _.max(data);
    const min = _.min(data);

    const TooltipTop = ({ x }) => (
      <G
        x={x(data.length - 1) - 75}
        key={'tooltipTop'}
        // eslint-disable-next-line
        onPress={() => alert('clicked')}>
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
          <Text x={x(100)} textAnchor={'middle'} y={10} stroke={'rgb(0, 0, 0)'}>
            $1198.98
          </Text>
        </G>
      </G>
    );

    const TooltipBottom = ({ x }) => (
      <G
        x={x(data.length - 1) - 75}
        key={'tooltipBottom'}
        // eslint-disable-next-line
        onPress={() => alert('clicked')}>
        <G y={max}>
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
        key={'zero-axis-top'}
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
        key={'zero-axis-bottom'}
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
        <LunesChartPeriod />
        <View style={{ position: 'absolute', width, height: 300 }}>
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
            gridMin={0}
            renderDecorator={(x, y, index, value) => (
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
