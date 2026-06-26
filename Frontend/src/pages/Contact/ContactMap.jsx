import React from "react";
import { MapPin, Navigation } from "lucide-react";

const ContactMap = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Visit Our Dealership
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Find Us
            <span className="block text-red-600">
              On The Map
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Visit our dealership to explore our inventory, speak with
            our team, and find the right truck or trailer for your
            business.
          </p>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-[32px] border border-slate-200 shadow-2xl">
          <iframe
            title="Toronto Coast Truck Sales Location"
            src="https://www.google.com/maps?q=Toronto,Ontario,Canada&output=embed"
            width="100%"
            height="550"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>

        {/* Bottom Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
              <MapPin size={28} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Our Location
            </h3>

            <p className="mt-4 text-slate-600">
              Toronto, Ontario, Canada
            </p>

            <p className="mt-2 text-slate-500">
              Visit our dealership to browse trucks and trailers in
              person.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600/20 text-red-500">
              <Navigation size={28} />
            </div>

            <h3 className="text-2xl font-bold">
              Need Directions?
            </h3>

            <p className="mt-4 text-slate-400">
              Use Google Maps for turn-by-turn navigation and visit us
              during business hours.
            </p>

            <a
              href="https://maps.google.com/?q=Toronto,Ontario,Canada"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
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