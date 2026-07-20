import { LocationIcon } from "@/components/icons";
import { OnboardingStepLayout } from "@/components/OnboardingStepLayout";
import { CITIES } from "@/data/cities";
import { OnboardingStep } from "@/enums";
import { colors } from "@/theme";

type FindConcertsScreenProps = {
  onSkip?: () => void;
  onEnable?: () => void;
};

export function FindConcertsScreen({
  onSkip,
  onEnable,
}: FindConcertsScreenProps) {
  return (
    <OnboardingStepLayout
      step={OnboardingStep.FindConcerts}
      titleLine1="Find Concerts"
      titleLine2="Near You"
      titleIcon={<LocationIcon size={34} discColor={colors.locationDisc} />}
      subtitle="Turn on location to discover gigs, venues and festivals happening around you."
      items={CITIES}
      ctaIcon={<LocationIcon size={20} color={colors.locationAccent} />}
      ctaLabel="Enable Location"
      ctaColor={colors.locationAccent}
      onSkip={onSkip}
      onCta={onEnable}
    />
  );
}
