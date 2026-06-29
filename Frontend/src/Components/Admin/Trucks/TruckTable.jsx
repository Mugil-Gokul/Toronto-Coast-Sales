import TruckRow from "./TruckRow";

const TruckTable = ({ trucks = [], onDelete }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Image
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Truck
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Brand
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Price
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {trucks.length > 0 ? (
              trucks.map((truck) => (
                <TruckRow
                  key={truck._id}
                  truck={truck}
                  onDelete={onDelete}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="py-16 text-center text-slate-500"
                >
                  No trucks found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TruckTable;