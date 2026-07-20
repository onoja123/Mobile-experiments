import { Pressable, StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";
import { Feather } from "@expo/vector-icons";
import { Blur, Canvas, Circle, ColorMatrix, Group, Paint } from "@shopify/react-native-skia";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  ACTION_DIAMETER,
  BACKDROP_BLUR_INTENSITY,
  FAB_CANVAS_BOTTOM_OFFSET,
  FAB_CANVAS_HEIGHT,
  FAB_CANVAS_WIDTH,
  FAB_CENTER_X,
  FAB_CENTER_Y,
  FAB_DIAMETER,
  GOO_ALPHA_THRESHOLD_MATRIX,
  GOO_BLUR_RADIUS,
  PLUS_ICON_SIZE,
  VIDEO_ACTION_OFFSET_Y,
  VIDEO_ICON_SIZE,
  VOICE_ACTION_OFFSET_Y,
  VOICE_ICON_SIZE,
} from "@/constants/gooeyFab";
import { colors } from "@/theme/colors";
import { FabActionButton } from "./FabActionButton";
import type { GooeyFabProps } from "./GooeyFab.types";
import { useGooeyFabAnimation } from "./useGooeyFabAnimation";

const GOO_LAYER = (
  <Paint>
    <Blur blur={GOO_BLUR_RADIUS} />
    <ColorMatrix matrix={GOO_ALPHA_THRESHOLD_MATRIX} />
  </Paint>
);

export function GooeyFab({ onVideoCall, onVoiceCall }: GooeyFabProps) {
  const insets = useSafeAreaInsets();
  const {
    isOpen,
    toggle,
    voiceDrive,
    videoDrive,
    voiceCenterY,
    videoCenterY,
    backdropStyle,
    plusIconStyle,
  } = useGooeyFabAnimation();

  const select = (action?: () => void) => {
    toggle();
    action?.();
  };

  return (
    <>
      <Animated.View
        pointerEvents={isOpen ? "auto" : "none"}
        style={[
          StyleSheet.absoluteFill,
          { top: -insets.top, bottom: -insets.bottom },
          backdropStyle,
        ]}
      >
        <BlurView
          intensity={BACKDROP_BLUR_INTENSITY}
          tint="light"
          experimentalBlurMethod="dimezisBlurView"
          style={StyleSheet.absoluteFill}
        >
          <Pressable style={StyleSheet.absoluteFill} onPress={toggle} />
        </BlurView>
      </Animated.View>

      <View
        pointerEvents="box-none"
        style={{
          position: "absolute",
          right: 0,
          bottom: FAB_CANVAS_BOTTOM_OFFSET,
          width: FAB_CANVAS_WIDTH,
          height: FAB_CANVAS_HEIGHT,
        }}
      >
        <Canvas
          pointerEvents="none"
          style={{ width: FAB_CANVAS_WIDTH, height: FAB_CANVAS_HEIGHT }}
        >
          <Group layer={GOO_LAYER}>
            <Circle cx={FAB_CENTER_X} cy={videoCenterY} r={ACTION_DIAMETER / 2} color={colors.ink} />
            <Circle cx={FAB_CENTER_X} cy={voiceCenterY} r={ACTION_DIAMETER / 2} color={colors.ink} />
            <Circle cx={FAB_CENTER_X} cy={FAB_CENTER_Y} r={FAB_DIAMETER / 2} color={colors.ink} />
          </Group>
        </Canvas>

        <FabActionButton
          drive={videoDrive}
          offsetY={VIDEO_ACTION_OFFSET_Y}
          interactive={isOpen}
          onPress={() => select(onVideoCall)}
        >
          <Feather name="video" size={VIDEO_ICON_SIZE} color={colors.onInk} />
        </FabActionButton>

        <FabActionButton
          drive={voiceDrive}
          offsetY={VOICE_ACTION_OFFSET_Y}
          interactive={isOpen}
          onPress={() => select(onVoiceCall)}
        >
          <Feather name="phone" size={VOICE_ICON_SIZE} color={colors.onInk} />
        </FabActionButton>

        <Pressable
          onPress={toggle}
          style={{
            position: "absolute",
            left: FAB_CENTER_X - FAB_DIAMETER / 2,
            top: FAB_CENTER_Y - FAB_DIAMETER / 2,
            width: FAB_DIAMETER,
            height: FAB_DIAMETER,
          }}
          className="items-center justify-center rounded-full"
        >
          <Animated.View style={plusIconStyle}>
            <Feather name="plus" size={PLUS_ICON_SIZE} color={colors.onInk} />
          </Animated.View>
        </Pressable>
      </View>
    </>
  );
}
