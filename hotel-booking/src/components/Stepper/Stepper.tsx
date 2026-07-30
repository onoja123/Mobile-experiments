import { useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { SETTLE_SPRING } from '@/constants/animation';
import { shakeSequence } from '@/helpers/shakeSequence';

import { StepButton } from './StepButton';
import { DIGIT_ROW_HEIGHT, MAX_VALUE } from './Stepper.constants';
import { StepperProps } from './Stepper.types';

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export function Stepper({ value, min = 0, max = MAX_VALUE, onChange }: StepperProps) {
  const rollY = useSharedValue(-value * DIGIT_ROW_HEIGHT);
  const shakeX = useSharedValue(0);
  const rolledToRef = useRef(value);

  // step() rolls in the handler; this only catches external changes (e.g. Reset)
  useEffect(() => {
    if (value === rolledToRef.current) return;
    rolledToRef.current = value;
    rollY.value = withSpring(-value * DIGIT_ROW_HEIGHT, SETTLE_SPRING);
  }, [value, rollY]);

  const reject = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    shakeX.value = shakeSequence();
  };

  const step = (delta: number) => {
    const next = value + delta;
    if (next < min || next > max) {
      reject();
      return;
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    rolledToRef.current = next;
    rollY.value = withSpring(-next * DIGIT_ROW_HEIGHT, SETTLE_SPRING);
    onChange(next);
  };

  const windowStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeX.value }],
  }));
  const columnStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: rollY.value }],
  }));

  return (
    <View className="h-12 flex-row items-center justify-between rounded-full border border-line px-1.5">
      <StepButton icon="minus" onPress={() => step(-1)} />
      <Animated.View
        className="w-6 overflow-hidden"
        style={[{ height: DIGIT_ROW_HEIGHT }, windowStyle]}
      >
        <Animated.View style={columnStyle}>
          {DIGITS.map((digit) => (
            <Text
              key={digit}
              className="text-center font-jakarta-semibold text-[14px] text-ink"
              style={{ height: DIGIT_ROW_HEIGHT, lineHeight: DIGIT_ROW_HEIGHT }}
            >
              {digit}
            </Text>
          ))}
        </Animated.View>
      </Animated.View>
      <StepButton icon="plus" onPress={() => step(1)} />
    </View>
  );
}
