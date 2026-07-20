import { useEffect, useRef, useState } from "react";
import {
  REPLY_ARRIVAL_DELAY_MS,
  REPLY_TYPING_DELAY_MS,
  SCRIPT_START_DELAY_MS,
  TYPING_INDICATOR_DURATION_MS,
} from "@/constants";
import { BOT_FOLLOW_UP_REPLIES } from "@/data/chatScripts";
import { MessageAuthor } from "@/enums";
import { getConversationScript } from "@/helpers/getConversationScript";
import { ChatMessage, Topic } from "@/types";

export function useScriptedChat(topic: Topic) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const nextMessageIdRef = useRef(0);
  const replyIndexRef = useRef(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const schedule = (task: () => void, delayMs: number) => {
    timersRef.current.push(setTimeout(task, delayMs));
  };

  const appendMessage = (author: MessageAuthor, text: string) => {
    nextMessageIdRef.current += 1;
    setMessages((previous) => [
      ...previous,
      { id: nextMessageIdRef.current, author, text },
    ]);
  };

  useEffect(() => {
    let elapsedMs = SCRIPT_START_DELAY_MS;
    for (const step of getConversationScript(topic)) {
      if (step.author === MessageAuthor.Bot) {
        schedule(() => setIsTyping(true), elapsedMs);
        elapsedMs += TYPING_INDICATOR_DURATION_MS;
        schedule(() => {
          setIsTyping(false);
          appendMessage(MessageAuthor.Bot, step.text);
        }, elapsedMs);
      } else {
        schedule(() => appendMessage(MessageAuthor.User, step.text), elapsedMs);
      }
      elapsedMs += step.pauseMs;
    }
    return () => timersRef.current.forEach(clearTimeout);
  }, [topic]);

  const sendMessage = (text: string) => {
    appendMessage(MessageAuthor.User, text);
    schedule(() => setIsTyping(true), REPLY_TYPING_DELAY_MS);
    schedule(() => {
      setIsTyping(false);
      appendMessage(
        MessageAuthor.Bot,
        BOT_FOLLOW_UP_REPLIES[replyIndexRef.current % BOT_FOLLOW_UP_REPLIES.length]
      );
      replyIndexRef.current += 1;
    }, REPLY_ARRIVAL_DELAY_MS);
  };

  return { messages, isTyping, sendMessage };
}
