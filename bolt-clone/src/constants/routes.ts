import { TabKey } from '@/enums';

export const RIDE_OPTIONS_ROUTE = '/ride-options' as const;

export const TAB_ROUTE_BY_KEY: Record<TabKey, string> = {
  [TabKey.HOME]: 'index',
  [TabKey.RIDES]: 'rides',
  [TabKey.ACCOUNT]: 'account',
};

export const TAB_KEY_BY_ROUTE: Record<string, TabKey> = Object.fromEntries(
  Object.entries(TAB_ROUTE_BY_KEY).map(([key, route]) => [route, key as TabKey]),
);
