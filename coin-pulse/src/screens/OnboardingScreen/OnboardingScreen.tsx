import { ComponentType } from 'react';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ONBOARDING_SLIDES } from '@/data/onboarding';
import BitcoinIllustration from './components/BitcoinIllustration';
import OctagonIllustration from './components/OctagonIllustration';
import PagerDots from './components/PagerDots';
import SlideIllustration from './components/SlideIllustration';
import TorusIllustration from './components/TorusIllustration';
import { OnboardingScreenProps } from './OnboardingScreen.types';

const illustrationById: Record<string, ComponentType> = {
  markets: TorusIllustration,
  prices: BitcoinIllustration,
  trading: OctagonIllustration,
};

export default function OnboardingScreen({ onGetStarted }: OnboardingScreenProps) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const progress = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((event) => {
    progress.value = event.contentOffset.x / width;
  });

  const footerBottom = insets.bottom + 24;
  const pageBottomPadding = footerBottom + 52 + 32 + 6 + 24;

  return (
    <View className="flex-1 bg-white">
      <Animated.ScrollView
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={StyleSheet.absoluteFill}
      >
        {ONBOARDING_SLIDES.map((slide) => (
          <View
            key={slide.id}
            className="items-center justify-end px-8"
            style={{ width, paddingBottom: pageBottomPadding }}
          >
            <Text className="text-center text-[26px] font-strong leading-8 tracking-tight text-ink">
              {slide.title}
            </Text>
            <Text className="font-sans mt-3 text-center text-[13px] leading-[19px] text-smoke">
              {slide.subtitle}
            </Text>
          </View>
        ))}
      </Animated.ScrollView>

      <View
        pointerEvents="none"
        style={{ position: 'absolute', top: insets.top, left: 0, right: 0, height: '54%' }}
      >
        {ONBOARDING_SLIDES.map((slide, index) => {
          const Illustration = illustrationById[slide.id];
          return (
            <SlideIllustration key={slide.id} index={index} progress={progress}>
              <Illustration />
            </SlideIllustration>
          );
        })}
      </View>

      <View
        pointerEvents="box-none"
        className="absolute left-0 right-0 items-center"
        style={{ bottom: footerBottom }}
      >
        <PagerDots count={ONBOARDING_SLIDES.length} progress={progress} />
        <Pressable
          className="mt-8 h-[52px] w-[178px] items-center justify-center rounded-2xl bg-ink active:opacity-80"
          onPress={onGetStarted}
        >
          <Text className="text-[15px] font-semi text-white">Open my account</Text>
        </Pressable>
      </View>
    </View>
  );
}
