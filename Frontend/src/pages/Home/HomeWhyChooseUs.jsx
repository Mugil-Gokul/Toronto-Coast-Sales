import React from "react";
import {
  ShieldCheck,
  Wrench,
  BadgeDollarSign,
  Truck,
  RefreshCw,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: Truck,
    title: "Premium Inventory",
    description:
      "Quality semi-trucks, day cabs, sleepers, dry vans, reefers, and flatbeds.",
  },
  {
    icon: BadgeDollarSign,
    title: "Flexible Financing",
    description:
      "Financing solutions available for first-time buyers, owner operators, and fleets.",
  },
  {
    icon: Wrench,
    title: "In-House Repair Shop",
    description:
      "Professional repair and maintenance services to keep your equipment operating efficiently.",
  },
  {
    icon: ShieldCheck,
    title: "Extended Warranty",
    description:
      "Additional protection plans for greater peace of mind after purchase.",
  },
  {
    icon: RefreshCw,
    title: "Daily Inventory Updates",
    description:
      "New trucks and trailers are added regularly, ensuring fresh opportunities.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our team is committed to helping customers find the right solution for their business.",
  },
];

const HomeWhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      {/* Background Accent */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-red-500/5 blur-[100px] sm:h-80 sm:w-80 sm:blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-red-500/5 blur-[100px] sm:h-80 sm:w-80 sm:blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Why Choose Toronto Coast
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            Built On Trust,
            <span className="block text-red-600">
              Driven By Reliability
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            We provide complete trucking solutions with transparent
            service, quality inventory, financing options, and expert
            support every step of the way.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl sm:p-8"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:scale-110 sm:mb-6 sm:h-16 sm:w-16">
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">
                  {reason.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 rounded-3xl bg-slate-950 p-8 sm:mt-20 sm:p-10">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-black text-red-500 sm:text-5xl">
                50+
              </h3>
              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                Available Listings
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-red-500 sm:text-5xl">
                100%
              </h3>
              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                Transparent Deals
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-red-500 sm:text-5xl">
                Daily
              </h3>
              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                Inventory Updates
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-red-500 sm:text-5xl">
                24/7
              </h3>
              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                Customer Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;