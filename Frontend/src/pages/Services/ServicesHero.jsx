import React from "react";
import { ArrowRight, Wrench, ShieldCheck } from "lucide-react";
import ServiceImg from "../../assets/images.jpg";
import { Link } from "react-router-dom";

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-28 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ServiceImg}
          alt="Truck Service"
          className="h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-slate-950/10" />
      </div>

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-red-600/10 blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-red-600/10 blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[140px]" />

      <div className="relative mx-auto flex max-w-7xl items-center px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}

          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-semibold text-red-400 sm:px-5 sm:text-sm">
            <Wrench size={16} />
            Complete Commercial Truck Solutions
          </span>

          {/* Heading */}

          <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
            Professional
            <span className="block text-red-600">Truck Services</span>
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8">
            From premium truck and trailer sales to financing, repair services,
            and extended warranty coverage, Toronto Coast Truck Sales provides
            everything your business needs under one roof.
          </p>

          {/* CTA */}

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap">
            <Link
              to="/inventory"
              className="
    group
    flex
    w-full
    items-center
    justify-center
    gap-3
    rounded-full
    bg-red-600
    px-8
    py-4
    font-semibold
    text-white
    transition
    hover:bg-red-700
    sm:w-auto
  "
            >
              Explore Inventory
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Stats */}

          <div className="mt-12 grid grid-cols-2 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-2xl font-black text-white sm:text-3xl">5+</h3>

              <p className="mt-2 text-sm text-slate-400">
                Professional Services
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white sm:text-3xl">
                10+
              </h3>

              <p className="mt-2 text-sm text-slate-400">Years Experience</p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white sm:text-3xl">
                500+
              </h3>

              <p className="mt-2 text-sm text-slate-400">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white sm:text-3xl">
                24/7
              </h3>

              <p className="mt-2 text-sm text-slate-400">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
