import React, { useEffect, useState } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import StickyNote from '@/components/StickyNote';
import { CHROME_DIM_AMOUNT, DURATIONS } from '@/constants/animations';
import { NOTES_SCREEN_TITLE } from '@/constants/copy';
import {
  NOTE_LIST_BOTTOM_PADDING,
  NOTE_LIST_GAP,
  SCREEN_HORIZONTAL_PADDING,
  TITLE_COLLAPSE,
} from '@/constants/layout';
import { NOTES } from '@/data/notes';
import type { Note } from '@/types';
import ComposeNoteButton from './ComposeNoteButton';
import NotesHeader from './NotesHeader';

export default function NotesScreen() {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const noteWidth = width - SCREEN_HORIZONTAL_PADDING * 2;

  const [notes, setNotes] = useState<Note[]>(NOTES);
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);

  const dim = useSharedValue(0);
  useEffect(() => {
    dim.value = withTiming(activeNoteId ? 1 : 0, { duration: DURATIONS.dim });
  }, [activeNoteId, dim]);

  const scrollY = useSharedValue(0);
  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const largeTitleStyle = useAnimatedStyle(() => ({
    opacity:
      interpolate(scrollY.value, TITLE_COLLAPSE.largeTitleRange, [1, 0], Extrapolation.CLAMP) *
      (1 - CHROME_DIM_AMOUNT * dim.value),
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          TITLE_COLLAPSE.largeTitleRange,
          [0, -TITLE_COLLAPSE.titleShift],
          Extrapolation.CLAMP
        ),
      },
      {
        scale: interpolate(
          scrollY.value,
          TITLE_COLLAPSE.overscrollRange,
          [TITLE_COLLAPSE.overscrollScale, 1],
          Extrapolation.CLAMP
        ),
      },
    ],
  }));

  const removeNote = (id: string) => {
    setNotes((current) => current.filter((note) => note.id !== id));
    setActiveNoteId(null);
  };

  return (
    <View className="flex-1 bg-ink" style={{ paddingTop: insets.top }}>
      <NotesHeader scrollY={scrollY} dim={dim} />

      <Animated.ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        scrollEnabled={!activeNoteId}
        removeClippedSubviews={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
          paddingBottom: NOTE_LIST_BOTTOM_PADDING,
          gap: NOTE_LIST_GAP,
        }}
      >
        <Animated.View style={largeTitleStyle}>
          <Text className="mt-2 font-q600 text-[27px] text-white">{NOTES_SCREEN_TITLE}</Text>
        </Animated.View>
        {notes.map((note) => (
          <StickyNote
            key={note.id}
            note={note}
            width={noteWidth}
            isActive={activeNoteId === note.id}
            isDimmed={activeNoteId !== null && activeNoteId !== note.id}
            onFocus={setActiveNoteId}
            onBlur={() => setActiveNoteId(null)}
            onRemove={removeNote}
          />
        ))}
      </Animated.ScrollView>

      <ComposeNoteButton dim={dim} isInteractive={!activeNoteId} />
    </View>
  );
}
