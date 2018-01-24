// @flow
import React from 'react';
import { View, Image, Dimensions } from 'react-native';
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
    const data = [20, 5, 30, 15, 35, 40, 50, 45, 59];

    const Tooltip = ({ x, y }) => (
      <G
        x={x(data.length - 1) - 75}
        key={'tooltip'}
        onPress={() => alert('clicked')}>
        <G y={13}>
          <Rect
            height={30}
            width={75}
            stroke={'grey'}
            fill={'white'}
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
        y1={y(59)}
        y2={y(59)}
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
        y1={y(10)}
        y2={y(10)}
        stroke={bosonColor.$bosonLightBlue}
        strokeDasharray={[4, 8]}
        strokeWidth={2}
      />
    );

    return (
      <Container>
        <View style={{ width: width, height: 300 }}>
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
                  stopOpacity={0.2}
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
