import Animated, {
  interpolateColor,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { palette } from '@/theme';

import {
  BAR_LIFT_SCALE,
  BAR_RADIUS,
  LIFT_SETTLE_SPRING,
  LIFT_SPRING,
  RIPPLE_FLIP_MS,
  RIPPLE_STAGGER_MS,
} from './PriceRangeSlider.constants';
import { HistogramBarProps } from './PriceRangeSlider.types';

function barIndexAt(frac: number, barCount: number) {
  'worklet';
  return Math.min(barCount - 1, Math.max(0, Math.round(frac * barCount - 0.5)));
}

export function HistogramBar({
  index,
  barWidth,
  height,
  centerFrac,
  barCount,
  loFrac,
  hiFrac,
  activeThumb,
}: HistogramBarProps) {
  const color = useSharedValue(0);
  const lift = useSharedValue(1);

  useAnimatedReaction(
    () => {
      const active = centerFrac >= loFrac.value && centerFrac <= hiFrac.value;
      const thumb = activeThumb.value;
      const originFrac = thumb === 0 ? loFrac.value : thumb === 1 ? hiFrac.value : null;
      return { active, originFrac };
    },
    (curr, prev) => {
      if (prev === null) {
        color.value = curr.active ? 1 : 0;
        return;
      }
      if (curr.active === prev.active) return;
      const originIndex = curr.originFrac === null ? index : barIndexAt(curr.originFrac, barCount);
      const delay = Math.abs(index - originIndex) * RIPPLE_STAGGER_MS;
      color.value = withDelay(delay, withTiming(curr.active ? 1 : 0, { duration: RIPPLE_FLIP_MS }));
    },
  );

  useAnimatedReaction(
    () => {
      const thumb = activeThumb.value;
      if (thumb === -1) return false;
      const frac = thumb === 0 ? loFrac.value : hiFrac.value;
      return barIndexAt(frac, barCount) === index;
    },
    (underThumb, prev) => {
      if (underThumb === prev) return;
      lift.value = underThumb
        ? withSpring(BAR_LIFT_SCALE, LIFT_SPRING)
        : withSpring(1, LIFT_SETTLE_SPRING);
    },
  );

  const style = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(color.value, [0, 1], [palette.sliderTrack, palette.ink]),
    transform: [{ scaleY: lift.value }],
  }));

  return (
    <Animated.View
      style={[
        { width: barWidth, height, borderRadius: BAR_RADIUS, transformOrigin: 'bottom' },
        style,
      ]}
    />
  );
}
