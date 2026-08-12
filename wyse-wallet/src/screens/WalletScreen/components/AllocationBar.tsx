import { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';

import { tokens } from '@/data/tokens';
import { colors } from '@/theme';

function Segment({ ratio, color, delay }: { ratio: number; color: string; delay: number }) {
  const grow = useSharedValue(0);

  useEffect(() => {
    grow.value = withDelay(delay, withTiming(1, { duration: 520 }));
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scaleX: grow.value }] }));

  return (
    <View style={{ flex: ratio, height: 8, borderRadius: 4, overflow: 'hidden' }}>
      <Animated.View
        style={[
          { flex: 1, backgroundColor: color, borderRadius: 4, transformOrigin: 'left' },
          animatedStyle,
        ]}
      />
    </View>
  );
}

export default function AllocationBar() {
  const segments = [
    { id: 'btc', color: colors.bitcoin },
    { id: 'eth', color: colors.ethereum },
    { id: 'usdt', color: colors.tether },
  ];

  return (
    <View className="mt-5 px-5">
      <View className="flex-row items-center justify-between">
        <Text className="font-sans text-[13px] text-smoke">Allocation</Text>
        <Text className="font-sans text-[13px] text-smoke">3 assets</Text>
      </View>
      <View className="mt-2.5 flex-row gap-1">
        {segments.map((segment, index) => {
          const token = tokens.find((item) => item.id === segment.id);
          return (
            <Segment
              key={segment.id}
              ratio={token?.allocation ?? 1}
              color={segment.color}
              delay={index * 90}
            />
          );
        })}
      </View>
      <View className="mt-3 flex-row flex-wrap gap-x-4 gap-y-1.5">
        {segments.map((segment) => {
          const token = tokens.find((item) => item.id === segment.id);
          return (
            <View key={segment.id} className="flex-row items-center">
              <View
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: segment.color }}
              />
              <Text className="ml-1.5 font-sans text-[12px] text-smoke">
                {token?.name} {token?.allocation}%
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
