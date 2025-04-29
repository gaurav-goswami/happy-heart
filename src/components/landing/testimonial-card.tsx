import { Star } from "lucide-react";

type Props = {
  name: string;
  duration: string;
  content: string;
  rating: number;
};

const TestimonialCard = ({ name, duration, content, rating }: Props) => {
  return (
    <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="space-y-2">
        <div className="flex space-x-1">
            {/* rating number (undefined!!) of elements will be stored inside array. */}
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-500">&quot;{content}&quot;</p>
      </div>
      <div className="flex items-center space-x-4">
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-sm text-gray-500">{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
