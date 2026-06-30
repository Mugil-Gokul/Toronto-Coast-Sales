const StatusBadge = ({ status }) => {
  const isAvailable = status === "available";
  const isSold = status === "sold";

  return (
    <span
      className={`
      inline-flex
      items-center
      rounded-full
      px-3
      py-1
      text-xs
      font-semibold
      transition-all
      ${
        isAvailable
          ? "bg-green-100 text-green-700"
          : isSold
            ? "bg-red-100 text-red-700"
            : "bg-slate-100 text-slate-600"
      }
      `}
    >
      <span
        className={`
        mr-2
        h-2
        w-2
        rounded-full
        ${isAvailable ? "bg-green-500" : isSold ? "bg-red-500" : "bg-slate-400"}
        `}
      />

      {isAvailable ? "Available" : isSold ? "Sold" : "Unknown"}
    </span>
  );
};

export default StatusBadge;
