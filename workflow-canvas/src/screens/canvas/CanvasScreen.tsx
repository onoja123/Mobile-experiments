import React from "react";
import { View } from "react-native";

import { Screen } from "@/components/Screen";
import {
  ADD_NODE_HINT_POSITIONS,
  EDIT_BADGE_POSITIONS,
  WORKFLOW_NODES,
} from "@/data/workflowCanvas";
import { useCanvasScale } from "@/hooks/useCanvasScale";

import { AddNodeHint } from "./components/AddNodeHint";
import { CanvasHeader } from "./components/CanvasHeader";
import { CanvasToolbar } from "./components/CanvasToolbar";
import { IntegrationRail } from "./components/IntegrationRail";
import { NodeEditBadge } from "./components/NodeEditBadge";
import { ToolsDrawerTab } from "./components/ToolsDrawerTab";
import { WorkflowConnectors } from "./components/WorkflowConnectors";
import { WorkflowNode } from "./components/WorkflowNode";

export function CanvasScreen() {
  const scale = useCanvasScale();
  return (
    <Screen>
      <CanvasHeader />
      <View className="flex-1">
        <WorkflowConnectors scale={scale} />
        {WORKFLOW_NODES.map((node, index) => (
          <WorkflowNode key={index} node={node} scale={scale} />
        ))}
        {ADD_NODE_HINT_POSITIONS.map((position, index) => (
          <AddNodeHint key={index} position={position} scale={scale} />
        ))}
        {EDIT_BADGE_POSITIONS.map((position, index) => (
          <NodeEditBadge key={index} position={position} scale={scale} />
        ))}
        <IntegrationRail scale={scale} />
        <ToolsDrawerTab scale={scale} />
      </View>
      <CanvasToolbar />
    </Screen>
  );
}
