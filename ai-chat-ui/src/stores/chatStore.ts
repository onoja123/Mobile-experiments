import { create } from "zustand";
import { Chat, ChatMessage } from "@/types/chat";
import { getAssistantResponse, RESPONSE_DELAY_MS } from "@/services/assistant";
import { createId } from "@/utils/id";

const GREETING_LINES = ["Hello, I'm Lefter!", "What can I do for you?"];

function greetingMessages(): ChatMessage[] {
  return GREETING_LINES.map((line) => ({
    id: createId("msg"),
    role: "assistant",
    segments: [{ type: "text", text: line }],
    streaming: false,
    createdAt: Date.now(),
  }));
}

function seedChat(title: string): Chat {
  return {
    id: createId("chat"),
    title,
    messages: greetingMessages(),
    createdAt: Date.now(),
  };
}

interface ChatState {
  chats: Chat[];
  activeChatId: string;
  drawerOpen: boolean;
  freshChatTitleId: string | null;
  openDrawer: () => void;
  closeDrawer: () => void;
  setActiveChat: (chatId: string) => void;
  newChat: () => void;
  cleanChats: () => void;
  sendMessage: (text: string) => string;
  finishStreaming: (chatId: string, messageId: string) => void;
  clearFreshTitle: () => void;
}

function createEmptyChat(): Chat {
  return {
    id: createId("chat"),
    title: null,
    messages: greetingMessages(),
    createdAt: Date.now(),
  };
}

const initialChat = createEmptyChat();

export const useChatStore = create<ChatState>((set, get) => ({
  chats: [
    initialChat,
    seedChat("10 ideas for weekend trip"),
    seedChat("How to write poems?"),
    seedChat("Placeholder copy for mockups"),
  ],
  activeChatId: initialChat.id,
  drawerOpen: false,
  freshChatTitleId: null,

  openDrawer: () => set({ drawerOpen: true }),
  closeDrawer: () => set({ drawerOpen: false }),

  setActiveChat: (chatId) => set({ activeChatId: chatId, drawerOpen: false }),

  newChat: () => {
    const existingEmpty = get().chats.find((chat) => chat.title === null);
    if (existingEmpty) {
      set({ activeChatId: existingEmpty.id, drawerOpen: false });
      return;
    }
    const chat = createEmptyChat();
    set((state) => ({
      chats: [chat, ...state.chats],
      activeChatId: chat.id,
      drawerOpen: false,
    }));
  },

  cleanChats: () => {
    const chat = createEmptyChat();
    set({ chats: [chat], activeChatId: chat.id, freshChatTitleId: null });
  },

  sendMessage: (text) => {
    const trimmed = text.trim();
    if (!trimmed) return "";
    const { activeChatId } = get();

    const userMessage: ChatMessage = {
      id: createId("msg"),
      role: "user",
      segments: [{ type: "text", text: trimmed }],
      streaming: false,
      createdAt: Date.now(),
    };

    set((state) => ({
      freshChatTitleId:
        state.chats.find((c) => c.id === activeChatId)?.title === null
          ? activeChatId
          : state.freshChatTitleId,
      chats: state.chats.map((chat) =>
        chat.id === activeChatId
          ? {
              ...chat,
              title: chat.title ?? trimmed,
              messages: [...chat.messages, userMessage],
            }
          : chat,
      ),
    }));

    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: createId("msg"),
        role: "assistant",
        segments: getAssistantResponse(trimmed),
        streaming: false,
        createdAt: Date.now(),
      };
      set((state) => ({
        chats: state.chats.map((chat) =>
          chat.id === activeChatId
            ? { ...chat, messages: [...chat.messages, assistantMessage] }
            : chat,
        ),
      }));
    }, RESPONSE_DELAY_MS);

    return userMessage.id;
  },

  finishStreaming: (chatId, messageId) => {
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: chat.messages.map((message) =>
                message.id === messageId
                  ? { ...message, streaming: false }
                  : message,
              ),
            }
          : chat,
      ),
    }));
  },

  clearFreshTitle: () => set({ freshChatTitleId: null }),
}));

export function useActiveChat(): Chat {
  return useChatStore((state) => {
    const active = state.chats.find((chat) => chat.id === state.activeChatId);
    return active ?? state.chats[0];
  });
}
