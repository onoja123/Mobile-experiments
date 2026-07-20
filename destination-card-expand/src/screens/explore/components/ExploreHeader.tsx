import React from 'react';

import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import ScreenHeader from '@/components/ScreenHeader';

import SearchBar from './SearchBar';

export default function ExploreHeader({
  progress,
}: {
  progress: SharedValue<number>;
}) {
  const liftStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      progress.value,
      [0, 0.45],
      [1, 0],
      Extrapolation.CLAMP,
    ),
    transform: [
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [0, -36],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  return (
    <Animated.View style={liftStyle}>
      <ScreenHeader title="Explore" actionIcon="clock" />
      <SearchBar />
    </Animated.View>
  );
}
