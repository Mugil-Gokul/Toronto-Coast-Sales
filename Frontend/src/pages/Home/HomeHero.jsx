import React from "react";
import { ArrowRight, Phone, ShieldCheck, Wrench, Truck } from "lucide-react";
import HeroImg from "../../assets/images (2).jpg";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section className="relative min-h-screen lg:h-[110vh] overflow-hidden bg-black pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=2000&auto=format&fit=crop"
          alt="Truck"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent lg:via-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl py-16 lg:py-0">
          {/* Heading */}
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Premium Trucks
            <span className="block text-red-600">& Trailers</span>
            For Every Business
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Buy and sell semi-trucks, day cabs, sleepers, dry vans, reefers, and
            flatbeds with confidence. Financing, warranty, and in-house repairs
            available.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap">
            <Link
              to="/inventory"
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700 sm:w-auto"
            >
              View Inventory
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:mt-16 md:grid-cols-4">
            <div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">50+</h3>
              <p className="text-sm text-gray-400">Inventory Listings</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">10+</h3>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                100%
              </h3>
              <p className="text-sm text-gray-400">Transparent Deals</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                24/7
              </h3>
              <p className="text-sm text-gray-400">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
