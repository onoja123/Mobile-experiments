export type PanDirection = 'up' | 'down';

export interface ExploreMapScreenProps {
  collapsed?: boolean;
  onPanDirection?: (direction: PanDirection) => void;
}
