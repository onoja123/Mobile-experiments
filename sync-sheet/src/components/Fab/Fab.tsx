import { Pressable, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import * as Haptics from 'expo-haptics';

import Icon from '@/components/Icon';
import { PRESS_SPRING } from '@/constants/springs';

import type { FabProps } from './Fab.types';

const SIZE = 60;

export default function Fab({ onPress }: FabProps) {
  const insets = useSafeAreaInsets();
  const scale = useSharedValue(1);

  const pressStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.get() }],
  }));

  return (
    <Animated.View style={[styles.wrap, { bottom: insets.bottom + 24 }, pressStyle]}>
      <Pressable
        style={styles.button}
        onPressIn={() => scale.set(withSpring(0.9, PRESS_SPRING))}
        onPressOut={() => scale.set(withSpring(1, PRESS_SPRING))}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          onPress();
        }}>
        <Svg width={SIZE} height={SIZE} style={StyleSheet.absoluteFill}>
          <Defs>
            <LinearGradient id="fab" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0" stopColor="#FF5E9E" />
              <Stop offset="1" stopColor="#FF2D55" />
            </LinearGradient>
          </Defs>
          <Circle cx={SIZE / 2} cy={SIZE / 2} r={SIZE / 2} fill="url(#fab)" />
        </Svg>
        {/* Absolute too: on web an absolutely-positioned sibling paints over
            static ones, which would bury the glyph under the gradient. */}
        <View style={[StyleSheet.absoluteFill, styles.center]}>
          <Icon name="heart.fill" size={26} color="#FFFFFF" />
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    right: 24,
    shadowColor: '#FF2D55',
    shadowOpacity: 0.35,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
  },
  button: {
    width: SIZE,
    height: SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
