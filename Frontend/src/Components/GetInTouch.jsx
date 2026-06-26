import React from "react";
import {
  Phone,
  Mail,
  ArrowRight,
  Truck,
} from "lucide-react";

const GetInTouch = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-red-600/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-slate-900 to-black">
          <div className="grid gap-10 p-10 lg:grid-cols-2 lg:p-16">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-red-600/10 px-4 py-2 text-sm font-medium text-red-500">
                <Truck size={16} />
                Let's Talk
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
                Ready To Find Your
                <span className="block text-red-600">
                  Next Truck?
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg text-slate-400">
                Browse our inventory, explore financing options,
                or speak directly with our team to find the
                right truck or trailer for your business.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/10 text-red-500">
                    <Phone size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      Call Us
                    </p>

                    <h3 className="text-xl font-bold text-white">
                      (437) 990-3200
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/10 text-red-500">
                    <Mail size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      Email Us
                    </p>

                    <h3 className="text-xl font-bold text-white break-all">
                      trucksales@torontocoast.com
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button className="flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700">
                  View Inventory
                  <ArrowRight size={18} />
                </button>

                <button className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;