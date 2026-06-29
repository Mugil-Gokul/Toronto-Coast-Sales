import { Search, Plus, ArrowUpDown } from "lucide-react";
import { Link } from "react-router-dom";

const TruckToolbar = ({
  search,
  setSearch,
  status,
  setStatus,
  sort,
  setSort,
}) => {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

      <div className="flex flex-col gap-4 lg:flex-row">

        {/* Search */}

        <div className="relative w-full lg:w-96">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search trucks..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-orange-500"
          />

        </div>

        {/* Status */}

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-orange-500"
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

        {/* Sort */}

        <div className="relative">

          <ArrowUpDown
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
            className="rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-8 outline-none transition focus:border-orange-500"
          >

            <option value="newest">
              Newest First
            </option>

            <option value="oldest">
              Oldest First
            </option>

            <option value="price_high">
              Price: High → Low
            </option>

            <option value="price_low">
              Price: Low → High
            </option>

          </select>

        </div>

      </div>

      <Link
        to="/admin/add-truck"
        className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
      >

        <Plus size={20} />

        Add Truck

      </Link>

    </div>
  );
};

export default TruckToolbar;