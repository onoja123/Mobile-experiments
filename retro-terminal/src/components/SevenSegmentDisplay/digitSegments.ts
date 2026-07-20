import { SegmentKey } from './SevenSegmentDisplay.types';

export const DIGIT_SEGMENTS: Record<string, SegmentKey[]> = {
  '0': ['A', 'B', 'C', 'D', 'E', 'F'],
  '1': ['B', 'C'],
  '2': ['A', 'B', 'G', 'E', 'D'],
  '3': ['A', 'B', 'C', 'D', 'G'],
  '4': ['F', 'G', 'B', 'C'],
  '5': ['A', 'F', 'G', 'C', 'D'],
  '6': ['A', 'F', 'G', 'E', 'D', 'C'],
  '7': ['A', 'B', 'C'],
  '8': ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  '9': ['A', 'B', 'C', 'D', 'F', 'G'],
};
