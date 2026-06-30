import React from "react";

const stats = [
  {
    value: "50+",
    title: "Available Trucks",
    description: "A diverse inventory of quality trucks and trailers.",
  },
  {
    value: "100%",
    title: "Transparent Deals",
    description: "Honest pricing and a straightforward buying process.",
  },
  {
    value: "24/7",
    title: "Customer Support",
    description: "Dedicated assistance whenever you need us.",
  },
  {
    value: "4+",
    title: "Core Services",
    description: "Sales, financing, repairs, and extended warranty.",
  },
];

const AboutStats = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-red-500/5 blur-[90px] md:h-80 md:w-80 md:blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-red-500/5 blur-[90px] md:h-80 md:w-80 md:blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Our Numbers
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl">
            Built On Experience.
            <span className="block text-red-600">
              Driven By Trust.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg md:mt-6">
            Every truck we sell and every customer we serve reflects our
            commitment to quality, reliability, and long-term partnerships.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 md:gap-8 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl sm:p-8"
            >
              <h3 className="text-5xl font-black text-red-600 sm:text-6xl">
                {stat.value}
              </h3>

              <h4 className="mt-4 text-xl font-bold text-slate-900 sm:mt-5 sm:text-2xl">
                {stat.title}
              </h4>

              <p className="mt-3 leading-7 text-slate-600 sm:mt-4">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;