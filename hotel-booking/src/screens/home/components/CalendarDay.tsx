import { useEffect } from 'react';
import { Pressable } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { POP_SPRING, SETTLE_SPRING } from '@/constants/animation';
import { palette } from '@/theme';

export type DayState = 'none' | 'start' | 'end' | 'range';

const FILL_MS = 160;
const CLEAR_MS = 120;
const POP_SCALE = 1.08;
const CHIP_TRANSPARENT = 'rgba(243, 243, 241, 0)';

type CalendarDayProps = {
  day: number;
  state: DayState;
  sweepDelay: number;
  onPress: () => void;
};

export function CalendarDay({ day, state, sweepDelay, onPress }: CalendarDayProps) {
  const fill = useSharedValue(state === 'none' ? 0 : 1);
  const scale = useSharedValue(1);
  const isEdge = state === 'start' || state === 'end';

  useEffect(() => {
    if (state === 'none') {
      fill.value = withTiming(0, { duration: CLEAR_MS });
      scale.value = withSpring(1, SETTLE_SPRING);
      return;
    }
    fill.value = withDelay(sweepDelay, withTiming(1, { duration: FILL_MS }));
    if (state === 'start' || state === 'end') {
      scale.value = withDelay(
        sweepDelay,
        withSequence(withSpring(POP_SCALE, POP_SPRING), withSpring(1, SETTLE_SPRING)),
      );
    }
  }, [state, sweepDelay, fill, scale]);

  const fillStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      fill.value,
      [0, 1],
      [CHIP_TRANSPARENT, isEdge ? palette.ink : palette.chip],
    ),
    transform: [{ scale: scale.value }],
  }));
  const labelStyle = useAnimatedStyle(() => ({
    color: isEdge
      ? interpolateColor(fill.value, [0, 1], [palette.ink, palette.white])
      : palette.ink,
  }));

  return (
    <Pressable className="h-11 flex-1 items-center justify-center" onPress={onPress}>
      <Animated.View
        className="h-9 w-9 items-center justify-center rounded-full"
        style={fillStyle}
      >
        <Animated.Text className="font-jakarta-medium text-[13px]" style={labelStyle}>
          {day}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
}
