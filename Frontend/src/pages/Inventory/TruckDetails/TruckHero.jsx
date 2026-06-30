import {
  ChevronRight,
  Calendar,
  Gauge,
  MapPin,
  BadgeCheck,
} from "lucide-react";

import { Link } from "react-router-dom";

const TruckHero = ({ truck }) => {
  const {
    title,
    year,
    mileage,
    location,
    price,
    status,
    description,
  } = truck;

  return (
    <section className="relative overflow-hidden bg-slate-950 pb-16 pt-28 sm:pb-20 sm:pt-28 lg:pt-32">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-600/10 blur-[120px] sm:h-96 sm:w-96 sm:blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-600/10 blur-[120px] sm:h-96 sm:w-96 sm:blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Breadcrumb */}

        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-400 sm:mb-8 sm:text-sm">

          <Link
            to="/"
            className="transition hover:text-white"
          >
            Home
          </Link>

          <ChevronRight size={14} />

          <Link
            to="/inventory"
            className="transition hover:text-white"
          >
            Inventory
          </Link>

          <ChevronRight size={14} />

          <span className="max-w-[180px] truncate font-medium text-red-500 sm:max-w-none">
            {title}
          </span>

        </div>

        {/* Status */}

        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white sm:px-5 sm:text-sm ${
            status === "available"
              ? "bg-green-600"
              : "bg-red-600"
          }`}
        >
          <BadgeCheck size={16} />

          {status.charAt(0).toUpperCase() +
            status.slice(1)}

        </span>

        {/* Title & Price */}

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">

          <div className="flex-1">

            <h1 className="text-3xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {description ||
                "Premium commercial truck built for performance, reliability, and long-haul operations."}
            </p>

          </div>

          <div className="w-full rounded-3xl bg-red-600 px-6 py-5 shadow-2xl sm:w-auto sm:px-8 sm:py-6">

            <p className="text-xs uppercase tracking-widest text-red-100 sm:text-sm">
              Asking Price
            </p>

            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              ${Number(price).toLocaleString()}
            </h2>

          </div>

        </div>

        {/* Quick Specs */}

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">

          {/* Year */}

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg sm:gap-4 sm:p-6">

            <Calendar
              className="shrink-0 text-red-500"
              size={26}
            />

            <div>

              <p className="text-sm text-slate-400">
                Year
              </p>

              <h3 className="text-lg font-bold text-white sm:text-xl">
                {year}
              </h3>

            </div>

          </div>

          {/* Mileage */}

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg sm:gap-4 sm:p-6">

            <Gauge
              className="shrink-0 text-red-500"
              size={26}
            />

            <div>

              <p className="text-sm text-slate-400">
                Mileage
              </p>

              <h3 className="text-lg font-bold text-white sm:text-xl">
                {Number(mileage).toLocaleString()} km
              </h3>

            </div>

          </div>

          {/* Location */}

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg sm:gap-4 sm:p-6">

            <MapPin
              className="shrink-0 text-red-500"
              size={26}
            />

            <div className="min-w-0">

              <p className="text-sm text-slate-400">
                Location
              </p>

              <h3 className="truncate text-lg font-bold text-white sm:text-xl">
                {location}
              </h3>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TruckHero;