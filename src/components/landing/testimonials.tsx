import { testimonials } from "@/lib/data";
import TestimonialCard from "./testimonial-card";

const Testimonials = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Hear from our users
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how <span className="font-semibold text-gray-900">HappyHeart</span> has helped people improve their
              wellbeing.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8">
          {testimonials.map((t, idx) => (
            <TestimonialCard
              key={idx}
              name={t.name}
              duration={t.duration}
              content={t.content}
              rating={t.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
