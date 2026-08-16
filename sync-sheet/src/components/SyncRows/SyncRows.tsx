import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import { SymbolView, type SFSymbol } from 'expo-symbols';

import { GROW_SPRING } from '@/constants/springs';
import { usePalette } from '@/theme';

import type { SyncRowsProps } from './SyncRows.types';

const ROWS: { symbol: SFSymbol; text: string }[] = [
  {
    symbol: 'square.and.arrow.up',
    text: 'Every workout you record here gets bragged about to Apple Health.',
  },
  {
    symbol: 'applewatch',
    text: 'Your Apple Watch tattles on your heart rate in real time.',
  },
  {
    symbol: 'flame',
    text: 'Calories burned dragging this sheet count. All twelve of them.',
  },
  {
    symbol: 'figure.walk',
    text: "Steps to the fridge sync as cardio. We don't judge.",
  },
];

export const ROW_COUNT = ROWS.length;
export const ROWS_PER_PRESS = 2;

const ROW_HEIGHT = 44;
const ROW_GAP = 12;
// The gap above the rows rides inside the animated height so the collapsed
// state adds no dead space between caption and button.
const TOP_GAP = 12;

function revealHeightFor(count: number) {
  return count === 0 ? 0 : TOP_GAP + count * ROW_HEIGHT + (count - 1) * ROW_GAP;
}

export default function SyncRows({ count }: SyncRowsProps) {
  const height = useSharedValue(0);

  useEffect(() => {
    height.set(withSpring(revealHeightFor(count), GROW_SPRING));
  }, [count, height]);

  const revealStyle = useAnimatedStyle(() => ({
    height: height.get(),
  }));

  return (
    <Animated.View style={[styles.reveal, revealStyle]}>
      {ROWS.map((row, index) => (
        <Row
          key={row.symbol}
          symbol={row.symbol}
          text={row.text}
          visible={index < count}
          delay={(index % ROWS_PER_PRESS) * 80}
        />
      ))}
    </Animated.View>
  );
}

type RowProps = {
  symbol: SFSymbol;
  text: string;
  visible: boolean;
  delay: number;
};

function Row({ symbol, text, visible, delay }: RowProps) {
  const palette = usePalette();
  const progress = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      progress.set(withDelay(delay, withSpring(1, GROW_SPRING)));
    } else {
      progress.set(0);
    }
  }, [visible, delay, progress]);

  const rowStyle = useAnimatedStyle(() => ({
    opacity: progress.get(),
    transform: [{ translateY: (1 - progress.get()) * 14 }],
  }));

  return (
    <Animated.View style={[styles.row, rowStyle]}>
      <View style={styles.rowIcon}>
        <SymbolView name={symbol} size={20} tintColor={palette.secondaryLabel} />
      </View>
      <Text style={[styles.rowText, { color: palette.label }]}>{text}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  reveal: {
    overflow: 'hidden',
    paddingTop: TOP_GAP,
    gap: ROW_GAP,
  },
  row: {
    height: ROW_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 14,
  },
  rowIcon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 20,
  },
});
