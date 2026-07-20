import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Haptics from "expo-haptics";
import { layout, typography } from "@/theme";
import { FunnelIcon, SidebarToggleIcon } from "@/components/icons";
import { PressableFade } from "@/components/ui/PressableFade";

interface Props {
  onToggleSidebar: () => void;
}

export function ChatHeader({ onToggleSidebar }: Props) {
  return (
    <View style={styles.container}>
      <PressableFade
        onPress={() => {
          Haptics.selectionAsync();
          onToggleSidebar();
        }}
        hitSlop={layout.iconHitSlop}
        pressedOpacity={0.5}
      >
        <SidebarToggleIcon size={21} />
      </PressableFade>
      <Text style={typography.headerTitle}>Left gpt</Text>
      <PressableFade hitSlop={layout.iconHitSlop} pressedOpacity={0.5}>
        <FunnelIcon size={21} />
      </PressableFade>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: layout.headerHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: layout.screenPadding,
  },
});
