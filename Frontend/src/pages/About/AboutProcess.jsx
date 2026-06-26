import React from "react";
import {
  Search,
  BadgeDollarSign,
  ClipboardCheck,
  Truck,
} from "lucide-react";

const process = [
  {
    icon: Search,
    step: "01",
    title: "Browse Inventory",
    description:
      "Explore our selection of quality trucks and trailers to find the right fit for your business.",
  },
  {
    icon: BadgeDollarSign,
    step: "02",
    title: "Choose Financing",
    description:
      "Our team helps you find flexible financing options that match your budget and goals.",
  },
  {
    icon: ClipboardCheck,
    step: "03",
    title: "Inspection & Approval",
    description:
      "Every vehicle is carefully inspected so you can purchase with confidence and peace of mind.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Drive Away",
    description:
      "Complete the paperwork and get your truck or trailer ready to hit the road.",
  },
];

const AboutProcess = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-red-600/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-red-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-red-600/10 px-4 py-2 text-sm font-semibold text-red-500">
            How It Works
          </span>

          <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
            Buying Your Next Truck
            <span className="block text-red-600">
              Is Simple & Transparent
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            We've streamlined the purchasing process to make finding,
            financing, and owning your next truck as smooth as possible.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mt-20">
          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-14 hidden h-0.5 bg-gradient-to-r from-red-600/20 via-red-600 to-red-600/20 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="relative text-center">
                  {/* Icon */}
                  <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-red-500/20 bg-slate-900 shadow-lg">
                    <Icon size={36} className="text-red-500" />
                  </div>

                  {/* Step */}
                  <span className="mt-6 inline-block text-sm font-bold tracking-[0.3em] text-red-500">
                    STEP {item.step}
                  </span>

                  {/* Title */}
                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
          <h3 className="text-3xl font-black text-white">
            Ready to Start Your Journey?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Whether you're purchasing your first truck or expanding your
            fleet, our team is here to guide you every step of the way.
          </p>

          <button className="mt-8 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:scale-105">
            Browse Inventory
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;