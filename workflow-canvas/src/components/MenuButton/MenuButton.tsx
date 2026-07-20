import React, { useState } from "react";
import { Pressable, View } from "react-native";

import { NavMenu } from "@/components/NavMenu";

export function MenuButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Pressable
        onPress={() => setOpen(true)}
        className="h-[52px] w-[52px] items-center justify-center rounded-full bg-ink"
      >
        <View className="gap-[7px]">
          <View className="h-[2.5px] w-[22px] rounded-full bg-white" />
          <View className="h-[2.5px] w-[22px] rounded-full bg-white" />
        </View>
      </Pressable>
      <NavMenu visible={open} onClose={() => setOpen(false)} />
    </>
  );
}
