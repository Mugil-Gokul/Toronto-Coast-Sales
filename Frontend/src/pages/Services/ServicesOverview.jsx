import React from "react";
import {
  Truck,
  // Trailer,
  BadgeDollarSign,
  Wrench,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Truck Sales",
    description:
      "Browse our premium inventory of reliable commercial trucks for every business need.",
  },
  {
    icon: Truck,
    title: "Trailer Sales",
    description:
      "Choose from dry vans, reefers, flatbeds, and specialty trailers at competitive prices.",
  },
  {
    icon: BadgeDollarSign,
    title: "Financing",
    description:
      "Flexible financing solutions with fast approvals for businesses and owner-operators.",
  },
  {
    icon: Wrench,
    title: "Repair Shop",
    description:
      "Professional maintenance and repair services performed by experienced technicians.",
  },
  {
    icon: ShieldCheck,
    title: "Extended Warranty",
    description:
      "Protect your investment with comprehensive warranty plans and roadside assistance.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Our Services
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Everything You Need
            <span className="block text-red-600">
              In One Place
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We provide complete commercial truck solutions—from purchasing
            and financing to repairs and long-term protection.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <button className="group mt-8 inline-flex items-center gap-2 font-semibold text-red-600 transition hover:gap-3">
                  Learn More

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;