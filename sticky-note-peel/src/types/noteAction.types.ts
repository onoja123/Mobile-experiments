import type { Feather } from '@expo/vector-icons';

import type { NoteAction } from '@/enums';

export type NoteActionConfig = {
  icon: keyof typeof Feather.glyphMap;
  label: NoteAction;
  accent: string;
};
