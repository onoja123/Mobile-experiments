import { Pressable, Text, View } from 'react-native';

import { WalletTab } from '@/enums/walletTab.enum';
import { SegmentTabsProps } from './SegmentTabs.types';

const TABS = [WalletTab.Assets, WalletTab.Gallery, WalletTab.History];

export default function SegmentTabs({ active, onChange }: SegmentTabsProps) {
  return (
    <View className="mt-8 flex-row items-center gap-7 border-b border-line px-5">
      {TABS.map((tab) => {
        const isActive = tab === active;
        return (
          <Pressable key={tab} onPress={() => onChange(tab)} className="pb-3">
            <Text
              className={`font-medium text-[15px] ${isActive ? 'text-ink' : 'text-smoke'}`}
            >
              {tab}
            </Text>
            <View
              className={`absolute -bottom-px left-0 right-0 h-[3px] rounded-full ${
                isActive ? 'bg-accent-ink' : 'bg-transparent'
              }`}
            />
          </Pressable>
        );
      })}
    </View>
  );
}
