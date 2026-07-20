import React from "react";
import { Pressable, StyleSheet, useWindowDimensions, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated";
import { layout, motion, shadows } from "@/theme";
import { absoluteFill } from "@/utils/style";
import { useChatStore } from "@/stores/chatStore";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { ChatScreen } from "@/screens/ChatScreen";

export function DrawerLayout() {
  const { width } = useWindowDimensions();
  const drawerOpen = useChatStore((state) => state.drawerOpen);
  const closeDrawer = useChatStore((state) => state.closeDrawer);

  const drawerWidth = width * layout.drawerVisibleWidth;

  const progress = useDerivedValue(() =>
    withSpring(drawerOpen ? 1 : 0, motion.drawerSpring),
  );

  const mainShadowStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: progress.value * drawerWidth }],
    shadowOpacity: interpolate(progress.value, [0, 1], [0, 0.08]),
  }));

  const mainClipStyle = useAnimatedStyle(() => ({
    borderRadius: interpolate(progress.value, [0, 1], [0, 28]),
  }));

  const sidebarStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 0.4, 1], [0, 0.5, 1]),
    transform: [
      { translateX: interpolate(progress.value, [0, 1], [-36, 0]) },
    ],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.sidebarWrap, sidebarStyle]}>
        <Sidebar width={drawerWidth} />
      </Animated.View>
      <Animated.View style={[styles.mainShadow, mainShadowStyle]}>
        <Animated.View style={[styles.main, mainClipStyle]}>
          <ChatScreen />
          {drawerOpen && (
            <Pressable style={StyleSheet.absoluteFill} onPress={closeDrawer} />
          )}
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFD",
  },
  sidebarWrap: {
    ...absoluteFill,
  },
  mainShadow: {
    flex: 1,
    ...shadows.drawerContent,
  },
  main: {
    flex: 1,
    overflow: "hidden",
  },
});
