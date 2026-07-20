import { ChatKind } from '@/enums';
import type { ActiveContact, Chat } from '@/types';

export const CHATS: Chat[] = [
  {
    id: 'chidi',
    name: 'Chidi Okafor',
    avatar: 'https://i.pravatar.cc/96?img=12',
    message: 'Boat leaves from Fiki Marina at 9am — don’t be late! 🌊',
    time: '10:24',
    kind: ChatKind.Host,
    unread: 2,
    online: true,
  },
  {
    id: 'obudu-resort',
    name: 'Obudu Mountain Resort',
    avatar: 'https://i.pravatar.cc/96?img=60',
    message: 'Your cable car passes are confirmed for Saturday.',
    time: '09:12',
    kind: ChatKind.Trip,
    unread: 1,
  },
  {
    id: 'amaka',
    name: 'Amaka E.',
    avatar: 'https://i.pravatar.cc/96?img=32',
    message: 'Okay so picnic basket is sorted, what about drinks?',
    time: 'now',
    kind: ChatKind.Host,
    online: true,
    typing: true,
  },
  {
    id: 'lekki-centre',
    name: 'Lekki Conservation',
    avatar: 'https://i.pravatar.cc/96?img=59',
    message: 'The canopy walk opens at 8:30 — want the early slot?',
    time: 'Yesterday',
    kind: ChatKind.Trip,
  },
  {
    id: 'tunde',
    name: 'Tunde B.',
    avatar: 'https://i.pravatar.cc/96?img=15',
    message: 'Sent you the photos from the hike 📸',
    time: 'Yesterday',
    kind: ChatKind.Host,
    online: true,
  },
  {
    id: 'seyi',
    name: 'Seyi A.',
    avatar: 'https://i.pravatar.cc/96?img=47',
    message: 'That sunset though!! We have to go back.',
    time: 'Tue',
    kind: ChatKind.Host,
  },
  {
    id: 'support',
    name: 'Trip Support',
    avatar: 'https://i.pravatar.cc/96?img=8',
    message: 'Your refund for Ikogosi Springs has been processed.',
    time: 'Mon',
    kind: ChatKind.Trip,
  },
];

export const ACTIVE_NOW_CONTACTS: ActiveContact[] = CHATS.filter(
  (chat) => chat.online,
).map((chat) => ({
  name: chat.name.split(' ')[0],
  avatar: chat.avatar,
}));
