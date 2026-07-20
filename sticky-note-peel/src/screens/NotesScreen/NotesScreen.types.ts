import type { SharedValue } from 'react-native-reanimated';

export type NotesHeaderProps = {
  scrollY: SharedValue<number>;
  dim: SharedValue<number>;
};

export type ComposeNoteButtonProps = {
  dim: SharedValue<number>;
  isInteractive: boolean;
};
