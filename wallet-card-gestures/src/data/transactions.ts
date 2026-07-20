import { TransactionIconType } from "@/enums";
import type { Transaction } from "@/interfaces";

export const TRANSACTIONS: Transaction[] = [
  {
    id: "amazon",
    name: "Amazon, #2927A4",
    category: "Ecommerce",
    amount: "$8.93",
    date: "10.03.2018",
    icon: {
      type: TransactionIconType.FontAwesome,
      name: "amazon",
      color: "#FFFFFF",
      bg: "#17181C",
    },
  },
  {
    id: "uber",
    name: "UBER, #3923FS",
    category: "Transportation",
    amount: "$12.93",
    date: "10.03.2018",
    icon: {
      type: TransactionIconType.FontAwesome,
      name: "uber",
      color: "#FFFFFF",
      bg: "#000000",
    },
  },
  {
    id: "tinder",
    name: "Tinder",
    category: "Software",
    amount: "$25.99",
    date: "12.03.2018",
    icon: {
      type: TransactionIconType.Ionicon,
      name: "flame",
      color: "#FFFFFF",
      bg: "#FE5B48",
    },
  },
  {
    id: "dribbble",
    name: "Dribbble",
    category: "Pro Account",
    amount: "$11.99",
    date: "15.03.2018",
    icon: {
      type: TransactionIconType.FontAwesome,
      name: "dribbble",
      color: "#FFFFFF",
      bg: "#EA4C89",
    },
  },
  {
    id: "dropbox",
    name: "Dropbox",
    category: "Software",
    amount: "$9.99",
    date: "16.03.2018",
    icon: {
      type: TransactionIconType.FontAwesome,
      name: "dropbox",
      color: "#FFFFFF",
      bg: "#0061FF",
    },
  },
  {
    id: "google-play",
    name: "Google Play",
    category: "Subscription",
    amount: "$5.99",
    date: "18.03.2018",
    icon: {
      type: TransactionIconType.FontAwesome,
      name: "google-play",
      color: "#4285F4",
      bg: "#F1F3F4",
    },
  },
  {
    id: "mcdonalds",
    name: "McDonald's",
    category: "Restaurant",
    amount: "$4.99",
    date: "18.03.2018",
    icon: {
      type: TransactionIconType.Letter,
      letter: "M",
      color: "#FFC72C",
      bg: "#DA291C",
    },
  },
  {
    id: "adobe",
    name: "Adobe",
    category: "Software",
    amount: "$12.02",
    date: "19.03.2018",
    icon: {
      type: TransactionIconType.Letter,
      letter: "A",
      color: "#FFFFFF",
      bg: "#FA0F00",
    },
  },
];
