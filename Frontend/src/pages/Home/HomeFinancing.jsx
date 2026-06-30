import React from "react";
import {
  BadgeDollarSign,
  FileCheck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const financingSteps = [
  {
    icon: FileCheck,
    title: "Apply Online",
    description:
      "Submit your financing request with a few simple details.",
  },
  {
    icon: BadgeDollarSign,
    title: "Get Approved",
    description:
      "Flexible options available for owner operators and fleets.",
  },
  {
    icon: ShieldCheck,
    title: "Drive Away",
    description:
      "Complete your purchase and get back on the road quickly.",
  },
];

const HomeFinancing = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-red-500/10 blur-[100px] sm:h-72 sm:w-72 sm:blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-red-500/10 blur-[100px] sm:h-72 sm:w-72 sm:blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left Side */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
              Financing Solutions
            </span>

            <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Get The Truck You Need
              <span className="block text-red-600">
                Without The Wait
              </span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
              Whether you're purchasing your first truck or expanding
              your fleet, Toronto Coast offers financing options
              designed to help you move forward with confidence.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Fast approvals, competitive terms, and solutions for
              owner operators, small businesses, and growing fleets.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid gap-5 sm:gap-6">
            {financingSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="group flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:gap-5 sm:p-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 sm:h-16 sm:w-16">
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-bold text-slate-900 sm:text-xl">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Highlight Card */}
            <div className="mt-2 rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
              <h3 className="text-xl font-bold sm:text-2xl">
                Financing Available For
              </h3>

              <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
                {[
                  "First-Time Buyers",
                  "Owner Operators",
                  "Small Fleets",
                  "Large Fleets",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFinancing;