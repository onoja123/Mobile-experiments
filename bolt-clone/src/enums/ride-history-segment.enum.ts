export const RideHistorySegment = {
  UPCOMING: 0,
  PAST: 1,
} as const;

export type RideHistorySegment = (typeof RideHistorySegment)[keyof typeof RideHistorySegment];
