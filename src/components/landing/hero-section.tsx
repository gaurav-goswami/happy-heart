import { Button } from "../ui/button";

const isLoggedIn = true;

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-3xl text-center flex flex-col gap-6">
        <div className="inline-block rounded-md bg-emerald-100 px-4 py-1 text-sm text-emerald-700 mx-auto">
          Your wellness journey starts here
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
          Track your mood,
          <br className="hidden md:block" /> improve your health
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          HappyHeart gives you personalized health tips, keeps you up-to-date
          with the latest wellness content, and helps track your mood with ease.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 text-base font-medium">
            {isLoggedIn ? "Go to Dashboard" : "Login"}
          </Button>
          <Button variant="outline" className="px-6 py-3 text-base font-medium">
            Track Mood
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
