import { View } from 'react-native';

import { HistogramBar } from './HistogramBar';
import { BAR_GAP, DEMAND_BAR_HEIGHTS, HISTOGRAM_HEIGHT } from './PriceRangeSlider.constants';
import { DemandHistogramProps } from './PriceRangeSlider.types';

export function DemandHistogram({ barWidth, lowX, highX }: DemandHistogramProps) {
  return (
    <View className="flex-row items-end" style={{ gap: BAR_GAP, height: HISTOGRAM_HEIGHT }}>
      {DEMAND_BAR_HEIGHTS.map((height, index) => (
        <HistogramBar
          key={index}
          index={index}
          barWidth={barWidth}
          height={height}
          lowX={lowX}
          highX={highX}
        />
      ))}
    </View>
  );
}
