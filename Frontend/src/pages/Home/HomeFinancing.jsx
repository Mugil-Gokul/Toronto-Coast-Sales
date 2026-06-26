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
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Side */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
              Financing Solutions
            </span>

            <h2 className="text-4xl font-black text-slate-900 md:text-5xl">
              Get The Truck You Need
              <span className="block text-red-600">
                Without The Wait
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Whether you're purchasing your first truck or expanding
              your fleet, Toronto Coast offers financing options
              designed to help you move forward with confidence.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Fast approvals, competitive terms, and solutions for
              owner operators, small businesses, and growing fleets.
            </p>

            <button className="mt-8 flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700">
              Apply For Financing
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Side */}
          <div className="grid gap-6">
            {financingSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="group flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Icon size={30} />
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Highlight Card */}
            <div className="mt-2 rounded-3xl bg-slate-950 p-8 text-white">
              <h3 className="text-2xl font-bold">
                Financing Available For
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "First-Time Buyers",
                  "Owner Operators",
                  "Small Fleets",
                  "Large Fleets",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
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