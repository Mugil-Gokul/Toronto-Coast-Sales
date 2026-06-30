import {
  ArrowRight,
  Calendar,
  Truck,
  Gauge,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

import useInventory from "../../hooks/useInventory";

const HomeInventory = () => {
  const { trucks, loading, error } = useInventory({
    status: "available",
    limit: 3,
    sort: "newest",
  });

  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:mb-14 lg:flex-row lg:items-end">
          <div>
            <span className="mb-4 inline-block rounded-full bg-red-600/10 px-4 py-2 text-sm font-semibold text-red-500">
              Featured Inventory
            </span>

            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
              Explore Our Latest
              <span className="block text-red-600">
                Trucks & Trailers
              </span>
            </h2>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="py-20 text-center sm:py-24">
            <h2 className="text-lg text-white sm:text-xl">
              Loading inventory...
            </h2>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="py-20 text-center sm:py-24">
            <h2 className="text-red-500">{error}</h2>
          </div>
        )}

        {/* Cards */}
        {!loading && !error && (
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
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
                    className="h-60 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-72"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1.5 text-xs font-semibold text-white sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-sm">
                    {truck.status}
                  </span>

                  <div className="absolute bottom-4 right-4 rounded-2xl bg-white px-4 py-2 shadow-xl sm:bottom-5 sm:right-5 sm:px-5 sm:py-3">
                    <p className="text-xl font-black text-red-600 sm:text-2xl">
                      ${truck.price?.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-white transition group-hover:text-red-500 sm:text-2xl">
                    {truck.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400 sm:text-base">
                    {truck.brand} • {truck.model}
                  </p>

                  {/* Specs */}
                  <div className="mt-5 space-y-3 sm:mt-6">
                    <div className="flex items-center gap-3 text-sm text-slate-300 sm:text-base">
                      <Calendar size={18} className="text-red-500" />
                      <span>{truck.year}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-300 sm:text-base">
                      <Gauge size={18} className="text-red-500" />
                      <span>{truck.mileage}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-300 sm:text-base">
                      <Settings size={18} className="text-red-500" />
                      <span>{truck.specifications.transmission}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-300 sm:text-base">
                      <Truck size={18} className="text-red-500" />
                      <span>{truck.category || "Truck"}</span>
                    </div>
                  </div>

                  {/* Button */}
                  <Link
                    to={`/inventory/${truck._id}`}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 font-semibold text-white transition hover:bg-red-700 sm:mt-8 sm:py-4"
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
        <div className="mt-14 text-center sm:mt-16">
          <p className="mb-6 text-sm text-slate-400 sm:text-base">
            Inventory updated regularly with the newest arrivals.
          </p>

          <Link
            to="/inventory"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-600 sm:w-auto"
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