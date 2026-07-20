import type { SharedValue } from 'react-native-reanimated';
import type { Feather } from '@expo/vector-icons';

import type { NoteAction } from '@/enums';
import type { FoldGeometry, Note } from '@/types';

export type StickyNoteProps = {
  note: Note;
  width: number;
  isActive: boolean;
  isDimmed: boolean;
  onFocus: (id: string) => void;
  onBlur: () => void;
  onRemove: (id: string, action: NoteAction) => void;
};

export type FoldTriangleProps = {
  geometry: SharedValue<FoldGeometry>;
  polygon: keyof FoldGeometry;
  index: number;
  fill: string;
};

export type NoteContentProps = {
  note: Note;
};

export type NoteChipProps = {
  label: string;
  icon?: keyof typeof Feather.glyphMap;
};

export type NoteChecklistProps = {
  items: string[];
};
