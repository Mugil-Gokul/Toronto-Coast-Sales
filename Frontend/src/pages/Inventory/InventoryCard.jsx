import React from "react";
import {
  Calendar,
  Gauge,
  Settings,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const InventoryCard = ({ truck }) => {
  const image =
    truck.images?.length > 0
      ? truck.images[0]
      : "https://placehold.co/800x600/e2e8f0/64748b?text=No+Image";

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}

      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={truck.title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Status */}

        <span
          className={`absolute left-5 top-5 rounded-full px-4 py-2 text-sm font-semibold text-white ${
            truck.status === "available"
              ? "bg-green-600"
              : "bg-red-600"
          }`}
        >
          {truck.status.charAt(0).toUpperCase() +
            truck.status.slice(1)}
        </span>

        {/* Price */}

        <div className="absolute bottom-5 right-5 rounded-2xl bg-white px-5 py-3 shadow-xl">
          <p className="text-2xl font-black text-red-600">
            ${truck.price?.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Content */}

      <div className="p-7">
        {/* Title */}

        <h3 className="text-2xl font-bold text-slate-900 transition group-hover:text-red-600">
          {truck.title}
        </h3>

        <p className="mt-2 text-slate-600">
          {truck.brand} • {truck.model}
        </p>

        {/* Specifications */}

        <div className="mt-6 grid grid-cols-2 gap-4">
          {/* Year */}

          <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-3">
            <Calendar
              size={18}
              className="text-red-600"
            />

            <div>
              <p className="text-xs text-slate-500">
                Year
              </p>

              <p className="font-semibold">
                {truck.year}
              </p>
            </div>
          </div>

          {/* Mileage */}

          <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-3">
            <Gauge
              size={18}
              className="text-red-600"
            />

            <div>
              <p className="text-xs text-slate-500">
                Mileage
              </p>

              <p className="font-semibold">
                {truck.mileage
                  ? `${truck.mileage.toLocaleString()} km`
                  : "N/A"}
              </p>
            </div>
          </div>

          {/* Transmission */}

          <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-3">
            <Settings
              size={18}
              className="text-red-600"
            />

            <div>
              <p className="text-xs text-slate-500">
                Transmission
              </p>

              <p className="font-semibold">
                {truck.specifications?.transmission ||
                  "N/A"}
              </p>
            </div>
          </div>

          {/* Location */}

          <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-3">
            <MapPin
              size={18}
              className="text-red-600"
            />

            <div>
              <p className="text-xs text-slate-500">
                Location
              </p>

              <p className="font-semibold">
                {truck.location || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* View Details */}

        <Link
          to={`/inventory/${truck._id}`}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-600"
        >
          View Details

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default InventoryCard;