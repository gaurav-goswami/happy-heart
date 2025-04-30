"use client";

import { getGreeting } from "@/lib/methods";
import { useUserStore } from "@/lib/store";

const Greeting = () => {
  const { email } = useUserStore();

  return (
    <span className="text-sm text-gray-600">
      {getGreeting()}, {email}
    </span>
  );
};

export default Greeting;
