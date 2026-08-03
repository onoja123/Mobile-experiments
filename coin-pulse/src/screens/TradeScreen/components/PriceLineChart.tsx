import { useState } from 'react';
import { LayoutChangeEvent, Text, View } from 'react-native';
import Svg, { Circle, Polyline, Rect } from 'react-native-svg';

import { CHART_HEIGHT } from '@/constants/layout';
import { colors } from '@/theme/colors';
import { PriceLineChartProps } from '../TradeScreen.types';

const TOP_INSET = 34;
const BOTTOM_INSET = 30;
const SIDE_INSET = 16;
const FOCUS_TOP = 26;
const FOCUS_BOTTOM = 20;

export default function PriceLineChart({
  points,
  markerIndices,
  focusStartIndex,
  highLabel,
  lowLabel,
}: PriceLineChartProps) {
  const [width, setWidth] = useState(0);

  const onLayout = (event: LayoutChangeEvent) => setWidth(event.nativeEvent.layout.width);

  const plotWidth = width - SIDE_INSET * 2;
  const xAt = (index: number) => SIDE_INSET + (index / (points.length - 1)) * plotWidth;
  const yAt = (value: number) => TOP_INSET + (1 - value) * (CHART_HEIGHT - TOP_INSET - BOTTOM_INSET);

  return (
    <View style={{ height: CHART_HEIGHT }} onLayout={onLayout}>
      {width > 0 && (
        <Svg width={width} height={CHART_HEIGHT}>
          <Rect
            x={xAt(focusStartIndex)}
            y={FOCUS_TOP}
            width={width - SIDE_INSET - xAt(focusStartIndex)}
            height={CHART_HEIGHT - FOCUS_TOP - FOCUS_BOTTOM}
            fill="none"
            stroke="#DCD9D4"
            strokeWidth={1}
            strokeDasharray="3 5"
          />
          <Polyline
            points={points.map((value, index) => `${xAt(index)},${yAt(value)}`).join(' ')}
            fill="none"
            stroke={colors.violet}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {markerIndices.map((index) => (
            <Circle
              key={index}
              cx={xAt(index)}
              cy={yAt(points[index])}
              r={5}
              fill={colors.white}
              stroke={colors.violet}
              strokeWidth={2}
            />
          ))}
        </Svg>
      )}
      <Text className="font-sans absolute right-4 top-2 text-[10px] text-smoke">{highLabel}</Text>
      <Text className="font-sans absolute bottom-2 left-4 text-[10px] text-smoke">{lowLabel}</Text>
    </View>
  );
}
