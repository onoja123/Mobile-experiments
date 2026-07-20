import { TopicKey } from "@/enums";
import { Topic } from "@/types";

export const TOPICS: Topic[] = [
  {
    key: TopicKey.FuturePlans,
    title: "Future Plans",
    description:
      "Discuss your dreams, goals, and plans for the near and distant future",
    emoji: "🔮",
    color: "#FFE3B8",
    textColor: "#3B372C",
    starColor: "#C9913F",
    starEmptyColor: "#E8CFA4",
    stars: 4,
  },
  {
    key: TopicKey.Hobbies,
    title: "Your Hobbies",
    description:
      "Talk about the activities you love doing and compare your hobbies",
    emoji: "🎨",
    color: "#C9EDF8",
    textColor: "#2E3F45",
    starColor: "#4796B5",
    starEmptyColor: "#A9D6E5",
    stars: 4,
  },
  {
    key: TopicKey.PlacesToVisit,
    title: "Places to Visit",
    description:
      "Describe the cities and countries you would love to explore and why",
    emoji: "🧭",
    color: "#37835B",
    textColor: "#FFFFFF",
    starColor: "#D6EEE1",
    starEmptyColor: "#6BA688",
    stars: 4,
  },
  {
    key: TopicKey.PersonalInformation,
    title: "Personal Information",
    description:
      "Introducing yourself and sharing basic personal details such as name, age",
    emoji: "🔐",
    color: "#EBD9F7",
    textColor: "#3B3341",
    starColor: "#9A6BC2",
    starEmptyColor: "#CDB4E3",
    stars: 3,
  },
  {
    key: TopicKey.FoodAndCooking,
    title: "Food & Cooking",
    description:
      "Share your favorite dishes, recipes, and discuss cuisines of the world and swap your experiences",
    emoji: "🌭",
    color: "#F8EF66",
    textColor: "#3D3A22",
    starColor: "#A99C2B",
    starEmptyColor: "#DAD08A",
    stars: 3,
  },
  {
    key: TopicKey.HealthCare,
    title: "Health Care",
    description:
      "Talk about personal health, fitness and healthy lifestyle choices, and nutritional diet menus",
    emoji: "🥦",
    color: "#BCC4FF",
    textColor: "#33334B",
    starColor: "#5D68C3",
    starEmptyColor: "#9BA3E3",
    stars: 3,
  },
  {
    key: TopicKey.WorkAndCareer,
    title: "Work & Career",
    description:
      "Share your professional background, talk about job roles, and discuss career aspirations",
    emoji: "💼",
    color: "#FFBBF4",
    textColor: "#42303C",
    starColor: "#C2519F",
    starEmptyColor: "#E39BCF",
    stars: 5,
  },
  {
    key: TopicKey.FavoriteTvSeries,
    title: "Favorite TV Series",
    description:
      "You can discuss your favorite shows, their genres and actors. Talk about what scenes are most memorable and why",
    emoji: "📚",
    color: "#CFF2E9",
    textColor: "#2F3A36",
    starColor: "#3E8E6E",
    starEmptyColor: "#9CCDBC",
    stars: 3,
  },
];
