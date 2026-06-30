import React from "react";
import { MapPin, Navigation } from "lucide-react";

const ContactMap = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-xs font-semibold text-red-600 sm:text-sm">
            Visit Our Dealership
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl">
            Find Us
            <span className="block text-red-600">On The Map</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg">
            Visit our dealership to explore our inventory, speak with our team,
            and find the right truck or trailer for your business.
          </p>
        </div>

        {/* Map */}

        <div className="overflow-hidden rounded-[24px] border border-slate-200 shadow-2xl sm:rounded-[32px]">
          <iframe
            title="Toronto Coast Truck Sales Location"
            src="https://www.google.com/maps?q=Toronto,Ontario,Canada&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[350px] w-full border-0 sm:h-[450px] lg:h-[550px]"
          />
        </div>

        {/* Bottom Cards */}

        <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2">
          {/* Location Card */}

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
              <MapPin size={26} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Our Location
            </h3>

            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              Toronto, Ontario, Canada
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
              Visit our dealership to browse trucks and trailers in person.
            </p>
          </div>

          {/* Navigation Card */}

          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600/20 text-red-500">
              <Navigation size={26} />
            </div>

            <h3 className="text-xl font-bold sm:text-2xl">Need Directions?</h3>

            <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-base">
              Use Google Maps for turn-by-turn navigation and visit us during
              business hours.
            </p>

            <a
              href="https://maps.google.com/?q=Toronto,Ontario,Canada"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 sm:mt-8 sm:w-auto sm:text-base"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
