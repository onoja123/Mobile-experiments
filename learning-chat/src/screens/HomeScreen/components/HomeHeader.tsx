import React from "react";
import { Pressable, Text, View } from "react-native";
import { Avatar } from "@/components/Avatar";
import { GearIcon } from "@/components/icons";
import { USER_AVATAR } from "@/data/avatars";

export function HomeHeader() {
  return (
    <View className="flex-row items-center mt-1.5">
      <Avatar emoji={USER_AVATAR.emoji} backgroundColor={USER_AVATAR.backgroundColor} />
      <View className="ml-2.5 flex-1">
        <Text className="font-jost text-[12px] text-fade">Your level</Text>
        <Text className="font-jost-medium text-[13px] text-ink -mt-0.5">
          Beginner A1
        </Text>
      </View>
      <Pressable
        className="w-10 h-10 rounded-full items-center justify-center"
        hitSlop={6}
      >
        <GearIcon />
      </Pressable>
    </View>
  );
}
