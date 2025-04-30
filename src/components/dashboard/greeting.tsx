"use client";

import { getGreeting } from "@/lib/methods";
import { useUserStore } from "@/lib/store";

const Greeting = () => {
  const { email } = useUserStore();

  // Test error for ErrorBoundary
  // throw new Error("Test error"); 

  return (
    <span className="text-sm text-gray-600">
      {getGreeting()}, {email}
    </span>
  );
};

export default Greeting;
