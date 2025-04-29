import { ReactNode } from "react";

export type TMood = "happy" | "neutral" | "sad";
export type TMoodHistory = { date: string; mood: TMood };

type TArticleCategory = "Mental Health" | "Physical Health" | "Nutrition" | "Exercise" | "Sleep";

export type TMoodSelectorOptions = {
    mood: TMood;
    icon: ReactNode;
    moodName: string;
    aboutMood: string;
};

export type THealthArticles = {
    id: number;
    title: string;
    description: string;
    category: TArticleCategory,
}