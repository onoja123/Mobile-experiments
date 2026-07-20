import { SpotifyIcon } from "@/components/icons";
import { OnboardingStepLayout } from "@/components/OnboardingStepLayout";
import { ARTISTS } from "@/data/artists";
import { OnboardingStep } from "@/enums";
import { colors } from "@/theme";

type ConnectSpotifyScreenProps = {
  onBack?: () => void;
  onSkip?: () => void;
  onConnect?: () => void;
};

export function ConnectSpotifyScreen({
  onBack,
  onSkip,
  onConnect,
}: ConnectSpotifyScreenProps) {
  return (
    <OnboardingStepLayout
      step={OnboardingStep.ConnectSpotify}
      titleLine1="Connect Your"
      titleLine2="Spotify"
      titleIcon={<SpotifyIcon size={34} discColor={colors.ink} />}
      subtitle="Link Spotify to track favorite artists and get concert recommendations tailored to your listening."
      items={ARTISTS}
      ctaIcon={<SpotifyIcon size={20} />}
      ctaLabel="Connect Spotify"
      ctaColor={colors.spotify}
      onBack={onBack}
      onSkip={onSkip}
      onCta={onConnect}
    />
  );
}
