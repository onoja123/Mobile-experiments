import type { ReactNode } from "react";
import { Pressable } from "react-native";

import { buttonShadow } from "@/theme";

export function HeaderIconButton({
  onPress,
  children,
}: {
  onPress?: () => void;
  children: ReactNode;
}) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      style={buttonShadow}
      className="h-10 w-10 items-center justify-center rounded-full bg-white active:opacity-60"
    >
      {children}
    </Pressable>
  );
}
