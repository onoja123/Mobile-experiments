import {
  ArcBody,
  ArcIcon,
  MymindBody,
  MymindIcon,
  NotionBody,
  NotionIcon,
  PlayBody,
  PlayIcon,
} from '@/components/previews';
import type { BookmarkCardDefinition } from '@/types';

export const BOOKMARK_CARDS: BookmarkCardDefinition[] = [
  {
    id: 'mymind',
    title: 'mymind — Second Brain',
    height: 208,
    icon: <MymindIcon />,
    body: <MymindBody />,
  },
  {
    id: 'play',
    title: 'Play — Design on iOS',
    height: 204,
    icon: <PlayIcon />,
    body: <PlayBody />,
  },
  {
    id: 'arc',
    title: 'Arc — Browse Better',
    height: 202,
    icon: <ArcIcon />,
    body: <ArcBody />,
  },
  {
    id: 'notion',
    title: 'Notion — Your Workspace',
    height: 192,
    icon: <NotionIcon />,
    body: <NotionBody />,
  },
];
