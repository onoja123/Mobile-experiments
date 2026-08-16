import { Pressable, StyleSheet } from 'react-native';
import Animated, {
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

import { PRESS_SPRING } from '@/constants/springs';
import { usePalette } from '@/theme';

import type { ContinueButtonProps } from './ContinueButton.types';

export default function ContinueButton({ label, onPress }: ContinueButtonProps) {
  const palette = usePalette();
  const scale = useSharedValue(1);

  const pressStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.get() }],
  }));

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };

  return (
    <Animated.View style={pressStyle}>
      <Pressable
        style={[styles.button, { backgroundColor: palette.tint }]}
        onPressIn={() => scale.set(withSpring(0.96, PRESS_SPRING))}
        onPressOut={() => scale.set(withSpring(1, PRESS_SPRING))}
        onPress={handlePress}>
        <Animated.Text
          key={label}
          entering={FadeIn.duration(180)}
          style={[styles.label, { color: palette.onTint }]}>
          {label}
        </Animated.Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 25,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 17,
    fontWeight: '600',
  },
});
