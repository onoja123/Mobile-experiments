import React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import { colors } from "@/theme";

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

const defaults = {
  size: 20,
  color: colors.ink,
  strokeWidth: 1.5,
};

export function SidebarToggleIcon({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x={3.5} y={4} width={8} height={6.5} rx={2} stroke={color} strokeWidth={strokeWidth} />
      <Rect x={12.5} y={13.5} width={8} height={6.5} rx={2} stroke={color} strokeWidth={strokeWidth} />
      <Path
        d="M7.5 10.5v3.75a2.5 2.5 0 0 0 2.5 2.5h2.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function FunnelIcon({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.5 5.5h15l-5.7 6.6a1.5 1.5 0 0 0-.37.99v4.16l-2.86 1.53v-5.69a1.5 1.5 0 0 0-.37-.99L4.5 5.5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function SendIcon({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.5 10.4 19 4.6c.5-.2 1 .3.8.8l-5.8 14.5c-.22.55-1 .53-1.2-.03l-1.9-5.5a.9.9 0 0 0-.56-.56l-5.5-1.9c-.56-.2-.58-.98-.04-1.2Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <Circle cx={18.6} cy={18.6} r={1.9} fill={color} />
    </Svg>
  );
}

export function ChatSquareIcon({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x={4.5} y={4.5} width={15} height={15} rx={3} stroke={color} strokeWidth={strokeWidth} />
    </Svg>
  );
}

export function PlusIcon({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 5.5v13M5.5 12h13"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function TrashIcon({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M5.5 7.5h13M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5m-8.25 0 .62 10.06A2 2 0 0 0 9.37 19.5h5.26a2 2 0 0 0 2-1.94l.62-10.06"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function HelpIcon({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={8} stroke={color} strokeWidth={strokeWidth} />
      <Path
        d="M9.9 9.6a2.16 2.16 0 0 1 4.2.72c0 1.44-2.1 1.8-2.1 2.88"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <Circle cx={12} cy={16} r={0.9} fill={color} />
    </Svg>
  );
}

export function GearIcon({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.6 4.4c.36-1.2 2.44-1.2 2.8 0l.23.74c.2.68.9 1.08 1.6.93l.76-.17c1.22-.28 2.26 1.52 1.4 2.43l-.53.56c-.49.52-.49 1.32 0 1.84l.53.56c.86.91-.18 2.7-1.4 2.43l-.76-.17c-.7-.15-1.4.25-1.6.93l-.23.74c-.36 1.2-2.44 1.2-2.8 0l-.23-.74c-.2-.68-.9-1.08-1.6-.93l-.76.17c-1.22.28-2.26-1.52-1.4-2.43l.53-.56c.49-.52.49-1.32 0-1.84l-.53-.56c-.86-.91.18-2.7 1.4-2.43l.76.17c.7.15 1.4-.25 1.6-.93l.23-.74Z"
        stroke={color}
        strokeWidth={strokeWidth}
        transform="translate(0 3.2)"
      />
      <Circle cx={12} cy={12} r={2.4} stroke={color} strokeWidth={strokeWidth} transform="translate(0 3.2)" />
    </Svg>
  );
}

export function ClipboardIcon({
  size = defaults.size,
  color = defaults.color,
  strokeWidth = defaults.strokeWidth,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x={8.5} y={7.5} width={11} height={12.5} rx={2} stroke={color} strokeWidth={strokeWidth} />
      <Path
        d="M15.5 7.5V6a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2H8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function CursorArrowIcon({
  size = defaults.size,
  color = "#FFFFFF",
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 4.5 18.5 11l-5.6 1.6L9.5 18 6 4.5Z"
        fill={color}
        stroke={color}
        strokeWidth={1}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
