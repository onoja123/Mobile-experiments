import React from 'react';
import { Text, View } from 'react-native';

import NoteChecklist from './NoteChecklist';
import NoteChip from './NoteChip';
import type { NoteContentProps } from './StickyNote.types';

export default function NoteContent({ note }: NoteContentProps) {
  return (
    <>
      <Text className="mb-2 pr-8 font-q700 text-[15px] leading-[21px] text-note">
        {note.title}
      </Text>

      {note.body ? (
        <Text className="font-q500 text-[12.5px] leading-[18px] text-note/90">{note.body}</Text>
      ) : null}

      {note.checklist ? <NoteChecklist items={note.checklist} /> : null}

      {note.meta ? (
        <Text className="mt-[10px] font-q500 text-[11px] text-note/60">{note.meta}</Text>
      ) : null}

      {note.tags || note.date ? (
        <View className="mt-3 flex-row items-center gap-2">
          {note.tags?.map((tag) => <NoteChip key={tag} label={tag} />)}
          {note.date ? <NoteChip label={note.date} icon="clock" /> : null}
        </View>
      ) : null}
    </>
  );
}
