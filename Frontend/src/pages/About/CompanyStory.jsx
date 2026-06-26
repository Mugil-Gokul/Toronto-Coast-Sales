import React from "react";
import {
  Truck,
  Wrench,
  BadgeDollarSign,
  ShieldCheck,
} from "lucide-react";

// import companyImage from "../assets/about/company-story.jpg";

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
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                // src={companyImage}
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1600&auto=format&fit=crop"
                alt="Toronto Coast Truck Sales"
                className="h-[650px] w-full object-cover"
              />
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-8 -right-6 rounded-3xl bg-red-600 p-8 text-white shadow-2xl">
              <h3 className="text-5xl font-black">50+</h3>
              <p className="mt-2 text-red-100">
                Trucks & Trailers Available
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
              Our Story
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              Helping Businesses
              <span className="block text-red-600">
                Move Forward
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              At Toronto Coast Truck Sales, we are committed to
              providing dependable trucks, trailers, financing
              solutions, and repair services for businesses of every
              size. From first-time buyers to established fleets, we
              strive to make every purchase simple, transparent, and
              reliable.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Beyond selling quality commercial vehicles, we build
              lasting relationships by supporting our customers with
              financing assistance, professional maintenance, and
              extended warranty options that keep their businesses
              moving.
            </p>

            {/* Feature Grid */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
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