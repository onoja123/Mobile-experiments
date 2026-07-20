import { DOCK_BUTTON_SPACING } from '@/constants/dock';
import { NOTE_ACTIONS } from '@/constants/noteActions';

export function getDockButtonCenterX(actionIndex: number, containerWidth: number) {
  'worklet';
  const middleIndex = (NOTE_ACTIONS.length - 1) / 2;
  return containerWidth / 2 + (actionIndex - middleIndex) * DOCK_BUTTON_SPACING;
}
