import { Text, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PressableScale } from '@/components';
import { ROUTES } from '@/constants/routes';

import { PhotoOrbit } from './components/PhotoOrbit';
import {
  CTA_ENTER_DELAY_MS,
  ONBOARDING_ENTER_MS,
  TAGLINE_ENTER_DELAY_MS,
} from './onboarding.constants';

export function OnboardingScreen() {
  const router = useRouter();

  const startExploring = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.replace(ROUTES.home);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-start justify-center pt-3">
        <Text className="font-jakarta-semibold text-[15px] tracking-[3px] text-ink">ESCAPE</Text>
        <Text className="font-jakarta-semibold text-[9px] text-ink">°</Text>
      </View>

      <View className="flex-1 items-center justify-center">
        <PhotoOrbit />
      </View>

      <Animated.View
        entering={FadeInDown.delay(TAGLINE_ENTER_DELAY_MS).duration(ONBOARDING_ENTER_MS)}
        className="items-center px-8"
      >
        <Text className="font-jakarta-medium text-[13px] text-muted">No stress — just travel</Text>
        <Text className="mt-2 text-center font-jakarta-semibold text-[30px] leading-[38px] tracking-[-0.5px] text-ink">
          Find the perfect{'\n'}place to relax for{'\n'}a couple of taps
        </Text>
      </Animated.View>

      <Animated.View
        entering={FadeIn.delay(CTA_ENTER_DELAY_MS).duration(ONBOARDING_ENTER_MS)}
        className="px-5 pb-2 pt-8"
      >
        <PressableScale
          scaleTo={0.97}
          className="h-14 items-center justify-center rounded-full bg-pill"
          onPress={startExploring}
        >
          <Text className="font-jakarta-semibold text-[15px] text-white">Let’s escape</Text>
        </PressableScale>
      </Animated.View>
    </SafeAreaView>
  );
}
