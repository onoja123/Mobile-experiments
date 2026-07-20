import React, { useCallback, useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { haptics } from '@/services/haptics.service';
import { cardIn, cardLayout, cardOut } from './confirmationTransitions';
import { ProcessingStage } from './ProcessingStage';
import { ReviewStage } from './ReviewStage';
import { styles } from './styles';
import type { SubscribeConfirmationProps } from './SubscribeConfirmation.types';
import { SuccessStage } from './SuccessStage';

const PROCESSING_MS = 1700;

type Stage = 'review' | 'processing' | 'success';

export function SubscribeConfirmation({
  visible,
  ipo,
  amountUsd,
  estimate,
  bottomInset,
  onCancel,
  onDone,
}: SubscribeConfirmationProps) {
  const [stage, setStage] = useState<Stage>('review');

  useEffect(() => {
    if (visible) setStage('review');
  }, [visible]);

  useEffect(() => {
    if (stage !== 'processing') return undefined;
    const timer = setTimeout(() => {
      setStage('success');
      haptics.success();
    }, PROCESSING_MS);
    return () => clearTimeout(timer);
  }, [stage]);

  const handleConfirm = useCallback(() => {
    setStage('processing');
  }, []);

  if (!visible) return null;

  const allocationText = `${estimate.allocationPercent}% · ~${estimate.shares} shares`;

  return (
    <View style={styles.overlay}>
      <Animated.View
        entering={FadeIn.duration(240)}
        exiting={FadeOut.duration(220)}
        style={styles.backdrop}
      >
        <BlurView intensity={32} tint="dark" style={styles.blur}>
          <Pressable
            className="flex-1 bg-black/25"
            onPress={stage === 'review' ? onCancel : undefined}
            accessibilityRole="button"
            accessibilityLabel="Dismiss"
          />
        </BlurView>
      </Animated.View>

      <Animated.View
        entering={cardIn}
        exiting={cardOut}
        layout={cardLayout}
        style={[styles.card, { paddingBottom: bottomInset + 20 }]}
      >
        {stage === 'review' && (
          <ReviewStage
            ipo={ipo}
            amountUsd={amountUsd}
            allocationText={allocationText}
            onConfirm={handleConfirm}
            onCancel={onCancel}
          />
        )}
        {stage === 'processing' && <ProcessingStage ipo={ipo} amountUsd={amountUsd} />}
        {stage === 'success' && (
          <SuccessStage
            ipo={ipo}
            amountUsd={amountUsd}
            allocationText={allocationText}
            onDone={onDone}
          />
        )}
      </Animated.View>
    </View>
  );
}
