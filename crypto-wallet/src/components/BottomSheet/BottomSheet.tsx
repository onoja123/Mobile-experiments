import React, { useCallback, useEffect, useState } from 'react';
import { Pressable, Text, View, useWindowDimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { haptics } from '@/services/haptics.service';
import { springs } from '@/theme';
import type { BottomSheetProps } from './BottomSheet.types';
import { styles } from './styles';

const DRAG_CLOSE_VELOCITY = 800;
const DRAG_CLOSE_RATIO = 0.35;

export function BottomSheet({ open, onClose, title, children }: BottomSheetProps) {
  const { height: windowHeight } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [mounted, setMounted] = useState(false);

  const translateY = useSharedValue(windowHeight);
  const sheetHeight = useSharedValue(windowHeight * 0.5);

  const finishClose = useCallback(() => {
    setMounted(false);
    onClose();
  }, [onClose]);

  const dismiss = useCallback(
    (velocity = 0) => {
      'worklet';
      translateY.value = withSpring(
        windowHeight,
        { ...springs.sheet, velocity },
        (finished) => {
          if (finished) runOnJS(finishClose)();
        },
      );
    },
    [finishClose, translateY, windowHeight],
  );

  useEffect(() => {
    if (open) {
      setMounted(true);
      haptics.tap();
    } else if (mounted) {
      dismiss();
    }
  }, [open, mounted, dismiss]);

  useEffect(() => {
    if (mounted && open) {
      translateY.value = withSpring(0, springs.sheet);
    }
  }, [mounted, open, translateY]);

  const pan = Gesture.Pan()
    .onUpdate((event) => {
      translateY.value =
        event.translationY >= 0
          ? event.translationY
          : -Math.pow(Math.abs(event.translationY), 0.72);
    })
    .onEnd((event) => {
      const shouldClose =
        event.velocityY > DRAG_CLOSE_VELOCITY ||
        translateY.value > sheetHeight.value * DRAG_CLOSE_RATIO;
      if (shouldClose) {
        dismiss(event.velocityY);
      } else {
        translateY.value = withSpring(0, {
          ...springs.sheet,
          velocity: event.velocityY,
        });
      }
    });

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateY.value, [0, sheetHeight.value], [1, 0], 'clamp'),
  }));

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  if (!mounted) return null;

  return (
    <View className="absolute inset-0" pointerEvents="box-none">
      <Animated.View style={[styles.backdrop, backdropStyle]}>
        <BlurView intensity={26} tint="dark" style={styles.blur}>
          <Pressable
            className="flex-1 bg-black/30"
            onPress={onClose}
            accessibilityRole="button"
            accessibilityLabel="Close"
          />
        </BlurView>
      </Animated.View>

      <GestureDetector gesture={pan}>
        <Animated.View
          style={[styles.sheet, { paddingBottom: insets.bottom + 16 }, sheetStyle]}
          onLayout={(event) => {
            sheetHeight.value = event.nativeEvent.layout.height;
          }}
          accessibilityViewIsModal
        >
          <View className="mb-4 h-[5px] w-10 self-center rounded-full bg-outline" />
          <Text className="mb-2 text-[20px] font-bold text-ink">{title}</Text>
          {children}
        </Animated.View>
      </GestureDetector>
    </View>
  );
}
