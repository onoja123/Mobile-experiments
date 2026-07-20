import React from "react";
import { Path, Polygon } from "react-native-svg";

import { getArrowGeometry } from "@/helpers/getArrowGeometry";
import type { ConnectorArrowSpec } from "@/types";

const STROKE_WIDTH = 1.6;
const DASH_LENGTH = 4;
const HEAD_SIZE = 7;

export function ConnectorArrow({
  arrow,
  scale,
}: {
  arrow: ConnectorArrowSpec;
  scale: number;
}) {
  const { path, headPoints } = getArrowGeometry(
    arrow.points,
    scale,
    HEAD_SIZE * scale,
  );
  return (
    <>
      <Path
        d={path}
        stroke={arrow.color}
        strokeWidth={STROKE_WIDTH * scale}
        strokeDasharray={`${DASH_LENGTH * scale},${DASH_LENGTH * scale}`}
        fill="none"
      />
      <Polygon points={headPoints} fill={arrow.color} />
    </>
  );
}
