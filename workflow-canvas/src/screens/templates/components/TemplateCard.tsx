import React from "react";
import { Pressable, Text, View } from "react-native";
import { Play } from "lucide-react-native";

import { IntegrationIcon } from "@/components/icons";
import { colors } from "@/theme";
import type { TemplateSpec } from "@/types";

export function TemplateCard({ template }: { template: TemplateSpec }) {
  return (
    <View
      className="rounded-[36px] p-6"
      style={{ backgroundColor: template.background }}
    >
      <View className="flex-row">
        <View className="mr-5 gap-3">
          {template.icons.map((icon) => (
            <View
              key={icon.integration}
              className="h-[68px] w-[68px] items-center justify-center rounded-full bg-white"
            >
              <IntegrationIcon
                integration={icon.integration}
                size={icon.size}
              />
            </View>
          ))}
        </View>
        <View className="flex-1">
          <Text className="font-jost-bold text-[22px] leading-[28px] text-ink">
            {template.title}
          </Text>
          <Text
            className="mt-1.5 font-jost text-[15px] leading-[21px] text-fog"
            numberOfLines={3}
          >
            {template.description}
          </Text>
        </View>
      </View>
      <View className="mt-6 flex-row items-center gap-4">
        <View
          className="h-[64px] w-[64px] items-center justify-center rounded-full"
          style={{
            borderWidth: 1.2,
            borderStyle: "dashed",
            borderColor: colors.stone,
          }}
        >
          <Text className="font-jost text-[12px] leading-[14px] text-ink">
            Used
          </Text>
          <Text className="font-jost text-[12px] leading-[14px] text-ink">
            {template.usedCount}
          </Text>
        </View>
        <Pressable className="h-[64px] flex-1 flex-row items-center justify-center gap-2.5 rounded-full bg-white">
          <Text className="font-jost-medium text-[17px] text-ink">Start</Text>
          <Play size={16} color={colors.ink} strokeWidth={2} />
        </Pressable>
      </View>
    </View>
  );
}
