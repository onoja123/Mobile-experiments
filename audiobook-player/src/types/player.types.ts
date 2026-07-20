import type { SharedValue } from "react-native-reanimated";

import type { Story } from "./story.types";

export type PlayerContextValue = {
  sheetProgress: SharedValue<number>;
  playbackPosition: SharedValue<number>;
  track: Story;
  isPlaying: boolean;
  togglePlay: () => void;
  expandSheet: () => void;
  collapseSheet: () => void;
};
