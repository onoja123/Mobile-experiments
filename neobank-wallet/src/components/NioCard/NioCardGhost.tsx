import { Text, View } from "react-native";

import { NioStar } from "@/components/icons";
import { colors } from "@/theme";

export function NioCardGhost() {
  return (
    <View className="h-full w-full rounded-[22px] bg-white px-5 py-4">
      <View className="flex-row items-center gap-2.5">
        <View className="h-7 w-7 items-center justify-center rounded-full bg-ink">
          <NioStar size={15} color={colors.white} />
        </View>
        <Text className="text-[17px] font-semibold text-ink">Nio</Text>
      </View>
    </View>
  );
}
