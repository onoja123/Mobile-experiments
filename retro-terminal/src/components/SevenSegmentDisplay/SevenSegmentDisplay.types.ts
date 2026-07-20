export type SegmentKey = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export type SevenSegmentCharacterProps = {
  char: string;
  size: number;
  color?: string;
};

export type SevenSegmentRowProps = {
  text: string;
  size: number;
  gap?: number;
  color?: string;
};
