import React, { useRef } from 'react';
import { Pressable, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { durations } from '@/constants/animation';
import {
  DESTINATION_CARD_HEIGHT,
  DESTINATION_CARD_WIDTH,
} from '@/constants/layout';
import { colors, radius } from '@/theme';
import type { Destination, Rect } from '@/types';

import CardTitleOverlay from './CardTitleOverlay';

type DestinationCardProps = {
  destination: Destination;
  hidden: boolean;
  onOpen: (destination: Destination, originRect: Rect) => void;
};

export default function DestinationCard({
  destination,
  hidden,
  onOpen,
}: DestinationCardProps) {
  const ref = useRef<View>(null);
  const pressed = useSharedValue(0);

  const pressStyle = useAnimatedStyle(() => ({
    transform: [{ scale: interpolate(pressed.value, [0, 1], [1, 0.975]) }],
  }));

  const open = () => {
    ref.current?.measureInWindow((x, y, w, h) =>
      onOpen(destination, { x, y, w, h }),
    );
  };

  return (
    <Animated.View style={pressStyle}>
      <Pressable
        ref={ref}
        onPress={open}
        onPressIn={() => {
          pressed.value = withTiming(1, { duration: durations.cardPressIn });
        }}
        onPressOut={() => {
          pressed.value = withTiming(0, { duration: durations.cardPressOut });
        }}
        className="overflow-hidden"
        style={{
          width: DESTINATION_CARD_WIDTH,
          height: DESTINATION_CARD_HEIGHT,
          borderRadius: radius.card,
          opacity: hidden ? 0 : 1,
        }}
      >
        <Image
          source={destination.image}
          style={{ flex: 1 }}
          contentFit="cover"
          transition={durations.imageFade}
        />
        <CardTitleOverlay title={destination.title} />
        <View className="absolute right-[18px] top-[18px] h-11 w-11 items-center justify-center rounded-full bg-white/30">
          <Feather name="heart" size={20} color={colors.white} />
        </View>
      </Pressable>
    </Animated.View>
  );
}
