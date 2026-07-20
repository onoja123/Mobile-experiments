import { View } from "react-native";
import Animated from "react-native-reanimated";

import { BellIcon, CloseIcon, PersonIcon, ScanIcon } from "@/components/icons";
import { HEADER_TOP_GAP } from "@/constants/wallet";
import type { AnimatedViewStyle } from "@/types";

import { HeaderIconButton } from "./HeaderIconButton";

export function WalletHeader({
  expanded,
  onClose,
  topInset,
  scanStyle,
  closeStyle,
  trailingStyle,
}: {
  expanded: boolean;
  onClose: () => void;
  topInset: number;
  scanStyle: AnimatedViewStyle;
  closeStyle: AnimatedViewStyle;
  trailingStyle: AnimatedViewStyle;
}) {
  return (
    <View
      style={{ paddingTop: topInset + HEADER_TOP_GAP }}
      className="z-20 flex-row items-center justify-between px-5"
    >
      <View className="h-10 w-10">
        <Animated.View style={scanStyle} pointerEvents={expanded ? "none" : "auto"}>
          <HeaderIconButton>
            <ScanIcon />
          </HeaderIconButton>
        </Animated.View>
        <Animated.View
          style={closeStyle}
          className="absolute inset-0"
          pointerEvents={expanded ? "auto" : "none"}
        >
          <HeaderIconButton onPress={onClose}>
            <CloseIcon />
          </HeaderIconButton>
        </Animated.View>
      </View>

      <Animated.View
        style={trailingStyle}
        className="flex-row gap-3"
        pointerEvents={expanded ? "none" : "auto"}
      >
        <HeaderIconButton>
          <BellIcon />
        </HeaderIconButton>
        <HeaderIconButton>
          <PersonIcon />
        </HeaderIconButton>
      </Animated.View>
    </View>
  );
}
