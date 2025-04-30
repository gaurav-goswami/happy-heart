import { ReactNode } from "react";
import Greeting from "./greeting";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#eff8ff] min-h-screen py-3">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-800">
            Healthy Dashboard
          </span>
          <Greeting />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
