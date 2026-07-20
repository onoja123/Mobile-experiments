import type { ReactNode } from "react";

import { Pressable, View } from "react-native";
import { Bell, User } from "lucide-react-native";

import { ScreenTitle } from "@/components/ScreenTitle";
import { colors } from "@/theme/colors";

export function StoriesHeader() {
  return (
    <View className="flex-row items-center justify-between pr-6">
      <ScreenTitle title="Stories" />
      <View className="flex-row gap-3">
        <HeaderIconButton>
          <Bell size={20} color={colors.ink} strokeWidth={1.8} />
        </HeaderIconButton>
        <HeaderIconButton>
          <User size={20} color={colors.ink} strokeWidth={1.8} />
        </HeaderIconButton>
      </View>
    </View>
  );
}

function HeaderIconButton({ children }: { children: ReactNode }) {
  return (
    <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-white active:opacity-70">
      {children}
    </Pressable>
  );
}
