import Link from "next/link";
import { Facebook, Twitter, Instagram, Heart } from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3 items-start">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-emerald-500" />
              <span className="text-xl font-bold">HappyHeart</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering your mind and body, every day.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-emerald-500" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-emerald-500" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-emerald-500" />
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Quick Links</h3>
            <nav className="flex flex-col space-y-1">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-emerald-500"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-emerald-500"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-emerald-500"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Get wellness tips in your inbox.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              />
              <Button className="h-10 bg-emerald-500 hover:bg-emerald-600 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} HappyHeart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
