import React from "react";
import { Pressable } from "react-native";
import { Search } from "lucide-react-native";

import { colors } from "@/theme";

export function SearchButton() {
  return (
    <Pressable className="h-[52px] w-[52px] items-center justify-center rounded-full bg-white/70">
      <Search size={21} color={colors.ink} strokeWidth={2} />
    </Pressable>
  );
}
