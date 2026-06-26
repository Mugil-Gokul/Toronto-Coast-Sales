import React from "react";
import {
  Truck,
  Container,
  BadgeDollarSign,
  Wrench,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Truck Sales",
    description:
      "Browse quality semi-trucks, day cabs, and sleeper trucks from leading manufacturers.",
  },
  {
    icon: Container,
    title: "Trailer Sales",
    description:
      "Explore dry vans, reefers, flatbeds, and other trailer solutions for every hauling need.",
  },
  {
    icon: BadgeDollarSign,
    title: "Financing Solutions",
    description:
      "Flexible financing options designed for first-time buyers, owner operators, and fleets.",
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    description:
      "Professional in-house repair services to keep your trucks and trailers operating efficiently.",
  },
];

const HomeServices = () => {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-red-600/10 px-4 py-2 text-sm font-semibold text-red-500">
            Our Services
          </span>

          <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
            Complete Trucking
            <span className="block text-red-600">
              Solutions Under One Roof
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            From truck and trailer sales to financing and repairs,
            Toronto Coast provides everything you need to keep your
            business moving forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500/30"
              >
                {/* Glow Effect */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-600/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600/10 text-red-500">
                    <Icon size={32} />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mb-6 text-slate-400">
                    {service.description}
                  </p>

                  <button className="flex items-center gap-2 text-red-500 transition group-hover:gap-3">
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-red-600 to-red-700 p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Looking for Your Next Truck?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-red-100">
            Browse our inventory of trucks and trailers or speak with
            our team to find the right solution for your business.
          </p>

          <button className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-red-600 transition hover:scale-105">
            View Inventory
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;