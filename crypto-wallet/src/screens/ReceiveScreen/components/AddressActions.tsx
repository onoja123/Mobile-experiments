import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FadeSwapText } from '@/components/FadeSwapText';
import { PressableScale } from '@/components/PressableScale';
import { useCopyFeedback } from '@/hooks/useCopyFeedback';
import type { Network } from '@/interfaces/network.interface';
import { haptics } from '@/services/haptics.service';
import { shareText } from '@/services/share.service';
import { colors } from '@/theme';

type AddressActionsProps = {
  network: Network;
};

export function AddressActions({ network }: AddressActionsProps) {
  const { copied, copy } = useCopyFeedback(network.address);

  const handleShare = () => {
    haptics.tap();
    shareText(network.address);
  };

  return (
    <View className="flex-row gap-3">
      <PressableScale
        lift
        haptic="none"
        onPress={copy}
        className="h-[52px] flex-1 flex-row items-center justify-center gap-2 rounded-[20px] bg-white"
        accessibilityLabel={copied ? 'Address copied' : 'Copy address'}
      >
        <Feather
          name={copied ? 'check' : 'copy'}
          size={16}
          color={copied ? colors.gain : colors.ink}
        />
        <FadeSwapText
          text={copied ? 'Copied' : 'Copy Address'}
          className={`text-[15px] font-semibold ${copied ? 'text-gain' : 'text-ink'}`}
        />
      </PressableScale>

      <PressableScale
        lift
        onPress={handleShare}
        className="h-[52px] flex-1 flex-row items-center justify-center gap-2 rounded-[20px] bg-white"
        accessibilityLabel="Share QR code"
      >
        <Feather name="share" size={16} color={colors.ink} />
        <FadeSwapText text="Share QR" className="text-[15px] font-semibold text-ink" />
      </PressableScale>
    </View>
  );
}
