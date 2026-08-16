import { Pressable, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { SymbolView, type SFSymbol } from 'expo-symbols';
import * as Haptics from 'expo-haptics';

import { PRESS_SPRING } from '@/constants/springs';
import { colors } from '@/theme';

type TransportControlsProps = {
  playing: boolean;
  onTogglePlay: () => void;
  onSkip: (direction: -1 | 1) => void;
};

export default function TransportControls({
  playing,
  onTogglePlay,
  onSkip,
}: TransportControlsProps) {
  return (
    <View style={styles.row}>
      <ControlButton symbol="backward.fill" size={26} onPress={() => onSkip(-1)} />
      <ControlButton
        symbol={playing ? 'pause.fill' : 'play.fill'}
        size={38}
        onPress={onTogglePlay}
      />
      <ControlButton symbol="forward.fill" size={26} onPress={() => onSkip(1)} />
    </View>
  );
}

type ControlButtonProps = {
  symbol: SFSymbol;
  size: number;
  onPress: () => void;
};

function ControlButton({ symbol, size, onPress }: ControlButtonProps) {
  const scale = useSharedValue(1);

  const pressStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.get() }],
  }));

  return (
    <Animated.View style={pressStyle}>
      <Pressable
        hitSlop={14}
        style={styles.button}
        onPressIn={() => scale.set(withSpring(0.85, PRESS_SPRING))}
        onPressOut={() => scale.set(withSpring(1, PRESS_SPRING))}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          onPress();
        }}>
        <SymbolView name={symbol} size={size} tintColor={colors.label} />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 52,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 44,
    minHeight: 44,
  },
});
