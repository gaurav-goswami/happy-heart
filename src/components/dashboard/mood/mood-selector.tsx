"use client";

import { moodSelectorOptions } from "@/lib/data";
import { CalendarHeart } from "lucide-react";
import MoodSelectorButton from "./mood-selector-btn";
import { useState } from "react";

const MoodSelector = () => {
  const [currentMood, setCurrentMood] = useState("");

  return (
    <div className="p-4 py-8 rounded-lg shadow-md flex flex-col gap-4 bg-white h-max w-full">
      <div className="flex justify-between items-center">
        <span className="text-base sm:text-lg font-semibold">
          How are you feeling today?
        </span>
        <CalendarHeart className="size-5 sm:size-6 text-emerald-500" />
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {moodSelectorOptions.map((option, index) => (
          <MoodSelectorButton
            key={index}
            {...option}
            isSelected={currentMood === option.mood}
            onClick={() => setCurrentMood(option.mood)}
          />
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
