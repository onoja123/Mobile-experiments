import { Gesture } from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { iosEase } from '@/theme';
import {
  HEADER_SHIFT,
  PULL_DAMPING,
  PULL_MAX,
  PULL_TRIGGER,
} from '@/constants/pullToRefresh';

export function usePullToRefresh(
  refresh: () => void,
  spinner: SharedValue<number>,
  shift: SharedValue<number>,
) {
  const pull = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .activeOffsetY(12)
    .onUpdate((event) => {
      const drag = Math.max(0, event.translationY) * PULL_DAMPING;
      pull.value = Math.min(PULL_MAX, drag);
    })
    .onEnd(() => {
      if (pull.value >= PULL_TRIGGER) {
        runOnJS(refresh)();
      }
      pull.value = withTiming(0, { duration: 420, easing: iosEase });
    });

  const spinnerVisibility = useDerivedValue(() =>
    Math.max(spinner.value, Math.min(1, pull.value / PULL_TRIGGER)),
  );

  const spacerStyle = useAnimatedStyle(() => ({
    height: pull.value + shift.value * HEADER_SHIFT,
  }));

  return { panGesture, spinnerVisibility, spacerStyle };
}
