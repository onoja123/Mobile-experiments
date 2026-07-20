import { Pressable, Text, View } from "react-native";

import { BackArrowIcon } from "@/components/icons";
import { TOTAL_ONBOARDING_STEPS } from "@/constants/onboarding";

type OnboardingHeaderProps = {
  step: number;
  onBack?: () => void;
  onSkip?: () => void;
};

export function OnboardingHeader({
  step,
  onBack,
  onSkip,
}: OnboardingHeaderProps) {
  return (
    <View className="h-11 flex-row items-center justify-between px-4">
      <Pressable hitSlop={12} className="w-14" onPress={onBack}>
        {onBack ? <BackArrowIcon /> : null}
      </Pressable>
      <Text className="text-label font-semibold text-ink">
        Connection{" "}
        <Text className="font-normal text-muted">
          — {step} of {TOTAL_ONBOARDING_STEPS}
        </Text>
      </Text>
      <View className="w-14 items-end">
        <Pressable
          hitSlop={8}
          onPress={onSkip}
          className="rounded-full bg-pill px-3 py-1 active:opacity-70"
        >
          <Text className="text-caption font-medium text-pill-label">Skip</Text>
        </Pressable>
      </View>
    </View>
  );
}
