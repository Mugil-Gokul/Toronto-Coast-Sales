import React from "react";
import { ArrowRight, Phone, ShieldCheck, Wrench, Truck } from "lucide-react";
import HeroImg from "../../assets/images (2).jpg"

const HomeHero = () => {
  return (
    <section className="relative h-[110vh] overflow-hidden bg-black pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=2000&auto=format&fit=crop"
          alt="Truck"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* <span className="mb-6 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-500">
            Toronto Coast Truck Sales
          </span> */}

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Premium Trucks
            <span className="block text-red-600">& Trailers</span>
            For Every Business
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Buy and sell semi-trucks, day cabs, sleepers, dry vans, reefers, and
            flatbeds with confidence. Financing, warranty, and in-house repairs
            available.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="group flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700">
              View Inventory
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
              <Phone size={18} />
              Call Now
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="text-sm text-gray-400">Inventory Listings</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">10+</h3>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">100%</h3>
              <p className="text-sm text-gray-400">Transparent Deals</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">24/7</h3>
              <p className="text-sm text-gray-400">Customer Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      {/* <div className="absolute bottom-12 right-8 hidden gap-4 xl:flex">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg">
          <Truck className="mb-3 text-red-500" size={28} />
          <h4 className="font-semibold text-white">
            Truck Inventory
          </h4>
          <p className="text-sm text-gray-400">
            New arrivals daily
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg">
          <ShieldCheck
            className="mb-3 text-red-500"
            size={28}
          />
          <h4 className="font-semibold text-white">
            Extended Warranty
          </h4>
          <p className="text-sm text-gray-400">
            Extra peace of mind
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg">
          <Wrench className="mb-3 text-red-500" size={28} />
          <h4 className="font-semibold text-white">
            Repair Shop
          </h4>
          <p className="text-sm text-gray-400">
            In-house service
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default HomeHero;
