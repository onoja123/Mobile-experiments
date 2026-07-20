import { MessageAuthor } from "@/enums";
import { ConversationStep } from "@/types";

export const HEALTH_CARE_SCRIPT: ConversationStep[] = [
  {
    author: MessageAuthor.Bot,
    text: "Hi! I'm glad you care about your health.",
    pauseMs: 700,
  },
  {
    author: MessageAuthor.Bot,
    text: "What do you think is important for staying healthy?",
    pauseMs: 1400,
  },
  {
    author: MessageAuthor.User,
    text: "Hi! I think exercising, eating right, and going to the doctor regularly",
    pauseMs: 1600,
  },
  {
    author: MessageAuthor.Bot,
    text: "By the way, do you vaccinate?",
    pauseMs: 1500,
  },
  {
    author: MessageAuthor.User,
    text: "Of course! Vaccines stop diseases from spreading and keep people healthy",
    pauseMs: 1700,
  },
  {
    author: MessageAuthor.Bot,
    text: "That's great! Regular checkups and vaccines really do keep us all safer 💪",
    pauseMs: 2600,
  },
];

export const BOT_FOLLOW_UP_REPLIES = [
  "That's a great point! Can you tell me more about it?",
  "Interesting! And why do you think that is?",
  "Nice answer! Your English is getting better every day 🌟",
];
