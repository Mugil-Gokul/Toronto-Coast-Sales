import React from "react";
import { Target, Eye, ArrowRight } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 md:py-20 lg:py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-600/10 blur-[120px] md:h-96 md:w-96 md:blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-600/10 blur-[120px] md:h-96 md:w-96 md:blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="inline-block rounded-full bg-red-600/10 px-4 py-2 text-sm font-semibold text-red-500">
            Our Purpose
          </span>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Driven By Excellence,
            <span className="block text-red-600">
              Focused On Your Success
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg md:mt-6">
            Everything we do is centered around providing dependable
            trucks, transparent service, and long-term support for
            businesses across Canada.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Mission */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-red-500/30 sm:p-8 lg:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600/10 text-red-500 sm:mb-8 sm:h-16 sm:w-16">
              <Target size={30} />
            </div>

            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Our Mission
            </h3>

            <p className="mt-5 leading-7 text-slate-400 sm:mt-6 sm:leading-8">
              To provide high-quality trucks, trailers, financing
              solutions, and professional repair services while
              building lasting relationships through honesty,
              transparency, and exceptional customer care.
            </p>

            <div className="mt-6 flex items-center gap-2 font-semibold text-red-500 sm:mt-8">
              Customer First
              <ArrowRight size={18} />
            </div>
          </div>

          {/* Vision */}
          <div className="group rounded-3xl bg-gradient-to-br from-red-600 to-red-700 p-6 transition-all duration-300 hover:-translate-y-2 sm:p-8 lg:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white sm:mb-8 sm:h-16 sm:w-16">
              <Eye size={30} />
            </div>

            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Our Vision
            </h3>

            <p className="mt-5 leading-7 text-red-100 sm:mt-6 sm:leading-8">
              To become one of Canada's most trusted commercial truck
              dealerships by delivering quality inventory, dependable
              financing, expert service, and long-term value for every
              customer we serve.
            </p>

            <div className="mt-6 flex items-center gap-2 font-semibold text-white sm:mt-8">
              Growing Together
              <ArrowRight size={18} />
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-xl sm:mt-16 sm:px-10">
          <h3 className="text-xl font-bold leading-relaxed text-white sm:text-2xl">
            "Our success is measured by the success of every customer
            who drives away with confidence."
          </h3>

          <p className="mt-4 text-sm text-slate-400 sm:text-base">
            — Toronto Coast Truck Sales
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;