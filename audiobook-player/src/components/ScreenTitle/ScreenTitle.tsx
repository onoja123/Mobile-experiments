import { Text } from "react-native";

import type { ScreenTitleProps } from "./ScreenTitle.types";

export function ScreenTitle({ title }: ScreenTitleProps) {
  return (
    <Text className="px-6 text-[32px] font-semibold tracking-tight text-ink">{title}</Text>
  );
}
