import React, { useEffect } from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { colors, springs } from '@/theme';
import { PressableScale } from '../PressableScale';
import type { PrimaryButtonProps } from './PrimaryButton.types';
import { styles } from './styles';

export function PrimaryButton({ enabled, onPress, label = 'Continue' }: PrimaryButtonProps) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withSpring(enabled ? 1 : 0, springs.pop);
  }, [enabled, progress]);

  const fillStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      [colors.disabled, colors.accent],
    ),
    transform: [{ scale: 1 + progress.value * 0.02 }],
    shadowOpacity: progress.value * 0.4,
    elevation: progress.value * 8,
  }));

  const labelStyle = useAnimatedStyle(() => ({
    color: interpolateColor(progress.value, [0, 1], [colors.subtle, '#FFFFFF']),
  }));

  return (
    <PressableScale
      scaleTo={0.97}
      haptic="press"
      disabled={!enabled}
      onPress={onPress}
      accessibilityLabel={label}
      accessibilityState={{ disabled: !enabled }}
    >
      <Animated.View style={[styles.fill, fillStyle]}>
        <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>
      </Animated.View>
    </PressableScale>
  );
}
