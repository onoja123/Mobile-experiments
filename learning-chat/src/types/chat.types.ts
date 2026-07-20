import { MessageAuthor } from "@/enums";

export type ChatMessage = {
  id: number;
  author: MessageAuthor;
  text: string;
};

export type ConversationStep = {
  author: MessageAuthor;
  text: string;
  pauseMs: number;
};
