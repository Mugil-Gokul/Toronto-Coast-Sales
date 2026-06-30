import { Pencil, Trash2, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

const TruckRow = ({ truck, onDelete }) => {
  return (
    <tr
      className="
      group
      transition
      hover:bg-slate-50
      "
    >
      {/* Image */}

      <td className="px-5 py-4">
        {truck.images?.length > 0 ? (
          <img
            src={truck.images[0]}
            alt={truck.title}
            className="
            h-14
            w-20
            rounded-xl
            border
            border-slate-200
            object-cover
            transition
            duration-300
            group-hover:scale-105
            "
          />
        ) : (
          <div
            className="
            flex
            h-14
            w-20
            items-center
            justify-center
            rounded-xl
            border
            border-dashed
            border-slate-300
            bg-slate-100
            text-slate-400
            "
          >
            <ImageIcon size={22} />
          </div>
        )}
      </td>

      {/* Truck Info */}

      <td className="px-5 py-4">
        <h3
          className="
          font-semibold
          text-slate-800
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
          {truck.model || "N/A"}

          <span className="mx-2">•</span>

          {truck.year}
        </p>
      </td>

      {/* Brand */}

      <td
        className="
        px-5
        py-4
        font-medium
        text-slate-700
        "
      >
        {truck.brand}
      </td>

      {/* Price */}

      <td
        className="
        px-5
        py-4
        font-bold
        text-orange-600
        "
      >
        ${(truck.price || 0).toLocaleString("en-CA")}
      </td>

      {/* Status */}

      <td className="px-5 py-4">
        <StatusBadge status={truck.status} />
      </td>

      {/* Actions */}

      <td className="px-5 py-4">
        <div
          className="
          flex
          justify-center
          gap-2
          "
        >
          <Link
            to={`/admin/edit-truck/${truck._id}`}
            title="Edit Truck"
            className="
            rounded-xl
            bg-blue-100
            p-2
            text-blue-600
            transition-all
            duration-200
            hover:bg-blue-600
            hover:text-white
            hover:scale-105
            "
          >
            <Pencil size={18} />
          </Link>

          <button
            onClick={() => onDelete(truck)}
            title="Delete Truck"
            className="
            rounded-xl
            bg-red-100
            p-2
            text-red-600
            transition-all
            duration-200
            hover:bg-red-600
            hover:text-white
            hover:scale-105
            "
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TruckRow;
