import { Pressable, TextInput } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

import { palette } from '@/theme';

import { SEARCH_BAR_PLACEHOLDER } from '../home.constants';

type SearchBarTriggerProps = {
  onPress: () => void;
};

export function SearchBarTrigger({ onPress }: SearchBarTriggerProps) {
  return (
    <Pressable
      className="mt-4 h-12 flex-row items-center rounded-full bg-field px-4"
      onPress={onPress}
    >
      <Feather name="search" size={16} color={palette.muted} />
      <TextInput
        editable={false}
        pointerEvents="none"
        placeholder={SEARCH_BAR_PLACEHOLDER}
        placeholderTextColor={palette.faint}
        className="ml-2.5 flex-1 font-jakarta text-[14px] text-ink"
      />
      <Ionicons name="options-outline" size={18} color={palette.ink} />
    </Pressable>
  );
}
