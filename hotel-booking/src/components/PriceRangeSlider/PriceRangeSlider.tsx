import { useState } from 'react';
import { View } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { DemandHistogram } from './DemandHistogram';
import {
  BAR_GAP,
  DEMAND_BAR_HEIGHTS,
  MIN_GAP_FRAC,
  THUMB_SIZE,
} from './PriceRangeSlider.constants';
import { PriceRangeSliderProps } from './PriceRangeSlider.types';
import { SliderThumb } from './SliderThumb';

export function PriceRangeSlider({ range }: PriceRangeSliderProps) {
  const [width, setWidth] = useState(0);
  const { loFrac, hiFrac, activeThumb } = range;

  const lowPan = Gesture.Pan()
    .onBegin(() => {
      activeThumb.value = 0;
    })
    .onChange((e) => {
      if (width === 0) return;
      const next = loFrac.value + e.changeX / width;
      loFrac.value = Math.min(Math.max(0, next), hiFrac.value - MIN_GAP_FRAC);
    })
    .onFinalize(() => {
      activeThumb.value = -1;
    });

  const highPan = Gesture.Pan()
    .onBegin(() => {
      activeThumb.value = 1;
    })
    .onChange((e) => {
      if (width === 0) return;
      const next = hiFrac.value + e.changeX / width;
      hiFrac.value = Math.max(Math.min(1, next), loFrac.value + MIN_GAP_FRAC);
    })
    .onFinalize(() => {
      activeThumb.value = -1;
    });

  const activeTrackStyle = useAnimatedStyle(() => ({
    left: loFrac.value * width,
    width: (hiFrac.value - loFrac.value) * width,
  }));

  const barWidth =
    width > 0 ? (width - BAR_GAP * (DEMAND_BAR_HEIGHTS.length - 1)) / DEMAND_BAR_HEIGHTS.length : 0;

  return (
    <View onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
      {width > 0 && (
        <>
          <DemandHistogram
            width={width}
            barWidth={barWidth}
            loFrac={loFrac}
            hiFrac={hiFrac}
            activeThumb={activeThumb}
          />

          <View className="mt-2 justify-center" style={{ height: THUMB_SIZE + 8 }}>
            <View className="h-[3px] rounded-full bg-line" />
            <Animated.View
              className="absolute h-[3px] rounded-full bg-ink"
              style={activeTrackStyle}
            />
            <SliderThumb
              gesture={lowPan}
              frac={loFrac}
              width={width}
              thumbIndex={0}
              activeThumb={activeThumb}
            />
            <SliderThumb
              gesture={highPan}
              frac={hiFrac}
              width={width}
              thumbIndex={1}
              activeThumb={activeThumb}
            />
          </View>
        </>
      )}
    </View>
  );
}
