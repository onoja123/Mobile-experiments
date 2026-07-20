import React from "react";
import { Text, View } from "react-native";

import { IntegrationIcon } from "@/components/icons";
import {
  NODE_HEIGHT,
  NODE_ICON_SIZE,
  NODE_RADIUS,
  NODE_WIDTH,
} from "@/constants/canvas";
import type { WorkflowNodeSpec } from "@/types";

export function WorkflowNode({
  node,
  scale,
}: {
  node: WorkflowNodeSpec;
  scale: number;
}) {
  return (
    <View
      className="absolute items-center justify-center"
      style={{
        left: node.x * scale,
        top: node.y * scale,
        width: NODE_WIDTH * scale,
        height: NODE_HEIGHT * scale,
        borderRadius: NODE_RADIUS * scale,
        backgroundColor: node.background,
      }}
    >
      <IntegrationIcon
        integration={node.integration}
        size={NODE_ICON_SIZE * scale}
      />
      <Text className="mt-2 font-jost-semibold text-[15px] text-ink">
        {node.title}
      </Text>
      <Text className="font-jost text-[11px] text-fog">{node.subtitle}</Text>
    </View>
  );
}
