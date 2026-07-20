import type { ReactNode } from 'react';

export type BookmarkCardDefinition = {
  id: string;
  title: string;
  height: number;
  icon: ReactNode;
  body: ReactNode;
};
