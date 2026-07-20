import { TextStyle } from "react-native";
import { colors } from "./colors";

export const fonts = {
  regular: "Manrope_400Regular",
  medium: "Manrope_500Medium",
  semibold: "Manrope_600SemiBold",
  bold: "Manrope_700Bold",
  mono: "Menlo",
} as const;

export const typography = {
  headerTitle: {
    fontFamily: fonts.semibold,
    fontSize: 13,
    letterSpacing: 1.6,
    color: colors.inkMuted,
  } satisfies TextStyle,

  message: {
    fontFamily: fonts.medium,
    fontSize: 15,
    lineHeight: 24,
    color: colors.inkSecondary,
  } satisfies TextStyle,

  bubble: {
    fontFamily: fonts.medium,
    fontSize: 15,
    lineHeight: 22,
    color: colors.bubbleText,
  } satisfies TextStyle,

  input: {
    fontFamily: fonts.medium,
    fontSize: 15,
    color: colors.ink,
  } satisfies TextStyle,

  sectionLabel: {
    fontFamily: fonts.medium,
    fontSize: 12,
    letterSpacing: 0.4,
    color: colors.inkMuted,
  } satisfies TextStyle,

  sidebarItem: {
    fontFamily: fonts.medium,
    fontSize: 15,
    color: colors.ink,
  } satisfies TextStyle,

  sidebarAction: {
    fontFamily: fonts.medium,
    fontSize: 15,
    color: colors.ink,
  } satisfies TextStyle,

  code: {
    fontFamily: fonts.mono,
    fontSize: 12.5,
    lineHeight: 21,
    color: colors.codeText,
  } satisfies TextStyle,

  copyCode: {
    fontFamily: fonts.semibold,
    fontSize: 12.5,
    color: "#FFFFFF",
  } satisfies TextStyle,
} as const;
