import React from "react";
import { ArrowRight, Calendar, Truck } from "lucide-react";

const inventory = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&auto=format&fit=crop",
    year: "2024",
    make: "Freightliner",
    model: "Cascadia",
    type: "Sleeper",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1626453665999-34deea5d2d80?w=1200&auto=format&fit=crop",
    year: "2023",
    make: "Peterbilt",
    model: "579",
    type: "Day Cab",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&auto=format&fit=crop",
    year: "2025",
    make: "Kenworth",
    model: "T680",
    type: "Sleeper",
  },
];

const HomeInventory = () => {
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
              <span className="block text-red-600">
                Trucks & Trailers
              </span>
            </h2>
          </div>

          <button className="flex items-center gap-2 text-white transition hover:text-red-500">
            View All Inventory
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {inventory.map((truck) => (
            <div
              key={truck.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={truck.image}
                  alt={truck.model}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="rounded-full bg-red-600/10 px-3 py-1 text-xs font-semibold text-red-500">
                  {truck.type}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-white">
                  {truck.make} {truck.model}
                </h3>

                <div className="mt-5 flex items-center gap-2 text-slate-400">
                  <Calendar size={16} />
                  <span>{truck.year}</span>
                </div>

                <div className="mt-3 flex items-center gap-2 text-slate-400">
                  <Truck size={16} />
                  <span>{truck.type}</span>
                </div>

                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700">
                  View Details
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="mb-5 text-slate-400">
            Inventory updated regularly with new arrivals.
          </p>

          <button className="rounded-full border border-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-600">
            Browse Full Inventory
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeInventory;