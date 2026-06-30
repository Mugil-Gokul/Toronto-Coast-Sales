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
    <section className="relative overflow-hidden bg-slate-950 pb-20 pt-32">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Breadcrumb */}

        <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">

          <Link
            to="/"
            className="transition hover:text-white"
          >
            Home
          </Link>

          <ChevronRight size={16} />

          <Link
            to="/inventory"
            className="transition hover:text-white"
          >
            Inventory
          </Link>

          <ChevronRight size={16} />

          <span className="font-medium text-red-500">
            {title}
          </span>

        </div>

        {/* Status */}

        <span
          className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white ${
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

        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <h1 className="text-5xl font-black text-white md:text-6xl">
              {title}
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-400">
              {description ||
                "Premium commercial truck built for performance, reliability, and long-haul operations."}
            </p>

          </div>

          <div className="rounded-3xl bg-red-600 px-8 py-6 shadow-2xl">

            <p className="text-sm uppercase tracking-widest text-red-100">
              Asking Price
            </p>

            <h2 className="mt-2 text-5xl font-black text-white">
              ${Number(price).toLocaleString()}
            </h2>

          </div>

        </div>

        {/* Quick Specs */}

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {/* Year */}

          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">

            <Calendar
              className="text-red-500"
              size={28}
            />

            <div>

              <p className="text-sm text-slate-400">
                Year
              </p>

              <h3 className="text-xl font-bold text-white">
                {year}
              </h3>

            </div>

          </div>

          {/* Mileage */}

          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">

            <Gauge
              className="text-red-500"
              size={28}
            />

            <div>

              <p className="text-sm text-slate-400">
                Mileage
              </p>

              <h3 className="text-xl font-bold text-white">
                {Number(mileage).toLocaleString()} km
              </h3>

            </div>

          </div>

          {/* Location */}

          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">

            <MapPin
              className="text-red-500"
              size={28}
            />

            <div>

              <p className="text-sm text-slate-400">
                Location
              </p>

              <h3 className="text-xl font-bold text-white">
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