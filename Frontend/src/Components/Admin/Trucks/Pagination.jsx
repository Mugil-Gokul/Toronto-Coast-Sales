import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ pagination, page, setPage }) => {
  if (!pagination || pagination.totalPages <= 1) {
    return null;
  }

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

    const end = Math.min(totalPages - 1, page + 1);

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
    <div
      className="
      mt-8
      flex
      flex-col
      gap-5
      border-t
      border-slate-200
      pt-6
      lg:flex-row
      lg:items-center
      lg:justify-between
      "
    >
      {/* Info */}

      <p
        className="
        text-center
        text-sm
        text-slate-500
        lg:text-left
        "
      >
        Showing page{" "}
        <span className="font-semibold text-slate-800">
          {pagination.currentPage}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-slate-800">
          {pagination.totalPages}
        </span>{" "}
        (
        <span className="font-semibold text-slate-800">
          {pagination.totalTrucks}
        </span>{" "}
        trucks)
      </p>

      {/* Controls */}

      <div
        className="
        flex
        flex-wrap
        items-center
        justify-center
        gap-2
        "
      >
        {/* Previous */}

        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="
          flex
          items-center
          gap-1
          rounded-xl
          border
          px-3
          py-2
          text-sm
          font-medium
          transition
          hover:bg-slate-100
          disabled:cursor-not-allowed
          disabled:opacity-40
          sm:px-4
          "
        >
          <ChevronLeft size={17} />

          <span className="hidden sm:block">Previous</span>
        </button>

        {getPages().map((item, index) =>
          item === "..." ? (
            <span key={index} className="px-2 text-slate-400">
              ...
            </span>
          ) : (
            <button
              key={item}
              onClick={() => setPage(item)}
              className={`
              h-10
              w-10
              rounded-xl
              text-sm
              font-semibold
              transition
              ${
                page === item
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "border border-slate-200 hover:bg-slate-100 text-slate-700"
              }
              `}
            >
              {item}
            </button>
          ),
        )}

        {/* Next */}

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="
          flex
          items-center
          gap-1
          rounded-xl
          border
          px-3
          py-2
          text-sm
          font-medium
          transition
          hover:bg-slate-100
          disabled:cursor-not-allowed
          disabled:opacity-40
          sm:px-4
          "
        >
          <span className="hidden sm:block">Next</span>

          <ChevronRight size={17} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
