import { Pressable, Text } from "react-native";
import Animated from "react-native-reanimated";

import { NioLogo } from "@/components/icons";
import { buttonShadow } from "@/theme";
import type { AnimatedViewStyle } from "@/types";

export function WalletHero({
  expanded,
  onAddToWallet,
  style,
}: {
  expanded: boolean;
  onAddToWallet: () => void;
  style: AnimatedViewStyle;
}) {
  return (
    <Animated.View
      style={style}
      pointerEvents={expanded ? "none" : "auto"}
      className="items-center px-10 pt-10"
    >
      <NioLogo size={46} />
      <Text className="mt-7 text-center text-[22px] font-bold leading-[28px] text-ink">
        Your money,{"\n"}made effortless
      </Text>
      <Text className="mt-3 text-center text-[12.5px] leading-[18px] text-muted">
        Get rewarded every time you spend — cashback and{"\n"}perks built
        into every Nio card.
      </Text>
      <Pressable
        onPress={onAddToWallet}
        style={buttonShadow}
        className="mt-7 rounded-full bg-ink px-5 py-3 active:opacity-80"
      >
        <Text className="text-[13px] font-semibold text-white">
          Add to wallet
        </Text>
      </Pressable>
    </Animated.View>
  );
}
