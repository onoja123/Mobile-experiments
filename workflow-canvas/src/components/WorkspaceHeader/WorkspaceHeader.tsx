import React from "react";
import { Pressable, Text, View } from "react-native";
import { Plus, Settings } from "lucide-react-native";

import { MenuButton } from "@/components/MenuButton";
import { colors } from "@/theme";

export function WorkspaceHeader() {
  return (
    <View className="flex-row items-center px-4 pt-2">
      <MenuButton />
      <View className="flex-1 items-center">
        <Pressable className="h-[52px] w-[52px] items-center justify-center rounded-full border border-pebble bg-white">
          <Settings size={20} color={colors.ink} strokeWidth={1.8} />
        </Pressable>
      </View>
      <Pressable className="h-[52px] flex-row items-center gap-2 rounded-full bg-white px-5">
        <Plus size={18} color={colors.ink} strokeWidth={2.2} />
        <Text className="font-jost-medium text-[16px] text-ink">
          New scenario
        </Text>
      </Pressable>
    </View>
  );
}
