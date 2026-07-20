import type { Chat } from '@/types';

export function getTotalUnreadCount(chats: Chat[]): number {
  return chats.reduce((sum, chat) => sum + (chat.unread ?? 0), 0);
}
