import React from "react";
import Svg from "react-native-svg";

import { CONNECTOR_ARROWS } from "@/data/workflowCanvas";

import { ConnectorArrow } from "./ConnectorArrow";

export function WorkflowConnectors({ scale }: { scale: number }) {
  return (
    <Svg
      pointerEvents="none"
      style={{ position: "absolute", width: "100%", height: "100%" }}
    >
      {CONNECTOR_ARROWS.map((arrow, index) => (
        <ConnectorArrow key={index} arrow={arrow} scale={scale} />
      ))}
    </Svg>
  );
}
