import { PanGesture } from 'react-native-gesture-handler';
import { SharedValue } from 'react-native-reanimated';

export type UsePriceRangeOptions = {
  domainMin?: number;
  domainMax?: number;
  initialLow: number;
  initialHigh: number;
  onChange?: (low: number, high: number) => void;
};

export type PriceRange = {
  loFrac: SharedValue<number>;
  hiFrac: SharedValue<number>;
  activeThumb: SharedValue<number>;
  lowDisplay: SharedValue<number>;
  highDisplay: SharedValue<number>;
  reset: () => void;
};

export type PriceRangeSliderProps = {
  range: PriceRange;
};

export type DemandHistogramProps = {
  width: number;
  barWidth: number;
  loFrac: SharedValue<number>;
  hiFrac: SharedValue<number>;
  activeThumb: SharedValue<number>;
};

export type HistogramBarProps = {
  index: number;
  barWidth: number;
  height: number;
  centerFrac: number;
  barCount: number;
  loFrac: SharedValue<number>;
  hiFrac: SharedValue<number>;
  activeThumb: SharedValue<number>;
};

export type SliderThumbProps = {
  gesture: PanGesture;
  frac: SharedValue<number>;
  width: number;
  thumbIndex: number;
  activeThumb: SharedValue<number>;
};
