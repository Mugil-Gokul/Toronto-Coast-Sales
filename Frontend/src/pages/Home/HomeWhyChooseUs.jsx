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
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Accent */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-red-500/5 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-red-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Why Choose Toronto Coast
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Built On Trust,
            <span className="block text-red-600">
              Driven By Reliability
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We provide complete trucking solutions with transparent
            service, quality inventory, financing options, and expert
            support every step of the way.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {reason.title}
                </h3>

                <p className="text-slate-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Stats */}
        <div className="mt-20 rounded-3xl bg-slate-950 p-10">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <h3 className="text-5xl font-black text-red-500">
                50+
              </h3>
              <p className="mt-2 text-slate-400">
                Available Listings
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-red-500">
                100%
              </h3>
              <p className="mt-2 text-slate-400">
                Transparent Deals
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-red-500">
                Daily
              </h3>
              <p className="mt-2 text-slate-400">
                Inventory Updates
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-red-500">
                24/7
              </h3>
              <p className="mt-2 text-slate-400">
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