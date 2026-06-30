import {
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const TruckFeatures = ({ truck }) => {
  const features = truck.features || [];

  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-10 text-center sm:mb-16">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Vehicle Features
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl">
            Everything Included
            <span className="block text-red-600">
              With This Truck
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Explore the premium features and equipment included with
            this vehicle.
          </p>

        </div>

        {features.length > 0 ? (

          <div className="rounded-3xl bg-white p-6 shadow-xl sm:rounded-[32px] sm:p-10">

            <div className="mb-8 flex items-center gap-4 sm:mb-10">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600 sm:h-16 sm:w-16 sm:rounded-2xl">
                <Sparkles size={26} />
              </div>

              <div>

                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Included Features
                </h3>

                <p className="text-sm text-slate-500 sm:text-base">
                  {features.length} feature
                  {features.length > 1 ? "s" : ""} available
                </p>

              </div>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">

              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-red-200 hover:bg-white hover:shadow-lg sm:gap-4 sm:p-5"
                >

                  <CheckCircle2
                    size={22}
                    className="shrink-0 text-green-500"
                  />

                  <span className="break-words text-sm font-medium text-slate-700 sm:text-base">
                    {feature}
                  </span>

                </div>
              ))}

            </div>

          </div>

        ) : (

          <div className="rounded-3xl bg-white p-10 text-center shadow-lg sm:p-16">

            <CheckCircle2
              size={48}
              className="mx-auto text-slate-300 sm:h-14 sm:w-14"
            />

            <h3 className="mt-5 text-xl font-bold text-slate-800 sm:mt-6 sm:text-2xl">
              No Features Listed
            </h3>

            <p className="mt-3 text-sm text-slate-500 sm:text-base">
              Features for this truck haven't been added yet.
            </p>

          </div>

        )}

      </div>
    </section>
  );
};

export default TruckFeatures;