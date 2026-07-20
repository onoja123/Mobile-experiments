import { HEALTH_CARE_SCRIPT } from "@/data/chatScripts";
import { MessageAuthor, TopicKey } from "@/enums";
import { ConversationStep, Topic } from "@/types";

export function getConversationScript(topic: Topic): ConversationStep[] {
  if (topic.key === TopicKey.HealthCare) return HEALTH_CARE_SCRIPT;
  return [
    {
      author: MessageAuthor.Bot,
      text: `Hi! I'm excited to talk about ${topic.title.toLowerCase()} with you.`,
      pauseMs: 700,
    },
    {
      author: MessageAuthor.Bot,
      text: "What comes to your mind first when you think about it?",
      pauseMs: 1500,
    },
  ];
}
