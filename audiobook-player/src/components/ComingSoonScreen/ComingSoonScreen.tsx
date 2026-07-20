import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ScreenTitle } from "@/components/ScreenTitle";
import { SCREEN_TOP_PADDING } from "@/constants/layout";

import type { ComingSoonScreenProps } from "./ComingSoonScreen.types";

export function ComingSoonScreen({ title, message }: ComingSoonScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-canvas" style={{ paddingTop: insets.top + SCREEN_TOP_PADDING }}>
      <ScreenTitle title={title} />
      <View className="flex-1 items-center justify-center pb-32">
        <Text className="text-[15px] text-sub">{message}</Text>
      </View>
    </View>
  );
}
