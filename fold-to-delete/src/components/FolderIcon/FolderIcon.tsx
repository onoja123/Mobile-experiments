import React from "react";
import { View } from "react-native";

import { shadeColor } from "@/helpers/shadeColor";

import type { FolderIconProps } from "./FolderIcon.types";

const ICON_ASPECT_RATIO = 0.74;
const TAB_WIDTH_RATIO = 0.44;
const TAB_HEIGHT_RATIO = 0.4;
const TAB_RADIUS_LEFT_RATIO = 0.09;
const TAB_RADIUS_RIGHT_RATIO = 0.13;
const TAB_SHADE = -0.1;
const BODY_TOP_RATIO = 0.16;
const BODY_RADIUS_RATIO = 0.11;
const BODY_RADIUS_TOP_LEFT_RATIO = 0.06;

export default function FolderIcon({ color, width }: FolderIconProps) {
  const height = width * ICON_ASPECT_RATIO;
  return (
    <View style={{ width, height }}>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: width * TAB_WIDTH_RATIO,
          height: height * TAB_HEIGHT_RATIO,
          borderTopLeftRadius: width * TAB_RADIUS_LEFT_RATIO,
          borderTopRightRadius: width * TAB_RADIUS_RIGHT_RATIO,
          backgroundColor: shadeColor(color, TAB_SHADE),
        }}
      />
      <View
        style={{
          position: "absolute",
          top: height * BODY_TOP_RATIO,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: width * BODY_RADIUS_RATIO,
          borderTopLeftRadius: width * BODY_RADIUS_TOP_LEFT_RATIO,
          backgroundColor: color,
        }}
      />
    </View>
  );
}
