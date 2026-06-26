import React from "react";
import {
  Calendar,
  Gauge,
  Settings,
  Fuel,
  BadgeCheck,
  Hash,
  Phone,
  Mail,
  DollarSign,
} from "lucide-react";

const TruckOverview = () => {
  const truck = {
    title: "2023 Volvo VNL 760",
    price: "$129,900",
    stock: "TCS-2023-041",
    vin: "1XPWD40X1ED215874",
    year: "2023",
    mileage: "145,000 km",
    transmission: "Automatic",
    fuel: "Diesel",
    condition: "Used - Excellent",
    description:
      "This 2023 Volvo VNL 760 has been professionally maintained and thoroughly inspected to ensure dependable performance. Featuring a spacious sleeper cab, fuel-efficient diesel engine, automatic transmission, and modern driver-assistance technologies, it is an excellent choice for long-haul transportation.",
  };

  const specs = [
    {
      icon: Calendar,
      label: "Year",
      value: truck.year,
    },
    {
      icon: Gauge,
      label: "Mileage",
      value: truck.mileage,
    },
    {
      icon: Settings,
      label: "Transmission",
      value: truck.transmission,
    },
    {
      icon: Fuel,
      label: "Fuel",
      value: truck.fuel,
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3 lg:px-8">
        {/* Left */}
        <div className="lg:col-span-2">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Vehicle Overview
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900">
            Built For Performance &
            <span className="block text-red-600">
              Long-Haul Reliability
            </span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            {truck.description}
          </p>

          {/* Specifications */}

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {specs.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Icon size={26} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      {item.label}
                    </p>

                    <h4 className="text-lg font-bold text-slate-900">
                      {item.value}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right */}
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Asking Price
            </p>

            <h3 className="mt-2 text-5xl font-black text-red-600">
              {truck.price}
            </h3>

            <div className="mt-8 space-y-5">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="text-slate-500">
                  Stock Number
                </span>

                <span className="font-bold text-slate-900">
                  {truck.stock}
                </span>
              </div>

              <div className="flex items-center justify-between border-b pb-4">
                <span className="text-slate-500">
                  VIN
                </span>

                <span className="font-bold text-slate-900">
                  {truck.vin}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">
                  Condition
                </span>

                <span className="flex items-center gap-2 font-bold text-green-600">
                  <BadgeCheck size={18} />
                  {truck.condition}
                </span>
              </div>
            </div>

            {/* CTA */}

            <div className="mt-10 space-y-4">
              <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 py-4 font-semibold text-white transition hover:bg-red-700">
                <Phone size={18} />
                Call Sales Team
              </button>

              <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 py-4 font-semibold text-slate-700 transition hover:border-red-600 hover:text-red-600">
                <Mail size={18} />
                Request Information
              </button>

              <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 py-4 font-semibold text-white transition hover:bg-slate-800">
                <DollarSign size={18} />
                Financing Available
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruckOverview;