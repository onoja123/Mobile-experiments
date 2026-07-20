import type { RefObject } from 'react';
import type { View } from 'react-native';
import type { SkImage } from '@shopify/react-native-skia';

export type DissolveJob = {
  key: number;
  image: SkImage;
  x: number;
  y: number;
  width: number;
  height: number;
  reverse?: boolean;
  onDone?: () => void;
};

export type DissolveOptions = {
  onCaptured?: () => void;
  onDone?: () => void;
};

export type MaterializeOptions = {
  onDone?: () => void;
};

export type DissolveContextValue = {
  dissolve: (ref: RefObject<View | null>, options?: DissolveOptions) => Promise<SkImage | null>;
  materialize: (
    ref: RefObject<View | null>,
    image: SkImage,
    options?: MaterializeOptions,
  ) => void;
};
