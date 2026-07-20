import React from 'react';
import { Text, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { SEARCH_BAR_HEIGHT } from '@/constants/layout';
import { colors, shadows, typography } from '@/theme';

export default function SearchBar() {
  return (
    <View
      className="mt-5 flex-row items-center rounded-full bg-white px-5"
      style={[{ height: SEARCH_BAR_HEIGHT }, shadows.searchBar]}
    >
      <Feather name="search" size={19} color={colors.steel} />
      <Text className="ml-3 font-sans text-muted" style={typography.callout}>
        Where do you wanna go?
      </Text>
    </View>
  );
}
