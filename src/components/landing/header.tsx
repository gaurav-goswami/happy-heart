import { Heart } from "lucide-react";
import LoginBtn from "./login-btn";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-2">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-emerald-500" />
          <span className="text-xl font-bold">HappyHeart</span>
        </div>
        <div className="flex items-center gap-4">
          <LoginBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
