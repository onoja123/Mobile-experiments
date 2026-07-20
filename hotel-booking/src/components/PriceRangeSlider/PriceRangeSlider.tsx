import { useState } from 'react';
import { View } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { DemandHistogram } from './DemandHistogram';
import {
  BAR_GAP,
  DEFAULT_DOMAIN_MAX,
  DEFAULT_DOMAIN_MIN,
  DEMAND_BAR_HEIGHTS,
  PRICE_STEP,
  THUMB_SIZE,
} from './PriceRangeSlider.constants';
import { PriceRangeSliderProps } from './PriceRangeSlider.types';
import { SliderThumb } from './SliderThumb';

export function PriceRangeSlider({
  domainMin = DEFAULT_DOMAIN_MIN,
  domainMax = DEFAULT_DOMAIN_MAX,
  initialLow,
  initialHigh,
  onChange,
}: PriceRangeSliderProps) {
  const [width, setWidth] = useState(0);

  const lowX = useSharedValue(0);
  const highX = useSharedValue(0);

  useAnimatedReaction(
    () => {
      if (width === 0) return null;
      const ratio = (domainMax - domainMin) / width;
      const low = Math.round((domainMin + lowX.value * ratio) / PRICE_STEP) * PRICE_STEP;
      const high = Math.round((domainMin + highX.value * ratio) / PRICE_STEP) * PRICE_STEP;
      return { low, high };
    },
    (curr, prev) => {
      if (curr && (curr.low !== prev?.low || curr.high !== prev?.high)) {
        runOnJS(onChange)(curr.low, curr.high);
      }
    },
  );

  const lowPan = Gesture.Pan().onChange((e) => {
    lowX.value = Math.min(Math.max(0, lowX.value + e.changeX), highX.value - THUMB_SIZE);
  });
  const highPan = Gesture.Pan().onChange((e) => {
    highX.value = Math.max(Math.min(width, highX.value + e.changeX), lowX.value + THUMB_SIZE);
  });

  const activeTrackStyle = useAnimatedStyle(() => ({
    left: lowX.value,
    width: highX.value - lowX.value,
  }));

  const barWidth =
    width > 0 ? (width - BAR_GAP * (DEMAND_BAR_HEIGHTS.length - 1)) / DEMAND_BAR_HEIGHTS.length : 0;

  return (
    <View
      onLayout={(e) => {
        const w = e.nativeEvent.layout.width;
        if (w > 0 && width === 0) {
          lowX.value = ((initialLow - domainMin) / (domainMax - domainMin)) * w;
          highX.value = ((initialHigh - domainMin) / (domainMax - domainMin)) * w;
          setWidth(w);
        }
      }}
    >
      {width > 0 && (
        <>
          <DemandHistogram barWidth={barWidth} lowX={lowX} highX={highX} />

          <View className="mt-2 justify-center" style={{ height: THUMB_SIZE + 8 }}>
            <View className="h-[3px] rounded-full bg-line" />
            <Animated.View
              className="absolute h-[3px] rounded-full bg-ink"
              style={activeTrackStyle}
            />
            <SliderThumb gesture={lowPan} position={lowX} />
            <SliderThumb gesture={highPan} position={highX} />
          </View>
        </>
      )}
    </View>
  );
}
