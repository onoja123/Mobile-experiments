import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInDown, ZoomIn } from 'react-native-reanimated';
import { PressableScale } from '@/components/PressableScale';
import { groupThousands } from '@/helpers/groupThousands';
import type { Ipo } from '@/interfaces/ipo.interface';
import { CompanyLogo } from '../CompanyLogo';
import { ConfirmationDetailRow } from './ConfirmationDetailRow';
import { styles } from './styles';

type SuccessStageProps = {
  ipo: Ipo;
  amountUsd: number;
  allocationText: string;
  onDone: () => void;
};

export function SuccessStage({ ipo, amountUsd, allocationText, onDone }: SuccessStageProps) {
  return (
    <Animated.View
      key="success"
      entering={FadeInDown.duration(280)}
      className="items-center pt-4"
    >
      <Animated.View entering={ZoomIn.delay(60).springify().damping(13)}>
        <View>
          <CompanyLogo size={72} gradient={ipo.gradient} monogram={ipo.monogram} />
          <Animated.View
            entering={ZoomIn.delay(420).springify().damping(12)}
            style={styles.badge}
          >
            <Feather name="check" size={15} color="#FFFFFF" />
          </Animated.View>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(220).duration(300)} className="items-center">
        <Text className="mt-5 text-[19px] font-bold text-ink">
          Subscription Confirmed
        </Text>
        <Text className="mt-1 text-[13px] text-subtle">
          You're in line for {ipo.company}'s listing
        </Text>
      </Animated.View>

      <Animated.View
        entering={FadeInDown.delay(340).duration(320)}
        className="mt-6 self-stretch rounded-[20px] bg-screen px-4 py-1.5"
      >
        <ConfirmationDetailRow label="Investment" value={`$${groupThousands(String(amountUsd))}`} />
        <ConfirmationDetailRow label="Estimated Allocation" value={allocationText} />
        <ConfirmationDetailRow label="Expected Listing" value={ipo.listingDate} />
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(460).duration(320)} className="mt-6 self-stretch">
        <PressableScale
          haptic="press"
          onPress={onDone}
          className="h-[52px] items-center justify-center rounded-full bg-ink"
          accessibilityLabel="Done"
        >
          <Text className="text-[15px] font-bold text-white">Done</Text>
        </PressableScale>
      </Animated.View>
    </Animated.View>
  );
}
