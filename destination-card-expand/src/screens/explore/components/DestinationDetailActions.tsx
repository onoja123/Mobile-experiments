import React from 'react';
import { Pressable, Text } from 'react-native';

import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { typography } from '@/theme';

type DestinationDetailActionsProps = {
  progress: SharedValue<number>;
  onExploreOptions: () => void;
  onReserve: () => void;
};

export default function DestinationDetailActions({
  progress,
  onExploreOptions,
  onReserve,
}: DestinationDetailActionsProps) {
  const insets = useSafeAreaInsets();
  const buttonSpacing = { marginBottom: (insets.bottom || 16) + 6 };

  const riseStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          progress.value,
          [0.55, 1],
          [140, 0],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  return (
    <Animated.View
      style={[riseStyle, { position: 'absolute', bottom: 0, left: 0, right: 0 }]}
      className="flex-row gap-3 bg-cream px-5 pt-3"
    >
      <Pressable
        onPress={onExploreOptions}
        className="h-14 flex-1 items-center justify-center rounded-full border border-black/10 bg-white active:opacity-80"
        style={buttonSpacing}
      >
        <Text className="font-semibold text-ink" style={typography.emphasis}>
          Explore options
        </Text>
      </Pressable>
      <Pressable
        onPress={onReserve}
        className="h-14 flex-1 items-center justify-center rounded-full bg-pill active:opacity-90"
        style={buttonSpacing}
      >
        <Text className="font-semibold text-white" style={typography.emphasis}>
          Reserve now
        </Text>
      </Pressable>
    </Animated.View>
  );
}
