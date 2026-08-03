import { Pressable, Text, View } from 'react-native';

import { TRADE_TABS } from '@/data/trade';

export default function TradeTabs() {
  return (
    <View className="flex-row items-end gap-6 border-b border-mist">
      {TRADE_TABS.map((tab, index) => {
        const active = index === 0;
        return (
          <Pressable key={tab} className="pb-2.5" style={active ? { marginBottom: -1 } : undefined}>
            <Text className={active ? 'text-[14px] font-strong text-ink' : 'font-sans text-[13px] text-smoke'}>
              {tab}
            </Text>
            {active && <View className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-ink" />}
          </Pressable>
        );
      })}
    </View>
  );
}
