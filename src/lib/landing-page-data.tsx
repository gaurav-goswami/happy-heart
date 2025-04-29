import { Smile, Star, BookOpen } from "lucide-react";

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
