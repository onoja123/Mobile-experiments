import type { ReactNode } from 'react';

export interface RefreshableValueProps {
  refreshing: boolean;
  shimmerWidth?: number;
  shimmerHeight?: number;
  children: ReactNode;
}
