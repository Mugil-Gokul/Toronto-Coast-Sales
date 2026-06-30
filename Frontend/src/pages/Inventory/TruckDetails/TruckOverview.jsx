import {
  Calendar,
  Gauge,
  Settings,
  Fuel,
  BadgeCheck,
  Phone,
  Mail,
  DollarSign,
} from "lucide-react";

const TruckOverview = ({ truck }) => {
  const specs = [
    {
      icon: Calendar,
      label: "Year",
      value: truck.year,
    },
    {
      icon: Gauge,
      label: "Mileage",
      value: `${Number(truck.mileage).toLocaleString()} km`,
    },
    {
      icon: Settings,
      label: "Transmission",
      value:
        truck.specifications?.transmission ||
        "Not Available",
    },
    {
      icon: Fuel,
      label: "Fuel",
      value:
        truck.specifications?.fuel ||
        "Not Available",
    },
  ];

  return (
    <section className="bg-slate-50 py-10">
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
            {truck.description ||
              "No description available for this truck."}
          </p>

          {/* Specifications */}

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {specs.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
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
              ${Number(truck.price).toLocaleString()}
            </h3>

            <div className="mt-8 space-y-5">

              <div className="flex items-center justify-between border-b pb-4">
                <span className="text-slate-500">
                  Brand
                </span>

                <span className="font-bold text-slate-900">
                  {truck.brand}
                </span>
              </div>

              <div className="flex items-center justify-between border-b pb-4">
                <span className="text-slate-500">
                  Model
                </span>

                <span className="font-bold text-slate-900">
                  {truck.model}
                </span>
              </div>

              <div className="flex items-center justify-between border-b pb-4">
                <span className="text-slate-500">
                  Location
                </span>

                <span className="font-bold text-slate-900">
                  {truck.location}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">
                  Status
                </span>

                <span
                  className={`flex items-center gap-2 font-bold ${
                    truck.status === "available"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  <BadgeCheck size={18} />

                  {truck.status.charAt(0).toUpperCase() +
                    truck.status.slice(1)}

                </span>
              </div>

            </div>

            {/* CTA */}

            <div className="mt-10 space-y-4">

              <a
                href="tel:+14165551234"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                <Phone size={18} />

                Call Sales Team

              </a>

              <a
                href="/contact"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 py-4 font-semibold text-slate-700 transition hover:border-red-600 hover:text-red-600"
              >
                <Mail size={18} />

                Request Information

              </a>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 py-4 font-semibold text-white transition hover:bg-slate-800"
              >
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