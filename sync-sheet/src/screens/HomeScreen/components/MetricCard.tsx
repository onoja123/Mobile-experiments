import { StyleSheet, Text, View } from 'react-native';
import { SymbolView, type SFSymbol } from 'expo-symbols';

import { usePalette } from '@/theme';

type MetricCardProps = {
  symbol: SFSymbol;
  tint: string;
  label: string;
  value: string;
  unit: string;
  caption: string;
};

export default function MetricCard({ symbol, tint, label, value, unit, caption }: MetricCardProps) {
  const palette = usePalette();

  return (
    <View style={[styles.card, { backgroundColor: palette.sheet }]}>
      <View style={styles.header}>
        <SymbolView name={symbol} size={16} tintColor={tint} />
        <Text style={[styles.label, { color: tint }]}>{label}</Text>
      </View>
      <View style={styles.valueRow}>
        <Text style={[styles.value, { color: palette.label }]}>{value}</Text>
        <Text style={[styles.unit, { color: palette.secondaryLabel }]}>{unit}</Text>
      </View>
      <Text style={[styles.caption, { color: palette.secondaryLabel }]}>{caption}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderCurve: 'continuous',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 6,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    columnGap: 4,
    marginTop: 10,
  },
  value: {
    fontSize: 28,
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
  },
  unit: {
    fontSize: 15,
    fontWeight: '600',
  },
  caption: {
    fontSize: 13,
    marginTop: 4,
  },
});
