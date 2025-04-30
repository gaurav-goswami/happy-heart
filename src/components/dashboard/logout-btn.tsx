"use client";

import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { logoutUser } from "@/lib/api-caller";
import { useRouter } from "next/navigation";

const LogoutBtn = () => {
  const router = useRouter();

  return (
    <Button
      variant={"outline"}
      className="cursor-pointer"
      onClick={async () => {
        const response = await logoutUser();
        if (response) {
          router.push("/login");
        }
      }}
    >
      <LogOut className="size-4" />
      Logout
    </Button>
  );
};

export default LogoutBtn;
