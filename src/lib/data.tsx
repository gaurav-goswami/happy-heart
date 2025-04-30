import {
  THealthArticles,
  THealthTip,
  TMoodSelectorOptions,
} from "@/types/type";
import { BookOpen, Frown, Meh, Smile, Star } from "lucide-react";

export const features = [
  {
    title: "Mood Tracking",
    description:
      "Log your daily emotions and track patterns over time to better understand your mental health.",
    icon: (
      <div className="rounded-full bg-emerald-100 p-4">
        <Smile className="h-6 w-6 text-emerald-500" />
      </div>
    ),
  },
  {
    title: "Health Tips",
    description:
      "Receive personalized recommendations based on your mood and health goals.",
    icon: (
      <div className="rounded-full bg-emerald-100 p-4">
        <Star className="h-6 w-6 text-emerald-500" />
      </div>
    ),
  },
  {
    title: "Wellness Articles",
    description:
      "Access a curated library of expert-written content on mental and physical health.",
    icon: (
      <div className="rounded-full bg-emerald-100 p-4">
        <BookOpen className="h-6 w-6 text-emerald-500" />
      </div>
    ),
  },
];

export const testimonials = [
  {
    name: "Sarah",
    duration: "Using HappyHeart for 6 months",
    content:
      "HappyHeart has completely changed how I approach my mental health. The mood tracking feature helped me identify triggers I wasn't even aware of.",
    rating: 5,
  },
  {
    name: "Abhishek",
    duration: "Using HappyHeart for 3 months",
    content:
      "The health tips are so personalized and helpful. I've incorporated many of them into my daily routine and feel more energetic than ever.",
    rating: 4,
  },
];

export const moodSelectorOptions: TMoodSelectorOptions[] = [
  {
    mood: "happy",
    icon: <Smile className="h-6 w-6 text-emerald-500" />,
    moodName: "Happy",
    aboutMood: "Feeling joyful and content.",
  },
  {
    mood: "neutral",
    icon: <Meh className="h-6 w-6 text-gray-500" />,
    moodName: "Neutral",
    aboutMood: "Feeling neither happy nor sad.",
  },
  {
    mood: "sad",
    icon: <Frown className="h-6 w-6 text-red-500" />,
    moodName: "Sad",
    aboutMood: "Feeling down or unhappy.",
  },
];

export const healthArticles: THealthArticles[] = [
  {
    id: 1,
    title: "How Mindfulness Can Improve Your Mental Health",
    description:
      "Discover the benefits of daily mindfulness practice for reducing stress and anxiety.",
    category: "Mental Health",
  },
  {
    id: 2,
    title: "The Science Behind a Good Night's Sleep",
    description:
      "Learn why quality sleep is essential for your physical and mental wellbeing.",
    category: "Sleep",
  },
  {
    id: 3,
    title: "Nutrition Tips for Better Energy Levels",
    description:
      "Simple dietary changes that can help boost your energy throughout the day.",
    category: "Nutrition",
  },
  {
    id: 4,
    title: "How Mindfulness Can Improve Your Mental Health",
    description:
      "Discover the benefits of daily mindfulness practice for reducing stress and anxiety.",
    category: "Mental Health",
  },
];

export const healthTips: THealthTip[] = [
  {
    id: "100",
    tip: "Drinking enough water helps maintain energy levels and improves cognitive function.",
  },
  {
    id: "200",
    tip: "Taking short breaks during work can boost productivity and reduce stress.",
  },
  {
    id: "300",
    tip: "Incorporating fruits and vegetables into your diet can improve overall health.",
  },
  {
    id: "400",
    tip: "Regular physical activity can enhance mood and reduce feelings of anxiety.",
  },
  {
    id: "500",
    tip: "Practicing gratitude can lead to improved mental health and well-being.",
  },
];
