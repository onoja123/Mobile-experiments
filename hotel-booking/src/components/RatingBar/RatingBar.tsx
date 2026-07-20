import { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import { RatingBarProps } from './RatingBar.types';

const MAX_SCORE = 5;
const FILL_DURATION_MS = 700;

export function RatingBar({ label, score, delay = 0 }: RatingBarProps) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withDelay(delay, withTiming(score / MAX_SCORE, { duration: FILL_DURATION_MS }));
  }, [delay, progress, score]);

  const fillStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  return (
    <View className="flex-row items-center">
      <Text className="w-[110px] font-jakarta-medium text-[13px] text-ink">{label}</Text>
      <View className="h-[4px] flex-1 overflow-hidden rounded-full bg-chip">
        <Animated.View className="h-full rounded-full bg-ink" style={fillStyle} />
      </View>
      <Text className="w-9 text-right font-jakarta-medium text-[12px] text-ink">
        {score.toFixed(1)}
      </Text>
    </View>
  );
}
