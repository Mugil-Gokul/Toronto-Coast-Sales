import { ArrowRight, Calendar, Truck, Gauge, Settings } from "lucide-react";
import { Link } from "react-router-dom";

import useInventory from "../../hooks/useInventory";

const HomeInventory = () => {
  const { trucks, loading, error } = useInventory({
    status: "available",
    limit: 3,
    sort: "newest",
  });

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="mb-4 inline-block rounded-full bg-red-600/10 px-4 py-2 text-sm font-semibold text-red-500">
              Featured Inventory
            </span>

            <h2 className="text-4xl font-black text-white md:text-5xl">
              Explore Our Latest
              <span className="block text-red-600">Trucks & Trailers</span>
            </h2>
          </div>
        </div>

        {/* Loading */}

        {loading && (
          <div className="py-24 text-center">
            <h2 className="text-xl text-white">Loading inventory...</h2>
          </div>
        )}

        {/* Error */}

        {error && (
          <div className="py-24 text-center">
            <h2 className="text-red-500">{error}</h2>
          </div>
        )}

        {/* Cards */}

        {!loading && !error && (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {trucks.map((truck) => (
              <div
                key={truck._id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-red-500/30 hover:shadow-2xl"
              >
                {/* Image */}

                <div className="relative overflow-hidden">
                  <img
                    src={truck.images?.[0] || truck.image}
                    alt={truck.title}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <span className="absolute left-5 top-5 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white">
                    {truck.status}
                  </span>

                  <div className="absolute bottom-5 right-5 rounded-2xl bg-white px-5 py-3 shadow-xl">
                    <p className="text-2xl font-black text-red-600">
                      ${truck.price?.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Content */}

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white transition group-hover:text-red-500">
                    {truck.title}
                  </h3>

                  <p className="mt-2 text-slate-400">
                    {truck.brand} • {truck.model}
                  </p>

                  {/* Specs */}

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 text-slate-300">
                      <Calendar size={18} className="text-red-500" />

                      <span>{truck.year}</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-300">
                      <Gauge size={18} className="text-red-500" />

                      <span>{truck.mileage}</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-300">
                      <Settings size={18} className="text-red-500" />

                      <span>{truck.specifications.transmission}</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-300">
                      <Truck size={18} className="text-red-500" />

                      <span>{truck.category || "Truck"}</span>
                    </div>
                  </div>

                  {/* Button */}

                  <Link
                    to={`/inventory/${truck._id}`}
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-4 font-semibold text-white transition hover:bg-red-700"
                  >
                    View Details
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}

        <div className="mt-16 text-center">
          <p className="mb-6 text-slate-400">
            Inventory updated regularly with the newest arrivals.
          </p>

          <Link
            to="/inventory"
            className="inline-flex items-center gap-2 rounded-full border border-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-600"
          >
            Browse Full Inventory
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeInventory;
