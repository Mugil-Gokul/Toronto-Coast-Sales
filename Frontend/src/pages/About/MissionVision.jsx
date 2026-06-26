import React from "react";
import { Target, Eye, ArrowRight } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-red-600/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-red-600/10 px-4 py-2 text-sm font-semibold text-red-500">
            Our Purpose
          </span>

          <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
            Driven By Excellence,
            <span className="block text-red-600">
              Focused On Your Success
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Everything we do is centered around providing dependable
            trucks, transparent service, and long-term support for
            businesses across Canada.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Mission */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-red-500/30">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600/10 text-red-500">
              <Target size={32} />
            </div>

            <h3 className="text-3xl font-bold text-white">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              To provide high-quality trucks, trailers, financing
              solutions, and professional repair services while
              building lasting relationships through honesty,
              transparency, and exceptional customer care.
            </p>

            <div className="mt-8 flex items-center gap-2 text-red-500 font-semibold">
              Customer First
              <ArrowRight size={18} />
            </div>
          </div>

          {/* Vision */}
          <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-red-600 to-red-700 p-10 transition-all duration-300 hover:-translate-y-2">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white">
              <Eye size={32} />
            </div>

            <h3 className="text-3xl font-bold text-white">
              Our Vision
            </h3>

            <p className="mt-6 leading-8 text-red-100">
              To become one of Canada's most trusted commercial truck
              dealerships by delivering quality inventory, dependable
              financing, expert service, and long-term value for every
              customer we serve.
            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-white">
              Growing Together
              <ArrowRight size={18} />
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 px-10 py-8 text-center backdrop-blur-xl">
          <h3 className="text-2xl font-bold text-white">
            "Our success is measured by the success of every customer
            who drives away with confidence."
          </h3>

          <p className="mt-4 text-slate-400">
            — Toronto Coast Truck Sales
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;