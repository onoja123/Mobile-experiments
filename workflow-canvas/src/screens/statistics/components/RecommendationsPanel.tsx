import React from "react";
import { Text, View } from "react-native";
import { GraduationCap, MessagesSquare } from "lucide-react-native";

import { colors } from "@/theme";

import { RecommendationCard } from "./RecommendationCard";

export function RecommendationsPanel() {
  return (
    <View className="mx-4 mt-4 rounded-[36px] bg-white p-5">
      <Text className="px-1 pt-1 font-jost-bold text-[24px] text-ink">
        Recommended for you
      </Text>
      <View className="mt-5 flex-row gap-3">
        <RecommendationCard
          circleBackground={colors.blush}
          icon={<MessagesSquare size={22} color={colors.ink} strokeWidth={1.8} />}
          label="Community"
        />
        <RecommendationCard
          circleBackground={colors.sky}
          icon={<GraduationCap size={24} color={colors.ink} strokeWidth={1.8} />}
          label="Academy"
        />
      </View>
    </View>
  );
}
