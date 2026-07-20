export const ROUTES = {
  home: '/home',
  hotelDetail: (id: string) => `/hotel/${id}` as const,
} as const;
