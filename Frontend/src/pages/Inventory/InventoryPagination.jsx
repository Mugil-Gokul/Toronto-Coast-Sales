import { ChevronLeft, ChevronRight } from "lucide-react";

const InventoryPagination = ({
  pagination,
  filters,
  setFilters,
}) => {
  if (!pagination || pagination.totalPages <= 1) {
    return null;
  }

  const {
    currentPage,
    totalPages,
    totalTrucks,
    limit,
  } = pagination;

  const start = (currentPage - 1) * limit + 1;

  const end = Math.min(
    currentPage * limit,
    totalTrucks
  );

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;

    setFilters((prev) => ({
      ...prev,
      page,
    }));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderPages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("left-dot");
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(
      totalPages - 1,
      currentPage + 1
    );

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("right-dot");
    }

    pages.push(totalPages);

    return pages;
  };

  return (
    <section className="bg-white pb-16 sm:pb-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:px-6 lg:flex-row lg:px-8">

        {/* Results */}

        <p className="text-center text-sm text-slate-600 sm:text-base lg:text-left">
          Showing{" "}
          <span className="font-bold text-slate-900">
            {start}-{end}
          </span>{" "}
          of{" "}
          <span className="font-bold text-slate-900">
            {totalTrucks}
          </span>{" "}
          vehicles
        </p>

        {/* Pagination */}

        <div className="w-full overflow-x-auto lg:w-auto">
          <div className="flex min-w-max items-center justify-center gap-2 pb-1">

            {/* Previous */}

            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-300 transition hover:border-red-600 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={20} />
            </button>

            {renderPages().map((page, index) => {
              if (
                page === "left-dot" ||
                page === "right-dot"
              ) {
                return (
                  <span
                    key={index}
                    className="px-2 text-slate-500"
                  >
                    ...
                  </span>
                );
              }

              return (
                <button
                  key={page}
                  onClick={() => changePage(page)}
                  className={`h-10 w-10 shrink-0 rounded-xl font-semibold transition sm:h-12 sm:w-12 ${
                    currentPage === page
                      ? "bg-red-600 text-white shadow-lg"
                      : "border border-slate-300 text-slate-700 hover:border-red-600 hover:text-red-600"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next */}

            <button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-300 transition hover:border-red-600 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12"
            >
              <ChevronRight size={20} />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default InventoryPagination;