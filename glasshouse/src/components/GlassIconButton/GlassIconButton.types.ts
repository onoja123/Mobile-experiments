import type { SFSymbol } from "expo-symbols";

export interface GlassIconButtonProps {
  icon: SFSymbol;
  onPress?: () => void;
  tint?: string;
}
