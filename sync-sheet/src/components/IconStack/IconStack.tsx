import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { POP_SPRING } from '@/constants/springs';

import AppTile from './AppTile';
import HealthTile from './HealthTile';
import { TILE_SIZE, TRAVEL } from './IconStack.constants';
import type { IconStackProps } from './IconStack.types';

export default function IconStack({ synced }: IconStackProps) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.set(withSpring(synced ? 1 : 0, POP_SPRING));
  }, [synced, progress]);

  const appStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${interpolate(progress.get(), [0, 1], [0, -6])}deg` }],
  }));

  // Starts fully occluded behind the app tile, then springs out to the right.
  const healthStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(progress.get(), [0, 1], [0, TRAVEL]) },
      { rotate: `${interpolate(progress.get(), [0, 1], [0, 8])}deg` },
      { scale: interpolate(progress.get(), [0, 1], [0.96, 1]) },
    ],
  }));

  return (
    <View style={styles.stage}>
      <Animated.View style={[styles.slot, healthStyle]}>
        <HealthTile />
      </Animated.View>
      <Animated.View style={[styles.slot, appStyle]}>
        <AppTile />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  stage: {
    width: TILE_SIZE + TRAVEL + 10,
    height: TILE_SIZE + 10,
    justifyContent: 'center',
  },
  slot: {
    position: 'absolute',
    left: 2,
  },
});
