import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { CardVariant } from "@/enums";
import { cardBrandCircles, cardGradient, cardSurface, radius, typography } from "@/theme";

import CreditCardPattern from "./CreditCardPattern";
import type { CreditCardProps } from "./CreditCard.types";

const BRAND_CIRCLE_SIZE = 26;
const BRAND_CIRCLE_OVERLAP = -10;

export default function CreditCard({
  variant,
  holder,
  last4,
  width,
  height,
}: CreditCardProps) {
  const isDark = variant !== CardVariant.White;
  const circles = cardBrandCircles[variant];

  const content = (
    <>
      <CreditCardPattern variant={variant} width={width} height={height} />
      <View className="flex-1 justify-center px-6">
        <Text
          className={isDark ? "text-white" : "text-ink"}
          style={typography.cardHolder}
        >
          {holder}
        </Text>
        <Text
          className={isDark ? "text-white/60" : "text-ink/40"}
          style={[typography.cardNumber, { marginTop: 8 }]}
        >
          {"••••  ••••  ••••  " + last4}
        </Text>
      </View>
      <View className="absolute bottom-5 right-6 flex-row items-center">
        {circles.back ? (
          <View
            style={{
              width: BRAND_CIRCLE_SIZE,
              height: BRAND_CIRCLE_SIZE,
              borderRadius: BRAND_CIRCLE_SIZE / 2,
              backgroundColor: circles.back,
              marginRight: BRAND_CIRCLE_OVERLAP,
              zIndex: 1,
            }}
          />
        ) : null}
        <View
          style={{
            width: BRAND_CIRCLE_SIZE,
            height: BRAND_CIRCLE_SIZE,
            borderRadius: BRAND_CIRCLE_SIZE / 2,
            backgroundColor: circles.front,
          }}
        />
      </View>
    </>
  );

  if (variant === CardVariant.Purple) {
    return (
      <LinearGradient
        colors={cardGradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{ width, height, borderRadius: radius.card, overflow: "hidden" }}
      >
        {content}
      </LinearGradient>
    );
  }

  return (
    <View
      className={variant === CardVariant.White ? "bg-white border border-black/5" : ""}
      style={{
        width,
        height,
        borderRadius: radius.card,
        overflow: "hidden",
        backgroundColor: cardSurface[variant],
      }}
    >
      {content}
    </View>
  );
}
