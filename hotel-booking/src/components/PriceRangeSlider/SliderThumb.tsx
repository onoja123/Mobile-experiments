import { GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { shadows } from '@/theme';

import { THUMB_SIZE } from './PriceRangeSlider.constants';
import { SliderThumbProps } from './PriceRangeSlider.types';

export function SliderThumb({ gesture, position }: SliderThumbProps) {
  const thumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value - THUMB_SIZE / 2 }],
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        className="absolute rounded-full border-[1.5px] border-ink/80 bg-white"
        style={[{ width: THUMB_SIZE, height: THUMB_SIZE }, shadows.sliderThumb, thumbStyle]}
      />
    </GestureDetector>
  );
}
