import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { DotGrid } from "@/components/DotGrid";

export function Screen({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1 bg-paper" style={{ paddingTop: insets.top }}>
      <DotGrid />
      {children}
    </View>
  );
}
