import { NoteAction } from '@/enums';
import { colors } from '@/theme';
import type { NoteActionConfig } from '@/types';

export const NOTE_ACTIONS: NoteActionConfig[] = [
  { icon: 'trash-2', label: NoteAction.Delete, accent: colors.danger },
  { icon: 'archive', label: NoteAction.Archive, accent: colors.info },
  { icon: 'share', label: NoteAction.Share, accent: colors.success },
];
