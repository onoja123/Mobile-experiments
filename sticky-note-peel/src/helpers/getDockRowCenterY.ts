import { DOCK_BUTTON_SIZE, DOCK_GAP } from '@/constants/dock';

export function getDockRowCenterY(noteHeight: number) {
  'worklet';
  return noteHeight + DOCK_GAP + DOCK_BUTTON_SIZE / 2;
}
