import React from "react";
import {
  Truck,
  Wrench,
  ShieldCheck,
  BadgeDollarSign,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Truck & Trailer Sales",
    description:
      "Wide selection of semi-trucks, day cabs, sleepers, dry vans, reefers, and flatbeds.",
  },
  {
    icon: BadgeDollarSign,
    title: "Financing Available",
    description:
      "Flexible financing solutions for first-time buyers, owner operators, and fleets.",
  },
  {
    icon: Wrench,
    title: "In-House Repair Shop",
    description:
      "Professional repair and maintenance services to keep your vehicles road-ready.",
  },
  {
    icon: ShieldCheck,
    title: "Extended Warranty",
    description:
      "Additional protection plans for greater confidence and peace of mind.",
  },
];

const HomeAbout = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
              About Toronto Coast
            </span>

            <h2 className="text-4xl font-black text-slate-900 md:text-5xl">
              Your Trusted Partner For
              <span className="block text-red-600">
                Trucks & Trailers
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Toronto Coast specializes in buying and selling quality
              semi-trucks and trailers. Whether you're a first-time
              buyer, owner operator, or managing a growing fleet,
              we provide reliable inventory, financing solutions,
              repair services, and warranty options under one roof.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Our goal is to make every deal transparent,
              straightforward, and tailored to your business needs.
            </p>
          </div>

          {/* Right Features */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-red-200 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;