import { Search, SlidersHorizontal, RotateCcw } from "lucide-react";

const InventoryFilters = ({
  filters,
  setFilters,
  total,
  trucks = [],
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
      page: 1,
    }));
  };

  const handleReset = () => {
    setFilters({
      search: "",
      brand: "",
      status: "",
      sort: "newest",
      page: 1,
      limit: 9,
    });
  };

  // Generate unique brands dynamically
  const brands = [...new Set(trucks.map((truck) => truck.brand))]
    .filter(Boolean)
    .sort();

  return (
    <section className="relative z-20 -mt-12 sm:-mt-16 pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-8">

          {/* Header */}

          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <div className="flex items-center gap-2 text-red-600">
                <SlidersHorizontal size={18} />

                <span className="font-semibold">
                  Filter Inventory
                </span>
              </div>

              <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                Find Your Next Truck
              </h2>

              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                Browse our available truck inventory.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-red-500 hover:text-red-600 sm:w-auto"
            >
              <RotateCcw size={18} />
              Reset Filters
            </button>

          </div>

          {/* Filters */}

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

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
                  name="search"
                  value={filters.search}
                  onChange={handleChange}
                  placeholder="Search by title, brand or model..."
                  className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 text-sm outline-none transition focus:border-red-600 sm:text-base"
                />

              </div>

            </div>

            {/* Brand */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Brand
              </label>

              <select
                name="brand"
                value={filters.brand}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-600 sm:text-base"
              >
                <option value="">
                  All Brands
                </option>

                {brands.map((brand) => (
                  <option
                    key={brand}
                    value={brand}
                  >
                    {brand}
                  </option>
                ))}
              </select>

            </div>

            {/* Status */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Status
              </label>

              <select
                name="status"
                value={filters.status}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-600 sm:text-base"
              >
                <option value="">
                  All Status
                </option>

                <option value="available">
                  Available
                </option>

                <option value="sold">
                  Sold
                </option>

              </select>

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-8 flex flex-col gap-5 border-t border-slate-200 pt-6 lg:flex-row lg:items-center lg:justify-between">

            <p className="text-sm text-slate-700 sm:text-base">
              Showing{" "}
              <span className="font-bold text-red-600">
                {total}
              </span>{" "}
              trucks
            </p>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <span className="text-sm font-medium text-slate-600">
                Sort By
              </span>

              <select
                name="sort"
                value={filters.sort}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-600 sm:w-auto sm:px-5 sm:text-base"
              >
                <option value="newest">
                  Newest First
                </option>

                <option value="oldest">
                  Oldest First
                </option>

                <option value="price_low">
                  Price: Low to High
                </option>

                <option value="price_high">
                  Price: High to Low
                </option>

              </select>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default InventoryFilters;