import React from "react";
import { Pressable, Text, View } from "react-native";
import { Play } from "lucide-react-native";

import { MenuButton } from "@/components/MenuButton";
import { SearchButton } from "@/components/SearchButton";
import { colors, shadows } from "@/theme";

export function CanvasHeader() {
  return (
    <View className="flex-row items-center px-4 pt-2">
      <MenuButton />
      <View className="flex-1 items-center">
        <Pressable
          className="flex-row items-center gap-3 rounded-full bg-white py-2 pl-2 pr-6"
          style={shadows.floating}
        >
          <View className="h-10 w-10 items-center justify-center rounded-full bg-ink">
            <Play size={15} color={colors.white} fill={colors.white} />
          </View>
          <Text className="font-jost-medium text-[16px] text-ink">
            Run once
          </Text>
        </Pressable>
      </View>
      <SearchButton />
    </View>
  );
}
