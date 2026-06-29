import { Pencil, Trash2, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

const TruckRow = ({ truck, onDelete }) => {
  return (
    <tr className="transition hover:bg-slate-50">
      {/* Image */}

      <td className="px-6 py-4">
        {truck.images?.length > 0 ? (
          <img
            src={truck.images[0]}
            alt={truck.title}
            className="h-16 w-24 rounded-lg border object-cover"
          />
        ) : (
          <div className="flex h-16 w-24 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-100 text-slate-400">
            <ImageIcon size={22} />
          </div>
        )}
      </td>

      {/* Truck */}

      <td className="px-6 py-4">
        <h3 className="font-semibold text-slate-800">
          {truck.title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {truck.model} • {truck.year}
        </p>
      </td>

      {/* Brand */}

      <td className="px-6 py-4 text-slate-700">
        {truck.brand}
      </td>

      {/* Price */}

      <td className="px-6 py-4 font-semibold text-orange-600">
        $
        {Number(truck.price).toLocaleString(
          "en-CA"
        )}
      </td>

      {/* Status */}

      <td className="px-6 py-4">
        <StatusBadge
          status={truck.status}
        />
      </td>

      {/* Actions */}

      <td className="px-6 py-4">
        <div className="flex justify-center gap-2">

          <Link
            to={`/admin/edit-truck/${truck._id}`}
            className="rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-600 hover:text-white"
            title="Edit Truck"
          >
            <Pencil size={18} />
          </Link>

          <button
            onClick={() => onDelete(truck)}
            className="rounded-lg bg-red-100 p-2 text-red-600 transition hover:bg-red-600 hover:text-white"
            title="Delete Truck"
          >
            <Trash2 size={18} />
          </button>

        </div>
      </td>
    </tr>
  );
};

export default TruckRow;