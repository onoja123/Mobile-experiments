export const TabKey = {
  HOME: 'home',
  RIDES: 'rides',
  ACCOUNT: 'account',
} as const;

export type TabKey = (typeof TabKey)[keyof typeof TabKey];
