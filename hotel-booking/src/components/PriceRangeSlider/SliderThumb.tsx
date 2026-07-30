import { GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { shadows } from '@/theme';

import { THUMB_GRAB_SCALE, THUMB_SIZE, THUMB_SPRING } from './PriceRangeSlider.constants';
import { SliderThumbProps } from './PriceRangeSlider.types';

export function SliderThumb({ gesture, frac, width, thumbIndex, activeThumb }: SliderThumbProps) {
  const grabScale = useSharedValue(1);

  useAnimatedReaction(
    () => activeThumb.value === thumbIndex,
    (grabbed, prev) => {
      if (grabbed === prev) return;
      grabScale.value = withSpring(grabbed ? THUMB_GRAB_SCALE : 1, THUMB_SPRING);
    },
  );

  const thumbStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: frac.value * width - THUMB_SIZE / 2 },
      { scale: grabScale.value },
    ],
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
