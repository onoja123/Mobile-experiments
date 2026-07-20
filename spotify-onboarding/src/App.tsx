import "../global.css";

import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Animated, { FadeIn } from "react-native-reanimated";

import { SCREEN_FADE_IN_MS } from "@/constants/animations";
import { OnboardingStep } from "@/enums";
import { ConnectSpotifyScreen, FindConcertsScreen } from "@/screens";

export default function App() {
  const [step, setStep] = useState<OnboardingStep>(OnboardingStep.FindConcerts);

  const goToFindConcerts = () => setStep(OnboardingStep.FindConcerts);
  const goToConnectSpotify = () => setStep(OnboardingStep.ConnectSpotify);

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Animated.View
        key={step}
        entering={FadeIn.duration(SCREEN_FADE_IN_MS)}
        className="flex-1"
      >
        {step === OnboardingStep.FindConcerts ? (
          <FindConcertsScreen
            onSkip={goToConnectSpotify}
            onEnable={goToConnectSpotify}
          />
        ) : (
          <ConnectSpotifyScreen
            onBack={goToFindConcerts}
            onSkip={goToConnectSpotify}
          />
        )}
      </Animated.View>
    </SafeAreaProvider>
  );
}
