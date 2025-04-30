"use client";

import { getMoodSelectorColors } from "@/lib/methods";
import { useMoodStore } from "@/lib/store";
import { TMoodSelectorOptions } from "@/types/type";
import clsx from "clsx";
import React from "react";

type MoodSelectorProps = TMoodSelectorOptions;

const MoodSelectorButton = ({
  mood,
  icon,
  moodName,
  aboutMood,
}: MoodSelectorProps) => {
  const moodToday = useMoodStore((state) => state.mood.moodToday);
  const setMood = useMoodStore((state) => state.setMood);

  const isSelected = moodToday === mood;

  const {
    bg,
    border,
    icon: iconColor,
  } = getMoodSelectorColors(mood, isSelected);

  const handleClick = () => {
    setMood(mood);
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "w-full sm:w-48 h-40 rounded-xl p-4 text-center transition-all border",
        bg,
        border
      )}
    >
      <div className="flex flex-col items-center justify-center h-full gap-2">
        <div
          className={clsx(
            "w-10 h-10 flex items-center justify-center",
            iconColor
          )}
        >
          {icon}
        </div>
        <span className="text-sm font-semibold text-gray-800">{moodName}</span>
        <p className="text-xs text-gray-600">{aboutMood}</p>
      </div>
    </button>
  );
};

export default MoodSelectorButton;
