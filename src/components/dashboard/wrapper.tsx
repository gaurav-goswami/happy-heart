import { ReactNode } from "react";
import DashboardErrorBoundaryFallback from "../error/dashboard-error-fallback";
import { ErrorBoundary } from "../ui/error-boundary";
import Greeting from "./greeting";
import LogoutBtn from "./logout-btn";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary fallback={<DashboardErrorBoundaryFallback />}>
      <div className="bg-[#eff8ff] min-h-screen py-3">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-800">
                Healthy Dashboard
              </span>
              <Greeting />
            </div>
            <LogoutBtn />
          </div>
          {children}
        </div>
      </div>
    </ErrorBoundary>
  );
};



export default Wrapper;
