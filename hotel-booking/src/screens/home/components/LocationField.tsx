import { TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { palette } from '@/theme';

type LocationFieldProps = {
  value: string;
  onChangeText: (value: string) => void;
};

export function LocationField({ value, onChangeText }: LocationFieldProps) {
  return (
    <View className="h-12 flex-row items-center rounded-full border border-line px-4">
      <TextInput
        value={value}
        onChangeText={onChangeText}
        className="flex-1 font-jakarta-medium text-[14px] text-ink"
        placeholderTextColor={palette.faint}
      />
      <Feather name="search" size={16} color={palette.muted} />
    </View>
  );
}
