import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  type SharedValue,
} from 'react-native-reanimated';
import { haptics } from '@/services/haptics.service';
import { springs } from '@/theme';
import { KNOB, styles } from './styles';

const STEP = 100;

type InvestmentSliderProps = {
  fraction: SharedValue<number>;
  minInvestment: number;
  maxInvestment: number;
  onAmountChange: (amount: number) => void;
};

export function InvestmentSlider({
  fraction,
  minInvestment,
  maxInvestment,
  onAmountChange,
}: InvestmentSliderProps) {
  const [trackWidth, setTrackWidth] = useState(0);
  const range = maxInvestment - minInvestment;
  const width = useSharedValue(0);

  useEffect(() => {
    width.value = trackWidth;
  }, [trackWidth, width]);

  const emitAmount = useCallback(
    (next: number) => {
      if (next % 1000 === 0) haptics.selection();
      onAmountChange(next);
    },
    [onAmountChange],
  );

  useAnimatedReaction(
    () => {
      const raw = minInvestment + fraction.value * range;
      return Math.min(
        maxInvestment,
        Math.max(minInvestment, Math.round(raw / STEP) * STEP),
      );
    },
    (next, previous) => {
      if (previous !== null && next !== previous) {
        runOnJS(emitAmount)(next);
      }
    },
    [emitAmount, minInvestment, maxInvestment, range],
  );

  const pan = Gesture.Pan()
    .activeOffsetX([-6, 6])
    .failOffsetY([-12, 12])
    .onUpdate((event) => {
      if (width.value <= 0) return;
      fraction.value = Math.min(1, Math.max(0, event.x / width.value));
    });

  const tap = Gesture.Tap().onEnd((event) => {
    if (width.value <= 0) return;
    fraction.value = withSpring(
      Math.min(1, Math.max(0, event.x / width.value)),
      springs.roll,
    );
  });

  const slider = Gesture.Race(pan, tap);

  const fillStyle = useAnimatedStyle(() => ({
    opacity: width.value > 0 ? 1 : 0,
    transform: [{ translateX: -(1 - fraction.value) * width.value }],
  }));

  const knobStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: fraction.value * Math.max(0, width.value - KNOB) }],
  }));

  return (
    <GestureDetector gesture={slider}>
      <View
        style={styles.sliderHitArea}
        onLayout={(event) => setTrackWidth(event.nativeEvent.layout.width)}
        accessible
        accessibilityRole="adjustable"
        accessibilityLabel="Investment amount slider"
      >
        <View style={styles.track}>
          <Animated.View style={[styles.fill, fillStyle]} />
        </View>
        <Animated.View style={[styles.knob, knobStyle]} />
      </View>
    </GestureDetector>
  );
}
