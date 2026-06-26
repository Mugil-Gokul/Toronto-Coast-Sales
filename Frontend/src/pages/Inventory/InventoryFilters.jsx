import React, { useState } from "react";
import { Search, SlidersHorizontal, RotateCcw } from "lucide-react";

const InventoryFilters = () => {
  const [filters, setFilters] = useState({
    keyword: "",
    category: "",
    make: "",
    year: "",
    transmission: "",
    sort: "newest",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setFilters({
      keyword: "",
      category: "",
      make: "",
      year: "",
      transmission: "",
      sort: "newest",
    });
  };

  return (
    <section className="relative -mt-16 z-20 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
          {/* Heading */}
          <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-red-600">
                <SlidersHorizontal size={18} />
                <span className="font-semibold">Filter Inventory</span>
              </div>

              <h2 className="mt-2 text-3xl font-black text-slate-900">
                Find Your Next Truck
              </h2>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-red-500 hover:text-red-600"
            >
              <RotateCcw size={18} />
              Reset Filters
            </button>
          </div>

          {/* Filters */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">
            {/* Search */}
            <div className="xl:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Search
              </label>

              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  name="keyword"
                  value={filters.keyword}
                  onChange={handleChange}
                  placeholder="Volvo, Freightliner..."
                  className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-red-600"
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Category
              </label>

              <select
                name="category"
                value={filters.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600"
              >
                <option value="">All</option>
                <option>Truck</option>
                <option>Trailer</option>
              </select>
            </div>

            {/* Make */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Make
              </label>

              <select
                name="make"
                value={filters.make}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600"
              >
                <option value="">All</option>
                <option>Volvo</option>
                <option>Freightliner</option>
                <option>Kenworth</option>
                <option>Peterbilt</option>
                <option>International</option>
              </select>
            </div>

            {/* Year */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Year
              </label>

              <select
                name="year"
                value={filters.year}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600"
              >
                <option value="">Any</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
              </select>
            </div>

            {/* Transmission */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Transmission
              </label>

              <select
                name="transmission"
                value={filters.transmission}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600"
              >
                <option value="">Any</option>
                <option>Automatic</option>
                <option>Manual</option>
              </select>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-slate-600">
              Showing <span className="font-bold">50</span> available vehicles
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <select
                name="sort"
                value={filters.sort}
                onChange={handleChange}
                className="rounded-xl border border-slate-300 px-5 py-3 outline-none focus:border-red-600"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="lowPrice">Price: Low to High</option>
                <option value="highPrice">Price: High to Low</option>
                <option value="year">Newest Model Year</option>
              </select>

              <button className="rounded-xl bg-red-600 px-8 py-3 font-semibold text-white transition hover:bg-red-700">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryFilters;