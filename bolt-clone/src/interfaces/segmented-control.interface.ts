export interface SegmentedControlProps {
  segments: readonly string[];
  value: number;
  onChange: (index: number) => void;
}
