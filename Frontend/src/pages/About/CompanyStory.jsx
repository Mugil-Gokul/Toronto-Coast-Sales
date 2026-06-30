import React from "react";
import {
  Truck,
  Wrench,
  BadgeDollarSign,
  ShieldCheck,
} from "lucide-react";

import companyImage from "../../assets/TU506-14-1024x683.jpg";

const features = [
  {
    icon: Truck,
    title: "Quality Inventory",
    description:
      "Semi-trucks and trailers carefully selected to meet commercial transportation needs.",
  },
  {
    icon: BadgeDollarSign,
    title: "Flexible Financing",
    description:
      "Helping owner operators and fleets secure financing with confidence.",
  },
  {
    icon: Wrench,
    title: "Repair Services",
    description:
      "Professional in-house maintenance and repair to keep you on the road.",
  },
  {
    icon: ShieldCheck,
    title: "Extended Warranty",
    description:
      "Additional protection options for greater peace of mind after purchase.",
  },
];

const CompanyStory = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={companyImage}
                alt="Toronto Coast Truck Sales"
                className="h-[320px] w-full object-cover sm:h-[450px] lg:h-[650px]"
              />
            </div>

            {/* Experience Card */}
            <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-red-600 p-5 text-white shadow-2xl sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs sm:p-6 lg:-bottom-8 lg:-right-6 lg:left-auto lg:p-8">
              <h3 className="text-3xl font-black sm:text-4xl lg:text-5xl">
                50+
              </h3>

              <p className="mt-2 text-sm text-red-100 sm:text-base">
                Trucks & Trailers Available
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
              Our Story
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Helping Businesses
              <span className="block text-red-600">
                Move Forward
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-relaxed">
              At Toronto Coast Truck Sales, we are committed to
              providing dependable trucks, trailers, financing
              solutions, and repair services for businesses of every
              size. From first-time buyers to established fleets, we
              strive to make every purchase simple, transparent, and
              reliable.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-relaxed">
              Beyond selling quality commercial vehicles, we build
              lasting relationships by supporting our customers with
              financing assistance, professional maintenance, and
              extended warranty options that keep their businesses
              moving.
            </p>

            {/* Feature Grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:border-red-200 hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                      <Icon size={24} />
                    </div>

                    <h3 className="font-bold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;