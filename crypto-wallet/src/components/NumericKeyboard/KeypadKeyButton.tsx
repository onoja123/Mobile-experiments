import React, { memo, useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { haptics } from '@/services/haptics.service';
import { colors, springs } from '@/theme';
import type { KeypadKey } from './NumericKeyboard.types';
import { styles } from './styles';

type KeypadKeyButtonProps = {
  label: KeypadKey;
  onKey: (key: KeypadKey) => void;
  onClearAll?: () => void;
};

export const KeypadKeyButton = memo(function KeypadKeyButton({
  label,
  onKey,
  onClearAll,
}: KeypadKeyButtonProps) {
  const pressed = useSharedValue(0);
  const rippleScale = useSharedValue(0.6);
  const rippleOpacity = useSharedValue(0);

  const handlePressIn = useCallback(() => {
    pressed.value = withSpring(1, springs.press);
    rippleScale.value = 0.6;
    rippleScale.value = withSpring(1, springs.pop);
    rippleOpacity.value = withTiming(0.06, { duration: 80 });
    if (label === 'del') haptics.press();
    else haptics.tap();
  }, [label, pressed, rippleOpacity, rippleScale]);

  const handlePressOut = useCallback(() => {
    pressed.value = withSpring(0, springs.press);
    rippleOpacity.value = withTiming(0, { duration: 280 });
  }, [pressed, rippleOpacity]);

  const scaleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: 1 - pressed.value * 0.06 }],
  }));

  const rippleStyle = useAnimatedStyle(() => ({
    opacity: rippleOpacity.value,
    transform: [{ scale: rippleScale.value }],
  }));

  return (
    <Pressable
      className="h-[56px] flex-1 items-center justify-center"
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => onKey(label)}
      onLongPress={label === 'del' ? onClearAll : undefined}
      accessibilityRole="button"
      accessibilityLabel={label === 'del' ? 'Delete' : label === '.' ? 'Decimal point' : label}
      accessibilityHint={label === 'del' ? 'Long press to clear the amount' : undefined}
    >
      <Animated.View style={[styles.ripple, rippleStyle]} />
      <Animated.View style={scaleStyle}>
        {label === 'del' ? (
          <Feather name="delete" size={23} color={colors.ink} />
        ) : (
          <Text
            className="text-[26px] font-semibold text-ink"
            maxFontSizeMultiplier={1.3}
          >
            {label}
          </Text>
        )}
      </Animated.View>
    </Pressable>
  );
});
