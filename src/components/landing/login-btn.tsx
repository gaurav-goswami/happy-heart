"use client";

import { useUserStore } from "@/lib/store";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const LoginBtn = ({ text }: { text?: string }) => {
  const { email } = useUserStore();
  const router = useRouter();

  const label = text || (email ? "Dashboard" : "Login");
  const destination = email ? "/dashboard" : "/login";

  return (
    <Button
      className="bg-emerald-500 hover:bg-emerald-600 cursor-pointer"
      onClick={() => router.push(destination)}
    >
      {label}
    </Button>
  );
};

export default LoginBtn;
