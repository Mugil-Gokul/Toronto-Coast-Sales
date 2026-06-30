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
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-10 text-center sm:mb-16">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Technical Specifications
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl">
            Everything You Need
            <span className="block text-red-600">
              To Know
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Detailed technical specifications and performance
            information for this vehicle.
          </p>

        </div>

        {/* Grid */}

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">

          {specifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-3xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Icon size={24} />
                </div>

                <p className="mt-5 text-sm font-medium text-slate-500 sm:mt-6">
                  {item.label}
                </p>

                <h3 className="mt-2 break-words text-lg font-bold text-slate-900 sm:text-xl">
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