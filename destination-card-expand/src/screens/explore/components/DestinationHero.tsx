import React from 'react';

import { Image } from 'expo-image';

import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import IconCircleButton from '@/components/IconCircleButton';
import { HERO_HEIGHT, SCREEN_WIDTH } from '@/constants/layout';
import { radius } from '@/theme';
import type { Destination, Rect } from '@/types';

import CardTitleOverlay from './CardTitleOverlay';

type DestinationHeroProps = {
  destination: Destination;
  originRect: Rect;
  progress: SharedValue<number>;
  onClose: () => void;
};

export default function DestinationHero({
  destination,
  originRect,
  progress,
  onClose,
}: DestinationHeroProps) {
  const insets = useSafeAreaInsets();

  const frameStyle = useAnimatedStyle(() => {
    const p = progress.value;
    return {
      top: interpolate(p, [0, 1], [originRect.y, 0]),
      left: interpolate(p, [0, 1], [originRect.x, 0]),
      width: interpolate(p, [0, 1], [originRect.w, SCREEN_WIDTH]),
      height: interpolate(p, [0, 1], [originRect.h, HERO_HEIGHT]),
      borderRadius: interpolate(p, [0, 1], [radius.card, 0]),
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [0, 1],
      [originRect.w / SCREEN_WIDTH, 1],
    );
    return {
      transform: [
        { translateX: ((scale - 1) * SCREEN_WIDTH) / 2 },
        { translateY: ((scale - 1) * HERO_HEIGHT) / 2 },
        { scale },
      ],
    };
  });

  const controlsStyle = useAnimatedStyle(() => ({
    top: interpolate(progress.value, [0, 1], [18, insets.top + 6]),
  }));

  const backStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      progress.value,
      [0.35, 1],
      [0, 1],
      Extrapolation.CLAMP,
    ),
  }));

  return (
    <Animated.View
      style={[frameStyle, { position: 'absolute', overflow: 'hidden' }]}
    >
      <Animated.View
        style={[
          imageStyle,
          { position: 'absolute', width: SCREEN_WIDTH, height: HERO_HEIGHT },
        ]}
      >
        <Image
          source={destination.image}
          style={{ flex: 1 }}
          contentFit="cover"
        />
      </Animated.View>
      <CardTitleOverlay title={destination.title} />

      <Animated.View
        style={controlsStyle}
        className="absolute inset-x-[18px] flex-row items-center justify-between"
      >
        <Animated.View style={backStyle}>
          <IconCircleButton
            name="chevron-left"
            size={22}
            onPress={onClose}
            className="bg-white/30"
          />
        </Animated.View>
        <IconCircleButton name="heart" className="bg-white/30" />
      </Animated.View>
    </Animated.View>
  );
}
