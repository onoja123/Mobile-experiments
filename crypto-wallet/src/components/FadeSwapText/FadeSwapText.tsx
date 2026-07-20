import React from 'react';
import { Text } from 'react-native';
import Animated, { withSpring, withTiming } from 'react-native-reanimated';
import { springs } from '@/theme';
import type { FadeSwapTextProps } from './FadeSwapText.types';

function swapIn() {
  'worklet';
  return {
    initialValues: { opacity: 0, transform: [{ translateY: 8 }] },
    animations: {
      opacity: withTiming(1, { duration: 240 }),
      transform: [{ translateY: withSpring(0, springs.layout) }],
    },
  };
}

function swapOut() {
  'worklet';
  return {
    initialValues: { opacity: 1, transform: [{ translateY: 0 }] },
    animations: {
      opacity: withTiming(0, { duration: 160 }),
      transform: [{ translateY: withTiming(-8, { duration: 160 }) }],
    },
  };
}

export function FadeSwapText({ text, className, ...rest }: FadeSwapTextProps) {
  return (
    <Animated.View key={text} entering={swapIn} exiting={swapOut}>
      <Text className={className} {...rest}>
        {text}
      </Text>
    </Animated.View>
  );
}
