import { Pressable, Text } from "react-native";
import { RotateCcw, RotateCw } from "lucide-react-native";

import { SKIP_INTERVAL_SECONDS } from "@/constants/playback";
import { colors } from "@/theme/colors";

export function SkipButton({ direction }: { direction: "back" | "forward" }) {
  const Icon = direction === "back" ? RotateCcw : RotateCw;
  return (
    <Pressable className="items-center justify-center active:opacity-60">
      <Icon size={36} color={colors.ink} strokeWidth={1.6} />
      <Text className="absolute pt-1 text-[9px] font-bold text-ink">{SKIP_INTERVAL_SECONDS}</Text>
    </Pressable>
  );
}
