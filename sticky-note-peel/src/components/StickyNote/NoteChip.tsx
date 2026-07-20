import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors } from '@/theme';
import type { NoteChipProps } from './StickyNote.types';

export default function NoteChip({ label, icon }: NoteChipProps) {
  return (
    <View className="flex-row items-center gap-1 rounded-full bg-white/75 px-3 py-[5px]">
      {icon ? <Feather name={icon} size={11} color={colors.noteText} /> : null}
      <Text className="font-q600 text-[11px] text-note">{label}</Text>
    </View>
  );
}
