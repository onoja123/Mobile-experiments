import React from "react";
import { Text, View } from "react-native";

const TAB_TOP = 340;

export function ToolsDrawerTab({ scale }: { scale: number }) {
  return (
    <View
      className="absolute right-0 items-center justify-center rounded-l-2xl bg-white"
      style={{ top: TAB_TOP * scale, width: 34, height: 78 }}
    >
      <Text
        className="font-jost-medium text-[14px] text-ink"
        style={{
          transform: [{ rotate: "90deg" }],
          width: 44,
          textAlign: "center",
        }}
      >
        Tools
      </Text>
    </View>
  );
}
