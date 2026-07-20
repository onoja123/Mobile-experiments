export const RideOptionId = {
  BOLT: 'bolt',
  MOTORBIKE: 'motorbike',
  PRIORITY: 'priority',
  COMFORT: 'comfort',
  SEND: 'send',
} as const;

export type RideOptionId = (typeof RideOptionId)[keyof typeof RideOptionId];
