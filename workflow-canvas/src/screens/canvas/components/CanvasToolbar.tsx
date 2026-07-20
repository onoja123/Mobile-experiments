import React from "react";
import { Pressable, View } from "react-native";
import {
  Download,
  MoreHorizontal,
  RotateCcw,
  Save,
  Settings,
} from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors, shadows } from "@/theme";

function ToolbarButton({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Pressable
      className={`items-center justify-center rounded-full ${dark ? "bg-ink" : "bg-white"}`}
      style={{
        width: dark ? 58 : 52,
        height: dark ? 58 : 52,
        ...shadows.elevated,
      }}
    >
      {children}
    </Pressable>
  );
}

export function CanvasToolbar() {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="flex-row items-center justify-center gap-3 px-4"
      style={{ paddingBottom: insets.bottom + 6 }}
    >
      <ToolbarButton>
        <Save size={20} color={colors.ink} strokeWidth={1.8} />
      </ToolbarButton>
      <ToolbarButton>
        <Download size={20} color={colors.ink} strokeWidth={1.8} />
      </ToolbarButton>
      <ToolbarButton dark>
        <Settings size={22} color={colors.white} strokeWidth={1.8} />
      </ToolbarButton>
      <ToolbarButton>
        <RotateCcw size={20} color={colors.ink} strokeWidth={1.8} />
      </ToolbarButton>
      <ToolbarButton>
        <MoreHorizontal size={20} color={colors.ink} strokeWidth={2} />
      </ToolbarButton>
    </View>
  );
}
