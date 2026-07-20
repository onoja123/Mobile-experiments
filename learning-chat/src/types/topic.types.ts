import { TopicKey } from "@/enums";

export type Topic = {
  key: TopicKey;
  title: string;
  description: string;
  emoji: string;
  color: string;
  textColor: string;
  starColor: string;
  starEmptyColor: string;
  stars: number;
};
