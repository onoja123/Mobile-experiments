import React from "react";
import { Text, View } from "react-native";

export function RecommendationCard({
  circleBackground,
  icon,
  label,
}: {
  circleBackground: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <View className="flex-1 items-center rounded-[28px] border border-mist bg-white py-7">
      <View
        className="h-[56px] w-[56px] items-center justify-center rounded-full"
        style={{ backgroundColor: circleBackground }}
      >
        {icon}
      </View>
      <Text className="mt-4 font-jost-bold text-[18px] text-ink">{label}</Text>
    </View>
  );
}
