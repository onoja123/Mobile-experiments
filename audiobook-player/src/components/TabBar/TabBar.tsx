import { Pressable, Text, View } from "react-native";
import type { BottomTabBarProps } from "expo-router/tabs";
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TAB_BAR_HEIGHT } from "@/constants/layout";
import { usePlayer } from "@/hooks/usePlayer";
import { colors } from "@/theme/colors";

import { TAB_BAR_ITEMS } from "./tabBarItems";

export function TabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const { sheetProgress } = usePlayer();

  const style = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          sheetProgress.value,
          [0, 0.4],
          [0, TAB_BAR_HEIGHT + insets.bottom + 12],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  return (
    <Animated.View
      style={[style, { paddingBottom: insets.bottom }]}
      className="absolute inset-x-0 bottom-0 border-t border-black/5 bg-white"
    >
      <View className="flex-row" style={{ height: TAB_BAR_HEIGHT }}>
        {state.routes.map((route, index) => {
          const item = TAB_BAR_ITEMS[route.name];
          if (!item) return null;
          const focused = state.index === index;
          const color = focused ? colors.ink : colors.faint;
          const Icon = item.icon;
          return (
            <Pressable
              key={route.key}
              className="flex-1 items-center justify-center gap-1"
              onPress={() => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });
                if (!focused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              }}
            >
              <Icon size={22} color={color} strokeWidth={focused ? 2 : 1.8} />
              <Text style={{ color }} className="text-[10px]">
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </Animated.View>
  );
}
