import { ChatKind } from '@/enums';

export type Chat = {
  id: string;
  name: string;
  avatar: string;
  message: string;
  time: string;
  kind: ChatKind;
  unread?: number;
  online?: boolean;
  typing?: boolean;
};

export type ActiveContact = {
  name: string;
  avatar: string;
};
