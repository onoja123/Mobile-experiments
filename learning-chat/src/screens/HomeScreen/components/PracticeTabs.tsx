import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { HomeTab } from "@/enums";
import { colors, radii } from "@/theme";

const TABS = [
  { tab: HomeTab.Practice, label: "Practice" },
  { tab: HomeTab.Lessons, label: "Lessons" },
];

export function PracticeTabs() {
  const [activeTab, setActiveTab] = useState(HomeTab.Practice);

  return (
    <View className="flex-row mt-5" style={{ gap: 12 }}>
      {TABS.map(({ tab, label }) => (
        <Pressable
          key={tab}
          onPress={() => setActiveTab(tab)}
          style={{
            borderRadius: radii.tab,
            borderTopRightRadius: radii.tabFlare,
            backgroundColor: activeTab === tab ? colors.khaki : colors.sand,
          }}
          className="flex-1 h-11 items-center justify-center"
        >
          <Text className="font-jost text-[15px] text-ink">{label}</Text>
        </Pressable>
      ))}
    </View>
  );
}
