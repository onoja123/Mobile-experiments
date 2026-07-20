import React from "react";
import { Pressable, ScrollView, Text } from "react-native";

export function OrganizationTabs({
  tabs,
  activeIndex,
}: {
  tabs: readonly string[];
  activeIndex: number;
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-5"
      contentContainerClassName="gap-3 px-4"
    >
      {tabs.map((tab, index) => {
        const active = index === activeIndex;
        return (
          <Pressable
            key={tab}
            className={`h-[54px] items-center justify-center rounded-full px-8 ${
              active ? "bg-ink" : "bg-white/80"
            }`}
          >
            <Text
              className={`font-jost-medium text-[16px] ${active ? "text-white" : "text-ink"}`}
            >
              {tab}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
