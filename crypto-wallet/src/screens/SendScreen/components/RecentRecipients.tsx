import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { GradientAvatar } from '@/components/GradientAvatar';
import { PressableScale } from '@/components/PressableScale';
import type { Recipient } from '@/interfaces/recipient.interface';

type RecentRecipientsProps = {
  recipients: Recipient[];
  onSelect: (recipient: Recipient) => void;
};

export function RecentRecipients({ recipients, onSelect }: RecentRecipientsProps) {
  return (
    <View>
      <Text className="mb-2.5 px-6 text-[13px] font-semibold uppercase tracking-wide text-subtle">
        Recents
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-5 px-6"
      >
        {recipients.map((recipient) => (
          <PressableScale
            key={recipient.id}
            scaleTo={0.88}
            haptic="selection"
            onPress={() => onSelect(recipient)}
            className="items-center"
            accessibilityLabel={`Send to ${recipient.name}`}
          >
            <GradientAvatar size={50} gradient={recipient.gradient} label={recipient.name} />
            <Text className="mt-1.5 max-w-[64px] text-[12px] font-medium text-subtle" numberOfLines={1}>
              {recipient.name}
            </Text>
          </PressableScale>
        ))}
      </ScrollView>
    </View>
  );
}
