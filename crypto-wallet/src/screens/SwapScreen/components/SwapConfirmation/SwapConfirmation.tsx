import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { Feather } from '@expo/vector-icons';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeOut,
  ZoomIn,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { LoadingRing } from '@/components/LoadingRing';
import { PressableScale } from '@/components/PressableScale';
import { TokenIcon } from '@/components/TokenIcon';
import { haptics } from '@/services/haptics.service';
import { colors, springs } from '@/theme';
import { RING, styles } from './styles';
import type { SwapConfirmationProps } from './SwapConfirmation.types';

const PROCESSING_MS = 1900;
const ICON_APART = 46;
const ICON_CLOSE = 20;

function cardIn() {
  'worklet';
  return {
    initialValues: { opacity: 0, transform: [{ scale: 0.92 }, { translateY: 14 }] },
    animations: {
      opacity: withTiming(1, { duration: 240 }),
      transform: [
        { scale: withSpring(1, springs.pop) },
        { translateY: withSpring(0, springs.pop) },
      ],
    },
  };
}

export function SwapConfirmation({
  visible,
  fromToken,
  toToken,
  summary,
  onDone,
}: SwapConfirmationProps) {
  const [stage, setStage] = useState<'processing' | 'success'>('processing');
  const approach = useSharedValue(0);

  useEffect(() => {
    if (!visible) return undefined;
    setStage('processing');
    approach.value = 0;
    approach.value = withSpring(1, springs.sheet);
    const timer = setTimeout(() => {
      setStage('success');
      haptics.success();
    }, PROCESSING_MS);
    return () => clearTimeout(timer);
  }, [visible, approach]);

  const fromIconStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: -ICON_APART + approach.value * (ICON_APART - ICON_CLOSE) },
    ],
  }));

  const toIconStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: ICON_APART - approach.value * (ICON_APART - ICON_CLOSE) },
    ],
  }));

  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <Animated.View
        entering={FadeIn.duration(240)}
        exiting={FadeOut.duration(200)}
        style={styles.backdrop}
      >
        <BlurView intensity={30} tint="dark" style={styles.blur}>
          <View className="flex-1 bg-black/25" />
        </BlurView>
      </Animated.View>

      <Animated.View entering={cardIn} exiting={FadeOut.duration(180)} style={styles.card}>
        {stage === 'processing' ? (
          <Animated.View
            key="processing"
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(180)}
            className="items-center"
          >
            <View style={styles.ringZone}>
              <LoadingRing size={RING} />
              <View style={styles.iconRow}>
                <Animated.View style={fromIconStyle}>
                  <TokenIcon id={fromToken.id} size={40} />
                </Animated.View>
                <Animated.View style={toIconStyle}>
                  <TokenIcon id={toToken.id} size={40} />
                </Animated.View>
              </View>
            </View>
            <Text className="mt-5 text-[16px] font-bold text-ink">Swapping</Text>
            <Text className="mt-1 text-[13px] text-subtle">{summary}</Text>
          </Animated.View>
        ) : (
          <Animated.View
            key="success"
            entering={FadeInDown.duration(280)}
            className="items-center self-stretch"
          >
            <Animated.View
              entering={ZoomIn.delay(80).springify().damping(13)}
              className="h-16 w-16 items-center justify-center rounded-full bg-gainSoft"
            >
              <Feather name="check" size={28} color={colors.gain} />
            </Animated.View>
            <Text className="mt-4 text-[18px] font-bold text-ink">Swap Complete</Text>
            <Text className="mt-1 text-[13px] text-subtle">{summary}</Text>
            <PressableScale
              haptic="press"
              onPress={onDone}
              className="mt-6 h-12 items-center justify-center self-stretch rounded-full bg-ink"
              accessibilityLabel="Done"
            >
              <Text className="text-[15px] font-bold text-white">Done</Text>
            </PressableScale>
          </Animated.View>
        )}
      </Animated.View>
    </View>
  );
}
