import { features } from "@/lib/data";
import FeatureCard from "./feature-card";

const Features = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-3 mb-4 px-4">
      <div className="inline-block rounded-md bg-emerald-100 px-4 py-1 text-sm text-emerald-700 mx-auto">
        Features
      </div>
      <h2 className="text-xl md:text-2xl font-bold leading-tight text-gray-900 text-center">
        Everything you need for better health
      </h2>
      <span className="tracking-widest text-gray-600 text-md sm:text-lg md:text-xl text-center">
        Our platform is designed to support your mental and physical wellbeing.
      </span>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8 px-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
