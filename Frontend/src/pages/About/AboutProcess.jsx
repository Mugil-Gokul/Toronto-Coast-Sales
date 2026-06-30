import React from "react";
import { Search, BadgeDollarSign, ClipboardCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section className="relative overflow-hidden bg-slate-950 py-14 md:py-14 lg:py-20">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-red-600/10 blur-[90px] md:h-80 md:w-80 md:blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-red-600/10 blur-[90px] md:h-80 md:w-80 md:blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-red-600/10 px-4 py-2 text-sm font-semibold text-red-500">
            How It Works
          </span>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Buying Your Next Truck
            <span className="block text-red-600">Is Simple & Transparent</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg md:mt-6">
            We've streamlined the purchasing process to make finding, financing,
            and owning your next truck as smooth as possible.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mt-14 md:mt-20">
          {/* Desktop Connecting Line */}
          <div className="absolute left-0 right-0 top-14 hidden h-0.5 bg-gradient-to-r from-red-600/20 via-red-600 to-red-600/20 lg:block" />

          <div className="grid gap-10 md:gap-12 lg:grid-cols-4">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="relative text-center">
                  {/* Icon */}
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-red-500/20 bg-slate-900 shadow-lg sm:h-24 sm:w-24 lg:h-28 lg:w-28">
                    <Icon size={30} className="text-red-500 lg:h-9 lg:w-9" />
                  </div>

                  {/* Step */}
                  <span className="mt-5 inline-block text-xs font-bold tracking-[0.25em] text-red-500 sm:text-sm sm:tracking-[0.3em]">
                    STEP {item.step}
                  </span>

                  {/* Title */}
                  <h3 className="mt-3 text-xl font-bold text-white sm:mt-4 sm:text-2xl">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 leading-7 text-slate-400 sm:mt-4">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-xl sm:px-8 sm:py-10 md:mt-20">
          <h3 className="text-2xl font-black text-white sm:text-3xl">
            Ready to Start Your Journey?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Whether you're purchasing your first truck or expanding your fleet,
            our team is here to guide you every step of the way.
          </p>

          <Link
            to="/inventory"
            className="
    mt-8
    inline-flex
    items-center
    justify-center
    rounded-full
    bg-red-600
    px-7
    py-3.5
    font-semibold
    text-white
    transition-all
    duration-300
    hover:scale-105
    hover:bg-red-700
    sm:px-8
    sm:py-4
  "
          >
            Browse Inventory
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
