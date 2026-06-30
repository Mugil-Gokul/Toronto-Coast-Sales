const RecentTrucks = ({ trucks = [] }) => {
  return (
    <div
      className="
      rounded-2xl
      border
      border-slate-100
      bg-white
      p-5
      sm:p-6
      shadow-sm
      "
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-800">Recent Trucks</h2>

        <span
          className="
          rounded-full
          bg-slate-100
          px-3
          py-1
          text-xs
          font-semibold
          text-slate-600
          "
        >
          Latest
        </span>
      </div>

      <div className="space-y-4">
        {trucks.length === 0 ? (
          <p className="py-10 text-center text-sm text-slate-500">
            No trucks available
          </p>
        ) : (
          trucks.map((truck) => (
            <div
              key={truck._id}
              className="
              group
              flex
              flex-col
              gap-4
              rounded-xl
              border
              border-slate-100
              p-4
              transition
              duration-300
              hover:border-orange-200
              hover:shadow-md
              sm:flex-row
              sm:items-center
              sm:justify-between
              "
            >
              {/* Left */}

              <div>
                <h3
                  className="
                  font-semibold
                  text-slate-800
                  group-hover:text-orange-600
                  transition
                  "
                >
                  {truck.title}
                </h3>

                <p
                  className="
                  mt-1
                  text-sm
                  text-slate-500
                  "
                >
                  {truck.brand}
                  <span className="mx-2">•</span>
                  {truck.year}
                </p>
              </div>

              {/* Right */}

              <div
                className="
                flex
                items-center
                justify-between
                sm:block
                sm:text-right
                "
              >
                <p
                  className="
                  font-bold
                  text-orange-600
                  "
                >
                  ${(truck.price || 0).toLocaleString()}
                </p>

                <span
                  className={`
                  mt-1
                  inline-flex
                  rounded-full
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  ${
                    truck.status === "available"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }
                  `}
                >
                  {truck.status}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentTrucks;
