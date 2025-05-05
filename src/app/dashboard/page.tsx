import Articles from "@/components/dashboard/articles/articles";
import MoodCard from "@/components/dashboard/mood/mood-card";
import MoodSelector from "@/components/dashboard/mood/mood-selector";
import Wrapper from "@/components/dashboard/wrapper";
import HealthTipsSkeleton from "@/components/skeletons/health-tips-skeleton";
import { Button } from "@/components/ui/button";
import { lazy, Suspense } from "react";
const HealthTips = lazy(() => import("@/components/dashboard/health-tips"));

const Dashboard = async () => {
  
  return (
    <Wrapper>
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <div className="w-full lg:flex-1">
          <MoodSelector />
        </div>
        <div className="w-full lg:max-w-sm">
          <Suspense fallback={<HealthTipsSkeleton />}>
            <HealthTips />
          </Suspense>
        </div>
      </div>

      <div className="p-4 rounded-lg shadow-md flex flex-col gap-2 bg-white">
        <div className="flex justify-between">
          <span className="text-lg font-semibold">Your Past Week</span>
          <Button variant={"link"} className="text-blue-600" disabled>
            View all
          </Button>
        </div>
        <MoodCard />
      </div>
      <Articles />
    </Wrapper>
  );
};

export default Dashboard;
