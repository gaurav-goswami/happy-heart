"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { getHealthTip } from "@/lib/api-caller";
import { THealthTip } from "@/types/type";

interface HealthTipsClientProps {
  initialTip: THealthTip;
}

const HealthTipsClient = ({ initialTip }: HealthTipsClientProps) => {
  const [tip, setTip] = useState<THealthTip>(
    initialTip ?? { id: "0", tip: "" }
  );
  const [loading, setLoading] = useState(false);

  const handleGetAnotherTip = async () => {
    if (!tip?.id) return;
    try {
      setLoading(true);
      const newTip = await getHealthTip(tip.id);
      if (newTip && newTip.id) {
        setTip(newTip);
      }
    } catch (err) {
      console.error("Error fetching new tip", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-4 md:max-w-md w-full h-full">
      <h2 className="text-lg font-semibold text-gray-800">
        💡 Daily Health Tip
      </h2>

      <div className="flex flex-col items-start gap-3 bg-blue-50 p-4 rounded-lg">
        <div className="bg-blue-100 p-2 rounded-full">
          <Heart className="w-5 h-5 text-blue-500" />
        </div>
        {tip ? (
          <p className="text-gray-700 text-sm leading-relaxed">{tip.tip}</p>
        ) : (
          <p className="text-gray-400 text-sm italic">Loading tip...</p>
        )}
      </div>

      <Button
        variant="link"
        className="text-blue-600 hover:text-blue-800 self-start px-0 text-center mx-auto cursor-pointer"
        onClick={handleGetAnotherTip}
        disabled={loading}
      >
        {loading ? "Loading..." : "Get another tip"}
      </Button>
    </div>
  );
};

export default HealthTipsClient;
