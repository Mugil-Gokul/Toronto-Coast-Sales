import {
  Cpu,
  Zap,
  Fuel,
  Settings,
  Palette,
} from "lucide-react";

const TruckSpecifications = ({ truck }) => {
  const specifications = [
    {
      icon: Cpu,
      label: "Engine",
      value:
        truck.specifications?.engine ||
        "Not Available",
    },
    {
      icon: Zap,
      label: "Horsepower",
      value:
        truck.specifications?.horsepower ||
        "Not Available",
    },
    {
      icon: Fuel,
      label: "Fuel Type",
      value:
        truck.specifications?.fuel ||
        "Not Available",
    },
    {
      icon: Settings,
      label: "Transmission",
      value:
        truck.specifications?.transmission ||
        "Not Available",
    },
    {
      icon: Palette,
      label: "Exterior Color",
      value:
        truck.specifications?.color ||
        "Not Available",
    },
  ];

  return (
    <section className="bg-white py-10">
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
            Detailed technical specifications and performance
            information for this vehicle.
          </p>

        </div>

        {/* Grid */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {specifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <p className="mt-6 text-sm font-medium text-slate-500">
                  {item.label}
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900 break-words">
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