import React from 'react';
import { Text, View } from 'react-native';

import { colors } from '@/theme';
import type { NoteChecklistProps } from './StickyNote.types';

function ChecklistCheckbox() {
  return (
    <View
      style={{
        width: 17,
        height: 17,
        borderRadius: 9,
        borderWidth: 1.5,
        borderColor: colors.noteText,
        opacity: 0.75,
      }}
    />
  );
}

export default function NoteChecklist({ items }: NoteChecklistProps) {
  return (
    <View className="gap-[9px]">
      {items.map((item) => (
        <View key={item} className="flex-row items-center gap-[10px]">
          <ChecklistCheckbox />
          <Text className="font-q500 text-[12.5px] text-note/95">{item}</Text>
        </View>
      ))}
    </View>
  );
}
