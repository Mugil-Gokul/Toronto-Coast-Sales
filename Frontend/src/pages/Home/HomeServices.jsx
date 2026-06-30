import React from "react";
import { Truck, Container, BadgeDollarSign, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section className="bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-red-600/10 px-4 py-2 text-sm font-semibold text-red-500">
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Complete Trucking
            <span className="block text-red-600">Solutions Under One Roof</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:mt-6 sm:text-lg">
            From truck and trailer sales to financing and repairs, Toronto Coast
            provides everything you need to keep your business moving forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500/30 sm:p-8"
              >
                {/* Glow Effect */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-600/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600/10 text-red-500 sm:mb-6 sm:h-16 sm:w-16">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white sm:mb-4 sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-r from-red-600 to-red-700 p-6 text-center sm:mt-16 sm:p-10">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Looking for Your Next Truck?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-red-100 sm:text-base">
            Browse our inventory of trucks and trailers or speak with our team
            to find the right solution for your business.
          </p>

          <Link
            to="/services"
            className="
    mt-8
    inline-flex
    w-full
    items-center
    justify-center
    rounded-full
    bg-white
    px-8
    py-4
    font-semibold
    text-red-600
    transition
    hover:scale-105
    sm:w-auto
  "
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
