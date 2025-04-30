import { getMoodEmoji } from "@/lib/methods";
import { TMoodHistory } from "@/types/type";

interface MoodHistoryCardProps {
  day: TMoodHistory;
}

const MoodHistoryCard = ({ day }: MoodHistoryCardProps) => {
  const moodColor =
    day.mood === "happy"
      ? "bg-yellow-100 border-yellow-300"
      : day.mood === "neutral"
      ? "bg-gray-100 border-gray-300"
      : day.mood === "sad"
      ? "bg-blue-100 border-blue-300"
      : "bg-gray-50 border-gray-200";

  return (
    <div className={`flex items-center p-3 rounded-xl ${moodColor} border`}>
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
        {getMoodEmoji(day.mood)}
      </div>
      <div className="ml-4 flex-1">
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-800">
            {new Date(day.date).toLocaleDateString("en-US", {
              weekday: "long",
            })}
          </span>
          <span className="text-xs text-gray-500">
            {new Date(day.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
        <p className="text-sm text-gray-600 capitalize">
          {day.mood === "happy"
            ? "You felt great"
            : day.mood === "neutral"
            ? "You felt okay"
            : day.mood === "sad"
            ? "You felt down"
            : "No mood recorded"}
        </p>
      </div>
    </div>
  );
};

export default MoodHistoryCard;
