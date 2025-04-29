import { TMood, TMoodHistory } from "@/types/type";
import { Frown, Meh, Smile } from "lucide-react";

export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

export const getMoodEmoji = (mood: string) => {
  switch (mood) {
    case "happy":
      return <Smile className="w-full h-full text-yellow-400" />;
    case "neutral":
      return <Meh className="w-full h-full text-gray-400" />;
    case "sad":
      return <Frown className="w-full h-full text-blue-400" />;
    default:
      return null;
  }
};

const moods = ["happy", "neutral", "sad"];

const getRandomMood = () => {
  const randomIndex = Math.floor(Math.random() * moods.length);
  return moods[randomIndex];
};

export const getMoodHistory = () => {
  const history: TMoodHistory[] = [];

  //   previous 6 days random mood
  for (let i = 0; i < 6; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const formattedDate = date.toISOString().split("T")[0];
    const mood = getRandomMood();

    history.push({ date: formattedDate, mood: mood as TMood });
  }
  return history.reverse();
};

export const getMoodSelectorColors = (
  mood: TMood,
  isSelected: boolean
): {
  bg: string;
  border: string;
  icon: string;
} => {
  if (!isSelected) {
    return {
      bg: "bg-white",
      border: "border-gray-200 hover:border-yellow-300 hover:shadow-md",
      icon: "text-gray-400",
    };
  }

  switch (mood) {
    case "happy":
      return {
        bg: "bg-green-50",
        border: "border-green-300",
        icon: "text-green-500",
      };
    case "sad":
      return {
        bg: "bg-red-50",
        border: "border-red-300",
        icon: "text-red-500",
      };
    case "neutral":
      return {
        bg: "bg-blue-50",
        border: "border-blue-300",
        icon: "text-blue-500",
      };
    default:
      return {
        bg: "bg-white",
        border: "border-gray-200",
        icon: "text-gray-400",
      };
  }
};
