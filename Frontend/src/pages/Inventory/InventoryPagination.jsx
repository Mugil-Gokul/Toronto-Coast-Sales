import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const InventoryPagination = () => {
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 lg:flex-row lg:px-8">
        {/* Results */}
        <div>
          <p className="text-slate-600">
            Showing <span className="font-bold text-slate-900">1–9</span> of{" "}
            <span className="font-bold text-slate-900">50</span> vehicles
          </p>
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-3">
          {/* Previous */}
          <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 text-slate-700 transition hover:border-red-600 hover:text-red-600">
            <ChevronLeft size={20} />
          </button>

          {/* Pages */}
          <button className="h-12 w-12 rounded-xl bg-red-600 font-semibold text-white shadow-lg">
            1
          </button>

          <button className="h-12 w-12 rounded-xl border border-slate-300 font-semibold text-slate-700 transition hover:border-red-600 hover:text-red-600">
            2
          </button>

          <button className="h-12 w-12 rounded-xl border border-slate-300 font-semibold text-slate-700 transition hover:border-red-600 hover:text-red-600">
            3
          </button>

          <span className="px-2 text-slate-500">...</span>

          <button className="h-12 w-12 rounded-xl border border-slate-300 font-semibold text-slate-700 transition hover:border-red-600 hover:text-red-600">
            8
          </button>

          {/* Next */}
          <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 text-slate-700 transition hover:border-red-600 hover:text-red-600">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InventoryPagination;