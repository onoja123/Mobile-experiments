import React from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { LoadingRing } from '@/components/LoadingRing';
import { groupThousands } from '@/helpers/groupThousands';
import type { Ipo } from '@/interfaces/ipo.interface';
import { CompanyLogo } from '../CompanyLogo';
import { RING, styles } from './styles';

type ProcessingStageProps = {
  ipo: Ipo;
  amountUsd: number;
};

export function ProcessingStage({ ipo, amountUsd }: ProcessingStageProps) {
  return (
    <Animated.View
      key="processing"
      entering={FadeIn.duration(200)}
      exiting={FadeOut.duration(140)}
      className="items-center py-6"
    >
      <View style={styles.ringZone}>
        <LoadingRing size={RING} />
        <CompanyLogo size={44} gradient={ipo.gradient} monogram={ipo.monogram} />
      </View>
      <Text className="mt-5 text-[16px] font-bold text-ink">
        Placing subscription
      </Text>
      <Text className="mt-1 text-[13px] text-subtle">
        ${groupThousands(String(amountUsd))} · {ipo.ticker}
      </Text>
    </Animated.View>
  );
}
