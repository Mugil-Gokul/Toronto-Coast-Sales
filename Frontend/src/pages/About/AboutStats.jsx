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
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-red-500/5 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-red-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Our Numbers
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Built On Experience.
            <span className="block text-red-600">
              Driven By Trust.
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Every truck we sell and every customer we serve reflects our
            commitment to quality, reliability, and long-term partnerships.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl"
            >
              <h3 className="text-6xl font-black text-red-600">
                {stat.value}
              </h3>

              <h4 className="mt-5 text-2xl font-bold text-slate-900">
                {stat.title}
              </h4>

              <p className="mt-4 leading-relaxed text-slate-600">
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