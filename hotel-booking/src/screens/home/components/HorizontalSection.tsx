import { ReactNode } from 'react';
import { Text } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { SCREEN_ENTER_MS } from '@/constants/animation';

type HorizontalSectionProps = {
  title: string;
  enterDelay: number;
  gapClassName: string;
  children: ReactNode;
};

export function HorizontalSection({
  title,
  enterDelay,
  gapClassName,
  children,
}: HorizontalSectionProps) {
  return (
    <>
      <Animated.View
        entering={FadeInDown.delay(enterDelay).duration(SCREEN_ENTER_MS)}
        className="mt-6 px-5"
      >
        <Text className="mb-3 font-jakarta-semibold text-[15px] text-ink">{title}</Text>
      </Animated.View>
      <Animated.ScrollView
        entering={FadeInDown.delay(enterDelay).duration(SCREEN_ENTER_MS)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName={`${gapClassName} px-5`}
      >
        {children}
      </Animated.ScrollView>
    </>
  );
}
