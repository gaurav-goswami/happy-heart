import { Heart } from "lucide-react";
import { Button } from "../ui/button";

const HealthTips = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-4 md:max-w-md w-full h-full">
      <h2 className="text-lg font-semibold text-gray-800">
        💡 Daily Health Tip
      </h2>

      <div className="flex flex-col items-start gap-3 bg-blue-50 p-4 rounded-lg">
        <div className="bg-blue-100 p-2 rounded-full">
          <Heart className="w-5 h-5 text-blue-500" />
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          Drinking enough water helps maintain energy levels and improves
          cognitive function.
        </p>
      </div>

      <Button
        variant="link"
        className="text-blue-600 hover:text-blue-800 self-start px-0 text-center mx-auto cursor-pointer"
      >
        Get another tip
      </Button>
    </div>
  );
};

export default HealthTips;
