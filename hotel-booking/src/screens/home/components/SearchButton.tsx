import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { POP_SPRING, SETTLE_SPRING } from '@/constants/animation';
import { shakeSequence } from '@/helpers/shakeSequence';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const IDLE_HEIGHT = 52;
const IDLE_RADIUS = 26;
const CIRCLE_SIZE = 56;
const RESULTS_HEIGHT = 88;
const RESULTS_RADIUS = 20;
const MORPH_MS = 450;
const MORPH_EASING = Easing.bezier(0.5, 0, 0.25, 1.1);
const FADE_MS = 200;
const CONTENT_FADE_DELAY_MS = 120;
const MIN_SPINNER_MS = 900;
const CHECK_HOLD_MS = 400;
const RESULTS_HOLD_MS = 1600;
const ERROR_HOLD_MS = 900;
const SPIN_MS = 800;

type SearchPhase = 'idle' | 'loading' | 'success' | 'results' | 'error';

type SearchSummary = {
  title: string;
  subtitle: string;
};

type SearchButtonProps = {
  search: () => Promise<SearchSummary>;
  onComplete: () => void;
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function SearchButton({ search, onComplete }: SearchButtonProps) {
  const [phase, setPhase] = useState<SearchPhase>('idle');
  const [fullWidth, setFullWidth] = useState(0);
  const [summary, setSummary] = useState<SearchSummary | null>(null);

  const pressScale = useSharedValue(1);
  const width = useSharedValue(0);
  const height = useSharedValue(IDLE_HEIGHT);
  const radius = useSharedValue(IDLE_RADIUS);
  const shakeX = useSharedValue(0);
  const labelOpacity = useSharedValue(1);
  const spinnerOpacity = useSharedValue(0);
  const spinnerRotation = useSharedValue(0);
  const checkOpacity = useSharedValue(0);
  const checkScale = useSharedValue(1);
  const alertOpacity = useSharedValue(0);
  const resultsOpacity = useSharedValue(0);

  const handlePress = async () => {
    if (phase !== 'idle' || fullWidth === 0) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setPhase('loading');

    width.value = fullWidth;
    width.value = withTiming(CIRCLE_SIZE, { duration: MORPH_MS, easing: MORPH_EASING });
    labelOpacity.value = withTiming(0, { duration: FADE_MS });
    spinnerOpacity.value = withDelay(FADE_MS, withTiming(1, { duration: FADE_MS }));
    spinnerRotation.value = 0;
    spinnerRotation.value = withRepeat(
      withTiming(360, { duration: SPIN_MS, easing: Easing.linear }),
      -1,
    );

    const startedAt = Date.now();
    try {
      const result = await search();
      await wait(Math.max(0, MIN_SPINNER_MS - (Date.now() - startedAt)));
      setSummary(result);

      spinnerOpacity.value = withTiming(0, { duration: FADE_MS });
      checkOpacity.value = withDelay(FADE_MS, withTiming(1, { duration: FADE_MS }));
      checkScale.value = 0.6;
      checkScale.value = withDelay(
        FADE_MS,
        withSequence(withSpring(1.15, POP_SPRING), withSpring(1, SETTLE_SPRING)),
      );
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setPhase('success');
      await wait(FADE_MS + CHECK_HOLD_MS);

      setPhase('results');
      checkOpacity.value = withTiming(0, { duration: FADE_MS });
      width.value = withTiming(fullWidth, { duration: MORPH_MS, easing: MORPH_EASING });
      height.value = withTiming(RESULTS_HEIGHT, { duration: MORPH_MS, easing: MORPH_EASING });
      radius.value = withTiming(RESULTS_RADIUS, { duration: MORPH_MS });
      resultsOpacity.value = withDelay(
        CONTENT_FADE_DELAY_MS,
        withTiming(1, { duration: FADE_MS + 50 }),
      );
      await wait(RESULTS_HOLD_MS);
      onComplete();
    } catch {
      spinnerOpacity.value = withTiming(0, { duration: FADE_MS });
      alertOpacity.value = withDelay(FADE_MS, withTiming(1, { duration: FADE_MS }));
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      shakeX.value = shakeSequence();
      setPhase('error');
      await wait(ERROR_HOLD_MS);

      alertOpacity.value = withTiming(0, { duration: FADE_MS });
      width.value = withTiming(fullWidth, { duration: MORPH_MS, easing: MORPH_EASING });
      labelOpacity.value = withDelay(FADE_MS, withTiming(1, { duration: FADE_MS }));
      await wait(MORPH_MS);
      width.value = 0;
      setPhase('idle');
    } finally {
      cancelAnimation(spinnerRotation);
    }
  };

  const buttonStyle = useAnimatedStyle(() => {
    const base = {
      height: height.value,
      borderRadius: radius.value,
      transform: [{ translateX: shakeX.value }, { scale: pressScale.value }],
    };
    return width.value === 0 ? base : { ...base, width: width.value };
  });
  const labelStyle = useAnimatedStyle(() => ({ opacity: labelOpacity.value }));
  const spinnerStyle = useAnimatedStyle(() => ({ opacity: spinnerOpacity.value }));
  const spinnerRingStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${spinnerRotation.value}deg` }],
  }));
  const checkStyle = useAnimatedStyle(() => ({
    opacity: checkOpacity.value,
    transform: [{ scale: checkScale.value }],
  }));
  const alertStyle = useAnimatedStyle(() => ({ opacity: alertOpacity.value }));
  const resultsStyle = useAnimatedStyle(() => ({ opacity: resultsOpacity.value }));

  return (
    <View
      className="flex-1 items-center"
      onLayout={(e) => setFullWidth(e.nativeEvent.layout.width)}
    >
      <AnimatedPressable
        className="w-full items-center justify-center overflow-hidden bg-pill"
        style={buttonStyle}
        disabled={phase !== 'idle'}
        onPress={handlePress}
        onPressIn={() => {
          if (phase === 'idle') pressScale.value = withSpring(0.96, SETTLE_SPRING);
        }}
        onPressOut={() => {
          pressScale.value = withSpring(1, SETTLE_SPRING);
        }}
      >
        <Animated.View className="absolute" style={labelStyle}>
          <Text className="font-jakarta-semibold text-[14px] text-white">Search</Text>
        </Animated.View>

        <Animated.View className="absolute" style={spinnerStyle}>
          <Animated.View
            className="h-5 w-5 rounded-full border-2 border-white"
            style={[{ borderTopColor: 'rgba(255, 255, 255, 0.25)' }, spinnerRingStyle]}
          />
        </Animated.View>

        <Animated.View className="absolute" style={checkStyle}>
          <Feather name="check" size={22} color="white" />
        </Animated.View>

        <Animated.View className="absolute" style={alertStyle}>
          <Feather name="alert-circle" size={22} color="white" />
        </Animated.View>

        {summary && (
          <Animated.View className="absolute items-center px-4" style={resultsStyle}>
            <Text className="font-jakarta-semibold text-[14px] text-white">{summary.title}</Text>
            <Text className="mt-1 font-jakarta text-[12px] text-white/70">{summary.subtitle}</Text>
          </Animated.View>
        )}
      </AnimatedPressable>
    </View>
  );
}
