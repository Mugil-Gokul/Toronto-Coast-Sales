import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Pagination = ({
  pagination,
  page,
  setPage,
}) => {
  if (
    !pagination ||
    pagination.totalPages <= 1
  )
    return null;

  const totalPages = pagination.totalPages;

  const getPages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    pages.push(1);

    if (page > 3) {
      pages.push("...");
    }

    const start = Math.max(2, page - 1);

    const end = Math.min(
      totalPages - 1,
      page + 1
    );

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">

      {/* Information */}

      <p className="text-sm text-slate-500">
        Showing page{" "}
        <span className="font-semibold">
          {pagination.currentPage}
        </span>{" "}
        of{" "}
        <span className="font-semibold">
          {pagination.totalPages}
        </span>{" "}
        (
        <span className="font-semibold">
          {pagination.totalTrucks}
        </span>{" "}
        trucks)
      </p>

      {/* Controls */}

      <div className="flex items-center gap-2">

        <button
          onClick={() =>
            setPage(page - 1)
          }
          disabled={page === 1}
          className="flex items-center gap-2 rounded-lg border px-4 py-2 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={18} />

          Previous
        </button>

        {getPages().map((item, index) =>
          item === "..." ? (
            <span
              key={index}
              className="px-2 text-slate-400"
            >
              ...
            </span>
          ) : (
            <button
              key={item}
              onClick={() =>
                setPage(item)
              }
              className={`h-10 w-10 rounded-lg font-medium transition ${
                page === item
                  ? "bg-orange-500 text-white shadow"
                  : "border hover:bg-slate-100"
              }`}
            >
              {item}
            </button>
          )
        )}

        <button
          onClick={() =>
            setPage(page + 1)
          }
          disabled={
            page === totalPages
          }
          className="flex items-center gap-2 rounded-lg border px-4 py-2 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next

          <ChevronRight size={18} />
        </button>

      </div>

    </div>
  );
};

export default Pagination;