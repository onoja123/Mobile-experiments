import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/theme';

type TokenSearchFieldProps = {
  query: string;
  onChangeQuery: (query: string) => void;
};

export function TokenSearchField({ query, onChangeQuery }: TokenSearchFieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View
      className={`mb-3 h-11 flex-row items-center rounded-full px-3.5 ${
        focused ? 'border border-accent/40 bg-white' : 'bg-chip'
      }`}
    >
      <Feather name="search" size={16} color={colors.subtle} />
      <TextInput
        className="ml-2 flex-1 text-[15px] text-ink"
        value={query}
        onChangeText={onChangeQuery}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search assets"
        placeholderTextColor={colors.subtle}
        autoCorrect={false}
        autoCapitalize="none"
        accessibilityLabel="Search assets"
      />
    </View>
  );
}
