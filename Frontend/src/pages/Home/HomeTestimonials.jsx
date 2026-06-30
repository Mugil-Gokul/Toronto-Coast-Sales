import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Thompson",
    company: "Thompson Logistics",
    review:
      "Toronto Coast made the entire truck buying process simple and transparent. The financing options helped us expand our fleet much faster than expected.",
  },
  {
    name: "David Wilson",
    company: "Wilson Freight",
    review:
      "Great inventory, knowledgeable staff, and excellent customer service. We found exactly what we needed for our growing business.",
  },
  {
    name: "James Carter",
    company: "Carter Transport",
    review:
      "Their repair shop and warranty options gave us confidence in our purchase. Highly recommended for anyone looking for quality trucks.",
  },
];

const HomeTestimonials = () => {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-red-600/10 px-4 py-2 text-sm font-semibold text-red-500">
            Customer Testimonials
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Trusted By Truck Owners
            <span className="block text-red-600">
              Across The Industry
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:mt-6 sm:text-lg">
            We take pride in helping owner operators, small businesses,
            and fleets find reliable trucks and trailers with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 sm:p-8"
            >
              <Quote
                className="absolute right-5 top-5 text-red-600/20 sm:right-6 sm:top-6"
                size={48}
              />

              {/* Stars */}
              <div className="mb-5 flex gap-1 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-red-500 text-red-500 sm:h-[18px] sm:w-[18px]"
                  />
                ))}
              </div>

              <p className="relative z-10 text-sm leading-relaxed text-slate-300 sm:text-base">
                "{item.review}"
              </p>

              <div className="mt-6 border-t border-white/10 pt-5 sm:mt-8 sm:pt-6">
                <h4 className="text-lg font-bold text-white">
                  {item.name}
                </h4>

                <p className="text-sm text-slate-400">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;