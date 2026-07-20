import { Pressable, Text, View } from "react-native";
import { Plus } from "lucide-react-native";

import { colors } from "@/theme/colors";

export function CreatePlaylistRow() {
  return (
    <Pressable className="flex-row items-center rounded-[22px] border-2 border-dashed border-faint p-2.5 active:opacity-70">
      <View className="h-[60px] w-[60px] items-center justify-center rounded-[15px] bg-black/5">
        <Plus size={22} color={colors.sub} strokeWidth={2} />
      </View>
      <Text className="ml-3.5 text-[15px] font-semibold text-sub">New playlist</Text>
    </Pressable>
  );
}
