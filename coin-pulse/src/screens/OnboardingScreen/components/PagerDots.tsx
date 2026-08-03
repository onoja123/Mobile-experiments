import { View } from 'react-native';
import Animated, { interpolateColor, useAnimatedStyle } from 'react-native-reanimated';

import { colors } from '@/theme/colors';
import { PagerDotsProps } from './SlideIllustration.types';

function Dot({ index, progress }: { index: number; progress: PagerDotsProps['progress'] }) {
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [index - 1, index, index + 1],
      [colors.mist, colors.ink, colors.mist],
    ),
  }));

  return <Animated.View className="h-1.5 w-1.5 rounded-full" style={animatedStyle} />;
}

export default function PagerDots({ count, progress }: PagerDotsProps) {
  return (
    <View className="flex-row items-center gap-1.5">
      {Array.from({ length: count }, (_, index) => (
        <Dot key={index} index={index} progress={progress} />
      ))}
    </View>
  );
}
