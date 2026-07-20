import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CardMarquee } from "@/components/CardMarquee";

import { OnboardingHeader } from "./OnboardingHeader";
import type { OnboardingStepLayoutProps } from "./OnboardingStepLayout.types";

export function OnboardingStepLayout({
  step,
  titleLine1,
  titleLine2,
  titleIcon,
  subtitle,
  items,
  ctaIcon,
  ctaLabel,
  ctaColor,
  onBack,
  onSkip,
  onCta,
}: OnboardingStepLayoutProps) {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      <OnboardingHeader step={step} onBack={onBack} onSkip={onSkip} />

      <View className="mt-5 px-6">
        <Text className="text-headline font-extrabold text-ink">
          {titleLine1}
        </Text>
        <View className="mt-0.5 flex-row items-center">
          {titleIcon}
          <Text className="ml-2.5 text-headline font-extrabold text-ink">
            {titleLine2}
          </Text>
        </View>
        <Text className="mt-3 max-w-[320px] text-body text-muted">
          {subtitle}
        </Text>
      </View>

      <View className="mt-4 flex-1">
        <CardMarquee items={items} />
      </View>

      <View
        className="absolute left-5 right-5"
        style={{ bottom: insets.bottom + 8 }}
      >
        <Pressable
          onPress={onCta}
          className="h-[56px] flex-row items-center justify-center rounded-full bg-ink active:opacity-85"
        >
          {ctaIcon}
          <Text
            className="ml-2 text-button font-semibold"
            style={{ color: ctaColor }}
          >
            {ctaLabel}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
