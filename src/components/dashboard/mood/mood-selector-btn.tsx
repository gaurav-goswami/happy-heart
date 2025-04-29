"use client";

import { getMoodSelectorColors } from "@/lib/methods";
import { TMoodSelectorOptions } from "@/types/type";
import clsx from "clsx";
import React from "react";

type MoodSelectorProps = {
  isSelected?: boolean;
  onClick?: () => void;
} & TMoodSelectorOptions;

const MoodSelectorButton = ({
  mood,
  icon,
  moodName,
  aboutMood,
  isSelected = false,
  onClick,
}: MoodSelectorProps) => {
  const {
    bg,
    border,
    icon: iconColor,
  } = getMoodSelectorColors(mood, isSelected);

  return (
    <button
      onClick={onClick}
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
            isSelected ? "text-yellow-500" : "text-gray-400"
          )}
        >
          <div
            className={clsx(
              "w-10 h-10 flex items-center justify-center",
              iconColor
            )}
          >
            {icon}
          </div>
        </div>
        <span className="text-sm font-semibold text-gray-800">{moodName}</span>
        <p className="text-xs text-gray-600">{aboutMood}</p>
      </div>
    </button>
  );
};

export default MoodSelectorButton;
