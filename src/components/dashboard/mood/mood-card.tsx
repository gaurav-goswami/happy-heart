"use client";

import { getMoodHistory } from "@/lib/methods";
import { useMoodStore } from "@/lib/store";
import { useEffect } from "react";
import MoodHistoryCard from "./mood-history-card";
import { TMood } from "@/types/type";
import MoodOptionsSkeleton from "@/components/skeletons/mood-options-sekeleton";

const MoodCard = () => {
  const { setMoodHistory, mood, _hasHydrated } = useMoodStore();

  useEffect(() => {
    if (!_hasHydrated) return;
    if (!mood?.moodHistory?.length) {
      const history = getMoodHistory();
      setMoodHistory(history);
    }
  }, [_hasHydrated]);

  if (!_hasHydrated) {
    return <MoodOptionsSkeleton />;
  }

  return (
    <div className="flex flex-col space-y-3">
      {mood.moodHistory.map((day, index) => (
        <MoodHistoryCard
          key={index}
          day={{ ...day, mood: day.mood as TMood }}
        />
      ))}
    </div>
  );
};

export default MoodCard;
