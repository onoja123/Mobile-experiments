import { Image, Text, View } from "react-native";

import { cardShadow } from "@/theme";
import type { MarqueeItem } from "@/types";

type MarqueeCardProps = {
  item: MarqueeItem;
};

export function MarqueeCard({ item }: MarqueeCardProps) {
  return (
    <View
      className="h-[92px] w-[300px] flex-row items-center justify-between rounded-card pl-5 pr-2"
      style={[{ backgroundColor: item.backgroundColor }, cardShadow]}
    >
      <Text
        className="text-card-title font-extrabold"
        style={{ color: item.textColor }}
        numberOfLines={2}
      >
        {item.name}
      </Text>
      <Image
        source={{ uri: item.imageUrl }}
        className="h-[76px] w-[76px] rounded-card-image"
      />
    </View>
  );
}
