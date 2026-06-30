import React from "react";
import { Phone, Mail, ArrowRight, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-14 sm:py-14 lg:py-20">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-600/10 blur-[100px] sm:h-96 sm:w-96 sm:blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-600/10 blur-[100px] sm:h-96 sm:w-96 sm:blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/10 bg-gradient-to-r from-slate-900 to-black">
          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-2 lg:p-16">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-red-600/10 px-4 py-2 text-sm font-medium text-red-500">
                <Truck size={16} />
                Let's Talk
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                Ready To Find Your
                <span className="block text-red-600">Next Truck?</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:mt-6 sm:text-lg">
                Browse our inventory, explore financing options, or speak
                directly with our team to find the right truck or trailer for
                your business.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center gap-5 sm:gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600/10 text-red-500 sm:h-12 sm:w-12">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Call Us</p>

                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      (437) 990-3200
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600/10 text-red-500 sm:h-12 sm:w-12">
                    <Mail size={20} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-slate-400">Email Us</p>

                    <h3 className="break-all text-base font-bold text-white sm:text-lg lg:text-xl">
                      trucksales@torontocoast.com
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap">
                <Link
                  to="/inventory"
                  className="
      flex w-full items-center justify-center gap-2
      rounded-full
      bg-red-600
      px-8 py-4
      font-semibold
      text-white
      transition
      hover:bg-red-700
      sm:w-auto
    "
                >
                  View Inventory
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="
      w-full
      rounded-full
      border border-white/20
      px-8 py-4
      text-center
      font-semibold
      text-white
      transition
      hover:bg-white/10
      sm:w-auto
    "
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
