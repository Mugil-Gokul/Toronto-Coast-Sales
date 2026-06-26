import React from "react";
import {
  Cpu,
  Zap,
  Fuel,
  Settings,
  Truck,
  CircleDot,
  Weight,
  Palette,
  Ruler,
  ShieldCheck,
} from "lucide-react";

const TruckSpecifications = () => {
  const specifications = [
    {
      icon: Cpu,
      label: "Engine",
      value: "Volvo D13 Turbo Diesel",
    },
    {
      icon: Zap,
      label: "Horsepower",
      value: "455 HP",
    },
    {
      icon: Fuel,
      label: "Fuel Type",
      value: "Diesel",
    },
    {
      icon: Settings,
      label: "Transmission",
      value: "Automatic I-Shift",
    },
    {
      icon: Truck,
      label: "Axle Configuration",
      value: "6x4",
    },
    {
      icon: CircleDot,
      label: "Suspension",
      value: "Air Ride",
    },
    {
      icon: Weight,
      label: "GVWR",
      value: "80,000 lbs",
    },
    {
      icon: Ruler,
      label: "Wheelbase",
      value: "228 in",
    },
    {
      icon: Palette,
      label: "Exterior Color",
      value: "White",
    },
    {
      icon: ShieldCheck,
      label: "Condition",
      value: "Excellent",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Technical Specifications
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Everything You Need
            <span className="block text-red-600">
              To Know
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Complete vehicle specifications to help you make an informed
            purchasing decision.
          </p>
        </div>

        {/* Specification Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <p className="mt-6 text-sm font-medium text-slate-500">
                  {item.label}
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {item.value}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TruckSpecifications;