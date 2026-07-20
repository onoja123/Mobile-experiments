import { Text, View } from "react-native";

import { NioStar } from "@/components/icons";
import { colors } from "@/theme";

export function NioCard() {
  return (
    <View className="h-full w-full justify-between rounded-[22px] bg-card px-5 py-4">
      <View className="flex-row items-center gap-2.5">
        <View className="h-7 w-7 items-center justify-center rounded-full bg-white">
          <NioStar size={15} color={colors.card} />
        </View>
        <Text className="text-[17px] font-semibold text-white">Nio</Text>
      </View>

      <View className="flex-row items-center justify-between">
        <Text className="text-[14px] font-medium tracking-[2.5px] text-white">
          •••• 1234
        </Text>
        <Text className="text-[19px] font-black italic tracking-[-0.5px] text-white">
          VISA
        </Text>
      </View>
    </View>
  );
}
