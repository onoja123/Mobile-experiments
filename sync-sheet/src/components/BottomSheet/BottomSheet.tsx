import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View, useWindowDimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { LayoutChangeEvent } from 'react-native';

import { DISMISS_SPRING, SHEET_SPRING } from '@/constants/springs';
import { rubberBand } from '@/helpers/rubberBand';
import { colors } from '@/theme';

import type { BottomSheetProps } from './BottomSheet.types';

const EDGE_INSET = 10;
const RADIUS = 38;
const CLOSE_VELOCITY = 900;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const MAX_BLUR = 40;

export default function BottomSheet({ visible, onDismiss, children }: BottomSheetProps) {
  const [mounted, setMounted] = useState(visible);
  const { height: screenHeight } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const translateY = useSharedValue(screenHeight);
  const sheetHeight = useSharedValue(0);
  const presented = useSharedValue(false);
  const bottomInset = insets.bottom + EDGE_INSET;

  const handleClosed = () => {
    setMounted(false);
    onDismiss();
  };

  useEffect(() => {
    if (visible) {
      translateY.set(screenHeight);
      setMounted(true);
      return;
    }
    if (!mounted) return;
    presented.set(false);
    translateY.set(
      withSpring(sheetHeight.get() + bottomInset + 40, DISMISS_SPRING, (finished) => {
        if (finished) runOnJS(setMounted)(false);
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  // Presenting waits for the first layout so the spring starts from the sheet's real height.
  const handleLayout = (event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.height;
    sheetHeight.set(height);
    if (!presented.get() && visible) {
      presented.set(true);
      translateY.set(height + bottomInset);
      translateY.set(withSpring(0, SHEET_SPRING));
    }
  };

  const pan = Gesture.Pan()
    .activeOffsetY([-8, 8])
    .onChange((event) => {
      translateY.set(translateY.get() + event.changeY);
    })
    .onEnd((event) => {
      const shouldClose =
        translateY.get() > sheetHeight.get() * 0.4 || event.velocityY > CLOSE_VELOCITY;
      if (shouldClose) {
        presented.set(false);
        translateY.set(
          withSpring(
            sheetHeight.get() + bottomInset + 40,
            { ...DISMISS_SPRING, velocity: event.velocityY },
            (finished) => {
              if (finished) runOnJS(handleClosed)();
            },
          ),
        );
      } else {
        translateY.set(withSpring(0, { ...SHEET_SPRING, velocity: event.velocityY }));
      }
    });

  const sheetStyle = useAnimatedStyle(() => {
    const y = translateY.get();
    return { transform: [{ translateY: y < 0 ? rubberBand(y) : y }] };
  });

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateY.get(),
      [0, Math.max(sheetHeight.get(), 1)],
      [1, 0],
      Extrapolation.CLAMP,
    ),
  }));

  // Blur rides the sheet position, so dragging the sheet down sharpens the
  // background continuously instead of snapping on dismiss.
  const blurProps = useAnimatedProps(() => ({
    intensity: interpolate(
      translateY.get(),
      [0, Math.max(sheetHeight.get(), 1)],
      [MAX_BLUR, 0],
      Extrapolation.CLAMP,
    ),
  }));

  if (!mounted) return null;

  return (
    <>
      <AnimatedPressable style={styles.backdrop} onPress={onDismiss}>
        <AnimatedBlurView
          animatedProps={blurProps}
          tint="default"
          blurMethod="dimezisBlurView"
          style={styles.fill}
        />
        <Animated.View style={[styles.dim, backdropStyle]} />
      </AnimatedPressable>
      <GestureDetector gesture={pan}>
        <Animated.View
          onLayout={handleLayout}
          style={[
            styles.sheet,
            { bottom: bottomInset, backgroundColor: colors.sheet },
            sheetStyle,
          ]}>
          <View style={[styles.grabber, { backgroundColor: colors.grabber }]} />
          {children}
        </Animated.View>
      </GestureDetector>
    </>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  fill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  dim: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.18)',
  },
  sheet: {
    position: 'absolute',
    left: EDGE_INSET,
    right: EDGE_INSET,
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.22,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 12 },
    elevation: 24,
  },
  grabber: {
    alignSelf: 'center',
    width: 36,
    height: 5,
    borderRadius: 2.5,
    marginBottom: 14,
  },
});
