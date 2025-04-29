import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

// temporary logged in state for button toggle
const isLoggedIn = false;
const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-2">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-emerald-500" />
          <span className="text-xl font-bold">HappyHeart</span>
        </div>
        <div className="flex items-center gap-4">
          <Button className="bg-emerald-500 hover:bg-emerald-600 cursor-pointer">
            {isLoggedIn ? "Dashboard" : "Login"}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
