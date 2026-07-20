import React from 'react';
import { Text, View } from 'react-native';
import { PressableScale } from '@/components/PressableScale';

const PRESETS = [500, 1000, 2500, 5000, 10000];

type InvestmentPresetsProps = {
  amount: number;
  onSelect: (preset: number) => void;
};

export function InvestmentPresets({ amount, onSelect }: InvestmentPresetsProps) {
  return (
    <View className="mt-3 flex-row" style={{ gap: 8 }}>
      {PRESETS.map((preset) => {
        const active = amount === preset;
        return (
          <PressableScale
            key={preset}
            scaleTo={0.94}
            haptic="selection"
            onPress={() => onSelect(preset)}
            className={`flex-1 items-center rounded-full py-2 ${
              active ? 'bg-ink' : 'bg-chip'
            }`}
            accessibilityLabel={`Invest $${preset}`}
            accessibilityState={{ selected: active }}
          >
            <Text
              className={`text-[12px] font-semibold ${
                active ? 'text-white' : 'text-ink'
              }`}
            >
              {preset >= 1000 ? `$${preset / 1000}K` : `$${preset}`}
            </Text>
          </PressableScale>
        );
      })}
    </View>
  );
}
