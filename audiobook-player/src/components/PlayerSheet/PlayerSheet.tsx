import { Pressable, StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import { ARTWORK_FADE_DURATION } from "@/constants/animations";
import { usePlayer } from "@/hooks/usePlayer";

import { ExpandedPlayerView } from "./ExpandedPlayerView";
import { MiniPlayerRow } from "./MiniPlayerRow";
import { usePlayerSheetTransition } from "./usePlayerSheetTransition";

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export function PlayerSheet() {
  const { sheetProgress, track, expandSheet, collapseSheet } = usePlayer();
  const {
    panGesture,
    sheetStyle,
    blurProps,
    dimStyle,
    artworkStyle,
    handleStyle,
    miniStyle,
    miniPointerProps,
    expandedStyle,
    expandedPointerProps,
    expandedArtworkSize,
    expandedArtworkTop,
  } = usePlayerSheetTransition();

  return (
    <>
      <AnimatedBlurView
        animatedProps={blurProps}
        tint="extraLight"
        experimentalBlurMethod="dimezisBlurView"
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      >
        <Animated.View style={[StyleSheet.absoluteFill, dimStyle]} className="bg-canvas" />
      </AnimatedBlurView>

      <GestureDetector gesture={panGesture}>
        <Animated.View style={sheetStyle} className="absolute inset-x-0 overflow-hidden bg-white">
          <Animated.View
            style={miniStyle}
            animatedProps={miniPointerProps}
            className="absolute inset-x-0 top-0"
          >
            <MiniPlayerRow />
          </Animated.View>

          <Animated.View
            style={expandedStyle}
            animatedProps={expandedPointerProps}
            className="absolute inset-0 px-8"
          >
            <ExpandedPlayerView artworkSpacerHeight={expandedArtworkTop + expandedArtworkSize} />
          </Animated.View>

          <Animated.View
            pointerEvents="none"
            style={[artworkStyle, { backgroundColor: track.tint }]}
            className="absolute overflow-hidden"
          >
            <Image
              source={{ uri: track.artwork }}
              style={{ width: "100%", height: "100%" }}
              contentFit="cover"
              transition={ARTWORK_FADE_DURATION}
            />
          </Animated.View>

          <Animated.View style={handleStyle} className="absolute inset-x-0 items-center">
            <Pressable
              onPress={() => (sheetProgress.value > 0.5 ? collapseSheet() : expandSheet())}
              hitSlop={14}
            >
              <View className="h-[5px] w-10 rounded-full bg-black/15" />
            </Pressable>
          </Animated.View>
        </Animated.View>
      </GestureDetector>
    </>
  );
}
