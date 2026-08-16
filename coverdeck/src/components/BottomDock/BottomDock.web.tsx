import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { tabBarController } from '@/tabBarController';
import { colors } from '@/theme';

import type { BottomDockProps } from './BottomDock.types';

type TabKey = 'deck' | 'browse' | 'library';

const ITEMS: { key: TabKey; label: string }[] = [
  { key: 'deck', label: 'Deck' },
  { key: 'browse', label: 'Browse' },
  { key: 'library', label: 'Library' },
];

// The native bar rasterizes PNG tab icons; on web they are redrawn as vectors
// so they stay crisp and tintable.
function TabGlyph({ name, color }: { name: TabKey; color: string }) {
  const stroke = {
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    fill: 'none',
  };

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      {name === 'deck' && (
        <>
          <Rect x="8" y="4" width="8" height="16" rx="1.5" {...stroke} />
          <Path d="M4.5 6.5v11" {...stroke} />
          <Path d="M19.5 6.5v11" {...stroke} />
        </>
      )}
      {name === 'browse' && (
        <>
          <Circle cx="11" cy="11" r="7" {...stroke} />
          <Path d="M16.5 16.5L21 21" {...stroke} />
        </>
      )}
      {name === 'library' && (
        <>
          <Path d="M9 18V5l12-2v13" {...stroke} />
          <Circle cx="6" cy="18" r="3" {...stroke} />
          <Circle cx="18" cy="16" r="3" {...stroke} />
        </>
      )}
    </Svg>
  );
}

export default function BottomDock({ selected, onSelect }: BottomDockProps) {
  const insets = useSafeAreaInsets();
  const compact = tabBarController.useCompact();

  return (
    <View
      style={[styles.wrap, { bottom: insets.bottom + 12 }]}
      pointerEvents="box-none">
      <Animated.View
        layout={LinearTransition.springify().damping(22).stiffness(220)}
        style={[styles.pill, { paddingVertical: compact ? 5 : 8 }]}>
        {ITEMS.map((item, index) => {
          const active = index === selected;
          return (
            <Pressable
              key={item.key}
              onPress={() => {
                tabBarController.expand();
                onSelect(index);
              }}
              style={[
                styles.item,
                { paddingHorizontal: compact ? 16 : 22 },
                active && styles.itemActive,
              ]}>
              <TabGlyph name={item.key} color={active ? colors.accent : colors.secondaryLabel} />
              {!compact && (
                <Text
                  style={[
                    styles.label,
                    { color: active ? colors.accent : colors.secondaryLabel },
                  ]}>
                  {item.label}
                </Text>
              )}
            </Pressable>
          );
        })}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    borderRadius: 30,
    borderCurve: 'continuous',
    backgroundColor: 'rgba(255,255,255,0.82)',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0,0,0,0.06)',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    borderRadius: 22,
    borderCurve: 'continuous',
  },
  itemActive: {
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  label: {
    marginTop: 3,
    fontSize: 11,
    fontWeight: '600',
  },
});
