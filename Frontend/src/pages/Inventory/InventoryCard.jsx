import React from "react";
import { Calendar, Gauge, Settings, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const InventoryCard = ({ truck }) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={truck.image}
          alt={truck.title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Status */}
        <span className="absolute left-5 top-5 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white">
          {truck.status}
        </span>

        {/* Price */}
        <div className="absolute bottom-5 right-5 rounded-2xl bg-white px-5 py-3 shadow-xl">
          <p className="text-2xl font-black text-red-600">
            ${truck.price.toLocaleString()}
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
          {truck.make} • {truck.model}
        </p>

        {/* Specs */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-3">
            <Calendar size={18} className="text-red-600" />
            <div>
              <p className="text-xs text-slate-500">Year</p>
              <p className="font-semibold">{truck.year}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-3">
            <Gauge size={18} className="text-red-600" />
            <div>
              <p className="text-xs text-slate-500">Mileage</p>
              <p className="font-semibold">{truck.mileage}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-3">
            <Settings size={18} className="text-red-600" />
            <div>
              <p className="text-xs text-slate-500">Transmission</p>
              <p className="font-semibold">{truck.transmission}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-3">
            <MapPin size={18} className="text-red-600" />
            <div>
              <p className="text-xs text-slate-500">Location</p>
              <p className="font-semibold">{truck.location}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-600">
          <Link to={`/inventory/${truck.id}`}>View Details</Link>
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
};

export default InventoryCard;
