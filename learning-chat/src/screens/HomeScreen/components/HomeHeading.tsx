import React from "react";
import { Text } from "react-native";
import { colors, fontFamilies } from "@/theme";

type HomeHeadingProps = {
  isCompact: boolean;
};

export function HomeHeading({ isCompact }: HomeHeadingProps) {
  return (
    <Text
      className={
        isCompact
          ? "text-[31px] leading-[38px] mt-3"
          : "text-[36px] leading-[44px] mt-3"
      }
      style={{ fontFamily: fontFamilies.serif, color: colors.headingInk }}
    >
      Improve{" "}
      <Text style={{ fontFamily: fontFamilies.serifItalic, color: colors.headingAccent }}>
        English
      </Text>
      {"\n"}every day
    </Text>
  );
}
