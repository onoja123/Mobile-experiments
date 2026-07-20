import React from "react";
import { View } from "react-native";

export function UsageCapsuleMeter({
  filled,
  total,
  color,
  dashColor,
}: {
  filled: number;
  total: number;
  color: string;
  dashColor: string;
}) {
  return (
    <View className="mt-7 flex-row gap-2">
      {Array.from({ length: total }, (_, index) => (
        <View
          key={index}
          className="h-[64px] flex-1 rounded-full"
          style={
            index < filled
              ? { backgroundColor: color }
              : {
                  borderWidth: 1.2,
                  borderStyle: "dashed",
                  borderColor: dashColor,
                }
          }
        />
      ))}
    </View>
  );
}
