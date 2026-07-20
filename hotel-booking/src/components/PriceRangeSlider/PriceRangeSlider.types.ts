import { PanGesture } from 'react-native-gesture-handler';
import { SharedValue } from 'react-native-reanimated';

export type PriceRangeSliderProps = {
  domainMin?: number;
  domainMax?: number;
  initialLow: number;
  initialHigh: number;
  onChange: (low: number, high: number) => void;
};

export type DemandHistogramProps = {
  barWidth: number;
  lowX: SharedValue<number>;
  highX: SharedValue<number>;
};

export type HistogramBarProps = DemandHistogramProps & {
  index: number;
  height: number;
};

export type SliderThumbProps = {
  gesture: PanGesture;
  position: SharedValue<number>;
};
