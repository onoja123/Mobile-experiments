import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { HEADER_TOP_GAP } from "@/constants/layout";
import { colors } from "@/theme/colors";

type DriveHeaderProps = { topInset: number };

export default function DriveHeader({ topInset }: DriveHeaderProps) {
  return (
    <View style={{ paddingTop: topInset + HEADER_TOP_GAP }}>
      <View className="h-9 items-center justify-center">
        <Text className="text-[15px] font-bold text-ink">My Stuff 🗂️</Text>
        <Pressable className="absolute right-5" hitSlop={10}>
          <Ionicons name="mic-outline" size={18} color={colors.headerIcon} />
        </Pressable>
      </View>
      <Pressable className="flex-row items-center px-4 pb-4 pt-1" hitSlop={8}>
        <Ionicons name="chevron-back" size={17} color={colors.accent} />
        <Text className="text-[15px] text-accent">Back</Text>
      </Pressable>
      <View className="mx-5 mb-1 h-10 flex-row items-center rounded-xl bg-search px-3">
        <Ionicons name="search" size={15} color={colors.searchIcon} />
        <Text className="ml-2 text-[14px] text-searchText">Search</Text>
      </View>
    </View>
  );
}
