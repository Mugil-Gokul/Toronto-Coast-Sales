import React from "react";
import { ArrowRight, Wrench, ShieldCheck } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-32 pb-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&auto=format&fit=crop"
          alt="Truck Service"
          className="h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
      </div>

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-red-600/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-red-600/10 blur-[140px]" />

      <div className="relative mx-auto flex max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-400">
            <Wrench size={16} />
            Complete Commercial Truck Solutions
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            Professional
            <span className="block text-red-600">
              Truck Services
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            From premium truck and trailer sales to financing,
            repair services, and extended warranty coverage,
            Toronto Coast Truck Sales provides everything your
            business needs under one roof.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="group flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700">
              Explore Inventory

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
              <ShieldCheck size={18} />
              Our Services
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-black text-white">5+</h3>
              <p className="mt-2 text-sm text-slate-400">
                Professional Services
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-white">10+</h3>
              <p className="mt-2 text-sm text-slate-400">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-white">500+</h3>
              <p className="mt-2 text-sm text-slate-400">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-white">24/7</h3>
              <p className="mt-2 text-sm text-slate-400">
                Customer Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;