export type MessageRole = "assistant" | "user";

export interface TextSegment {
  type: "text";
  text: string;
}

export interface CodeSegment {
  type: "code";
  language: string;
  code: string;
}

export type MessageSegment = TextSegment | CodeSegment;

export interface ChatMessage {
  id: string;
  role: MessageRole;
  segments: MessageSegment[];
  streaming: boolean;
  createdAt: number;
}

export interface Chat {
  id: string;
  title: string | null;
  messages: ChatMessage[];
  createdAt: number;
}
