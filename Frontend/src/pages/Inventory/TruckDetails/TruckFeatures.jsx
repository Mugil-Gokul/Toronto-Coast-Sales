import {
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const TruckFeatures = ({ truck }) => {
  const features = truck.features || [];

  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Vehicle Features
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Everything Included
            <span className="block text-red-600">
              With This Truck
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Explore the premium features and equipment included with
            this vehicle.
          </p>

        </div>

        {features.length > 0 ? (

          <div className="rounded-[32px] bg-white p-10 shadow-xl">

            <div className="mb-10 flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                <Sparkles size={30} />
              </div>

              <div>

                <h3 className="text-3xl font-bold text-slate-900">
                  Included Features
                </h3>

                <p className="text-slate-500">
                  {features.length} feature
                  {features.length > 1 ? "s" : ""} available
                </p>

              </div>

            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-red-200 hover:bg-white hover:shadow-lg"
                >

                  <CheckCircle2
                    size={22}
                    className="flex-shrink-0 text-green-500"
                  />

                  <span className="font-medium text-slate-700">
                    {feature}
                  </span>

                </div>
              ))}

            </div>

          </div>

        ) : (

          <div className="rounded-3xl bg-white p-16 text-center shadow-lg">

            <CheckCircle2
              size={56}
              className="mx-auto text-slate-300"
            />

            <h3 className="mt-6 text-2xl font-bold text-slate-800">
              No Features Listed
            </h3>

            <p className="mt-3 text-slate-500">
              Features for this truck haven't been added yet.
            </p>

          </div>

        )}

      </div>
    </section>
  );
};

export default TruckFeatures;