const RecentTrucks = ({ trucks }) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">Recent Trucks</h2>

      <div className="space-y-4">
        {trucks.map((truck) => (
          <div
            key={truck._id}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <div>
              <h3 className="font-semibold">{truck.title}</h3>

              <p className="text-sm text-slate-500">
                {truck.brand} • {truck.year}
              </p>
            </div>

            <div className="text-right">
              <p className="font-bold text-orange-600">
                ${truck.price.toLocaleString()}
              </p>

              <span
                className={`text-sm ${
                  truck.status === "available"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {truck.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTrucks;
