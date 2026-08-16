import type { SharedValue } from 'react-native-reanimated';

import type { Album } from '@/data/albums';

export type CoverflowProps = {
  albums: Album[];
  initialIndex?: number;
  onIndexChange?: (index: number) => void;
  progress?: SharedValue<number>;
};

export type CoverflowHandle = {
  scrollTo: (index: number) => void;
};
