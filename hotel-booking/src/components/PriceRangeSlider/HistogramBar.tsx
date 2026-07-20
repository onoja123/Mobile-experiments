import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { palette } from '@/theme';

import { BAR_GAP, BAR_RADIUS } from './PriceRangeSlider.constants';
import { HistogramBarProps } from './PriceRangeSlider.types';

export function HistogramBar({ index, barWidth, height, lowX, highX }: HistogramBarProps) {
  const style = useAnimatedStyle(() => {
    const center = index * (barWidth + BAR_GAP) + barWidth / 2;
    const active = center >= lowX.value && center <= highX.value;
    return { backgroundColor: active ? palette.ink : palette.sliderTrack };
  });

  return <Animated.View style={[{ width: barWidth, height, borderRadius: BAR_RADIUS }, style]} />;
}
