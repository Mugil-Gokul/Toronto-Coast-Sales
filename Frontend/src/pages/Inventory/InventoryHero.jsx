import React from "react";
import { ChevronRight, Search } from "lucide-react";
// import inventoryHero from "../assets/inventory/inventory-hero.jpg";

const InventoryHero = () => {
  return (
    <section className="relative flex h-[75vh] lg:h-[100vh] items-center overflow-hidden bg-black pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          // src={inventoryHero}
          src="https://images.unsplash.com/photo-1501706362039-c6e80948f11f?w=2000&auto=format&fit=crop"
          alt="Truck Inventory"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent lg:via-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-slate-300 sm:mb-6 sm:text-sm">
          <span>Home</span>

          <ChevronRight size={14} />

          <span className="font-medium text-red-500">
            Inventory
          </span>
        </div>

        <div className="max-w-4xl py-12 lg:py-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
            <Search size={16} />
            Browse Our Inventory
          </span>

          <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:mt-6 lg:text-7xl">
            Find The Perfect
            <span className="block text-red-600">
              Truck For Your Business
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg">
            Explore our carefully selected inventory of quality
            semi-trucks, day cabs, sleeper trucks, trailers, and
            commercial vehicles. Find the right equipment backed by
            financing options and professional support.
          </p>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-white to-transparent sm:h-24" />
    </section>
  );
};

export default InventoryHero;