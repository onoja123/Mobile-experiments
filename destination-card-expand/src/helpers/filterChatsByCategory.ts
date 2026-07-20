import { ChatFilter, ChatKind } from '@/enums';
import type { Chat } from '@/types';

export function filterChatsByCategory(
  chats: Chat[],
  filter: ChatFilter,
): Chat[] {
  if (filter === ChatFilter.All) return chats;
  if (filter === ChatFilter.Hosts) {
    return chats.filter((chat) => chat.kind === ChatKind.Host);
  }
  if (filter === ChatFilter.Trips) {
    return chats.filter((chat) => chat.kind === ChatKind.Trip);
  }
  return [];
}
