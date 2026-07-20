import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeIn, FadeInDown, FadeOutUp, ZoomIn } from 'react-native-reanimated';
import { GradientAvatar } from '@/components/GradientAvatar';
import { PressableScale } from '@/components/PressableScale';
import { Shimmer } from '@/components/Shimmer';
import { truncateAddress } from '@/helpers/truncateAddress';
import type { Recipient } from '@/interfaces/recipient.interface';
import { colors } from '@/theme';

type RecipientCardProps = {
  recipient: Recipient | null;
  resolving: boolean;
  onPastePress: () => void;
  onScanPress: () => void;
  onClear: () => void;
};

const stateEnter = FadeInDown.duration(280);
const stateExit = FadeOutUp.duration(180);

const styles = StyleSheet.create({
  state: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  badge: {
    marginLeft: 6,
  },
});

function EmptyState({ onScanPress }: { onScanPress: () => void }) {
  return (
    <Animated.View entering={stateEnter} exiting={stateExit} style={styles.state}>
      <View className="h-11 w-11 items-center justify-center rounded-full border border-dashed border-cents">
        <Feather name="user" size={18} color={colors.subtle} />
      </View>
      <Text className="ml-3.5 flex-1 text-[15px] font-medium text-subtle">
        Paste or scan wallet address
      </Text>
      <PressableScale
        scaleTo={0.92}
        onPress={onScanPress}
        className="h-11 w-11 items-center justify-center rounded-full bg-chip"
        accessibilityLabel="Scan a QR code"
      >
        <MaterialCommunityIcons name="qrcode-scan" size={18} color={colors.ink} />
      </PressableScale>
    </Animated.View>
  );
}

function ResolvingState() {
  return (
    <Animated.View entering={stateEnter} exiting={stateExit} style={styles.state}>
      <Shimmer width={44} height={44} radius={22} />
      <View className="ml-3.5 gap-2">
        <Shimmer width={124} height={15} radius={6} />
        <Shimmer width={88} height={12} radius={6} />
      </View>
    </Animated.View>
  );
}

function FilledState({
  recipient,
  onClear,
}: {
  recipient: Recipient;
  onClear: () => void;
}) {
  return (
    <Animated.View entering={stateEnter} exiting={stateExit} style={styles.state}>
      <Animated.View entering={FadeIn.duration(340)}>
        <GradientAvatar size={44} gradient={recipient.gradient} label={recipient.name} />
      </Animated.View>
      <View className="ml-3.5 flex-1">
        <View className="flex-row items-center">
          <Text className="text-[16px] font-bold text-ink">{recipient.name}</Text>
          {recipient.verified && (
            <Animated.View
              entering={ZoomIn.delay(180).springify().damping(14)}
              style={styles.badge}
            >
              <MaterialCommunityIcons
                name="check-decagram"
                size={16}
                color={colors.accent}
                accessibilityLabel="Verified recipient"
              />
            </Animated.View>
          )}
        </View>
        <Animated.View entering={FadeIn.delay(90).duration(300)}>
          <Text className="mt-0.5 text-[13px] text-subtle">
            {truncateAddress(recipient.address)}
          </Text>
        </Animated.View>
      </View>
      <PressableScale
        scaleTo={0.92}
        onPress={onClear}
        className="h-9 w-9 items-center justify-center rounded-full bg-chip"
        accessibilityLabel="Remove recipient"
      >
        <Feather name="x" size={16} color={colors.subtle} />
      </PressableScale>
    </Animated.View>
  );
}

export function RecipientCard({
  recipient,
  resolving,
  onPastePress,
  onScanPress,
  onClear,
}: RecipientCardProps) {
  const empty = !recipient && !resolving;

  return (
    <PressableScale
      scaleTo={0.98}
      lift
      disabled={!empty}
      onPress={onPastePress}
      className="h-[78px] justify-center overflow-hidden rounded-[24px] bg-white"
      accessibilityLabel={
        recipient
          ? `Recipient ${recipient.name}, ${truncateAddress(recipient.address)}`
          : 'Paste or scan wallet address'
      }
    >
      {empty && <EmptyState onScanPress={onScanPress} />}
      {resolving && <ResolvingState />}
      {recipient && !resolving && (
        <FilledState recipient={recipient} onClear={onClear} />
      )}
    </PressableScale>
  );
}
