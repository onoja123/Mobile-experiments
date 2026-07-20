import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, {
  Easing,
  FadeInDown,
  FadeOut,
  interpolateColor,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { DOCK_BUTTON_SHIMMER, DOCK_ENTER_STAGGER, DURATIONS, SPRINGS } from '@/constants/animations';
import {
  DOCK_BUTTON_SIZE,
  DOCK_BUTTON_SPACING,
  DOCK_HOVER_SCALE,
  DOCK_RECEDE_SCALE,
  DOCK_TRIGGER_SCALE_BOOST,
} from '@/constants/dock';
import { NOTE_ACTIONS } from '@/constants/noteActions';
import { colors, fontFamilies, shadows } from '@/theme';
import Shimmer from '../Shimmer';
import type { DockButtonProps } from './ActionDock.types';

export default function DockButton({ index, hovered, triggered }: DockButtonProps) {
  const action = NOTE_ACTIONS[index];

  const hover = useDerivedValue(() =>
    withTiming(hovered.value === index || triggered.value === index ? 1 : 0, {
      duration: DURATIONS.dockHover,
      easing: Easing.out(Easing.quad),
    })
  );
  const scale = useDerivedValue(() =>
    withSpring(
      (hovered.value === index || triggered.value === index ? DOCK_HOVER_SCALE : 1) +
        (triggered.value === index ? DOCK_TRIGGER_SCALE_BOOST : 0),
      SPRINGS.dockButtonScale
    )
  );

  const shimmer = useSharedValue(0);
  useAnimatedReaction(
    () => hovered.value === index || triggered.value === index,
    (isHighlighted, wasHighlighted) => {
      if (isHighlighted && !wasHighlighted) {
        shimmer.value = 0;
        shimmer.value = withTiming(1, {
          duration: DURATIONS.dockShimmer,
          easing: Easing.inOut(Easing.quad),
        });
      }
    }
  );

  const presence = useDerivedValue(() =>
    withTiming(triggered.value >= 0 && triggered.value !== index ? 0 : 1, {
      duration: DURATIONS.dockRecede,
    })
  );

  const containerStyle = useAnimatedStyle(() => ({
    opacity: presence.value,
    transform: [{ scale: DOCK_RECEDE_SCALE + (1 - DOCK_RECEDE_SCALE) * presence.value }],
  }));
  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    backgroundColor: interpolateColor(hover.value, [0, 1], [colors.white, action.accent]),
  }));
  const darkIconStyle = useAnimatedStyle(() => ({ opacity: 1 - hover.value }));
  const lightIconStyle = useAnimatedStyle(() => ({ opacity: hover.value }));
  const labelStyle = useAnimatedStyle(() => ({
    opacity: hover.value * presence.value,
    transform: [{ translateY: 5 * (1 - hover.value) }],
  }));

  return (
    <Animated.View
      entering={FadeInDown.duration(DURATIONS.dockEnter)
        .delay(index * DOCK_ENTER_STAGGER)
        .easing(Easing.out(Easing.cubic))}
      exiting={FadeOut.duration(DURATIONS.dockExit)}
      style={[{ width: DOCK_BUTTON_SPACING, alignItems: 'center' }, containerStyle]}
    >
      <Animated.View
        style={[
          {
            width: DOCK_BUTTON_SIZE,
            height: DOCK_BUTTON_SIZE,
            borderRadius: DOCK_BUTTON_SIZE / 2,
            alignItems: 'center',
            justifyContent: 'center',
          },
          shadows.dockButton,
          circleStyle,
        ]}
      >
        <Animated.View style={darkIconStyle}>
          <Feather name={action.icon} size={20} color={colors.noteText} />
        </Animated.View>
        <Animated.View style={[{ position: 'absolute' }, lightIconStyle]}>
          <Feather name={action.icon} size={20} color={colors.white} />
        </Animated.View>
        <View
          pointerEvents="none"
          style={{
            position: 'absolute',
            width: DOCK_BUTTON_SIZE,
            height: DOCK_BUTTON_SIZE,
            borderRadius: DOCK_BUTTON_SIZE / 2,
            overflow: 'hidden',
          }}
        >
          <Shimmer
            progress={shimmer}
            width={DOCK_BUTTON_SIZE}
            height={DOCK_BUTTON_SIZE}
            band={DOCK_BUTTON_SHIMMER.band}
            opacity={DOCK_BUTTON_SHIMMER.opacity}
            skew={DOCK_BUTTON_SHIMMER.skew}
          />
        </View>
      </Animated.View>
      <Animated.Text
        style={[
          { marginTop: 8, fontSize: 12, color: colors.dockLabel, fontFamily: fontFamilies.semiBold },
          labelStyle,
        ]}
      >
        {action.label}
      </Animated.Text>
    </Animated.View>
  );
}
