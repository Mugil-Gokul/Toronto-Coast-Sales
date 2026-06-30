import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import Logo from "../assets/TCT-Logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Inventory", path: "/inventory" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <>
      {/* Floating Call Button */}
      <a
        href="tel:+14379903200"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition hover:scale-110"
      >
        <Phone size={22} />
      </a>

      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
            {/* Company */}
            <div>
              <img
                src={Logo}
                alt="Logo"
                className="h-14 rounded-xl bg-white"
              />

              <p className="mt-6 max-w-md text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Toronto Coast Truck Sales provides premium commercial
                trucks, trailer solutions, financing options,
                professional repair services, and trusted after-sales
                support for businesses across Canada.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="mb-5 text-lg font-bold sm:mb-6 sm:text-xl">
                Quick Links
              </h3>

              <ul className="space-y-3 sm:space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center gap-2 text-slate-400 transition hover:text-red-500"
                    >
                      {link.name}

                      <ArrowUpRight
                        size={15}
                        className="opacity-0 transition group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-5 text-lg font-bold sm:mb-6 sm:text-xl">
                Contact
              </h3>

              <div className="space-y-5 sm:space-y-6">
                <a
                  href="tel:+14379903200"
                  className="flex items-start gap-4"
                >
                  <Phone
                    className="mt-1 shrink-0 text-red-500"
                    size={20}
                  />

                  <span className="text-sm text-slate-400 sm:text-base">
                    +1 (437) 990-3200
                  </span>
                </a>

                <a
                  href="mailto:trucksales@torontocoast.com"
                  className="flex items-start gap-4"
                >
                  <Mail
                    className="mt-1 shrink-0 text-red-500"
                    size={20}
                  />

                  <span className="break-all text-sm text-slate-400 sm:text-base">
                    trucksales@torontocoast.com
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <MapPin
                    className="mt-1 shrink-0 text-red-500"
                    size={20}
                  />

                  <span className="text-sm text-slate-400 sm:text-base">
                    Toronto, Ontario, Canada
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-6 text-center text-sm text-slate-400 sm:px-6 md:flex-row md:justify-between md:text-left lg:px-8">
            <p>
              © {new Date().getFullYear()} Toronto Coast Truck Sales.
              All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-5 md:justify-start">
              <Link
                // to="/privacy-policy"
                className="transition hover:text-red-500"
              >
                Privacy Policy
              </Link>

              <Link
                // to="/terms-and-conditions"
                className="transition hover:text-red-500"
              >
                Terms & Conditions
              </Link>
            </div>

            <p className="text-center md:text-right">
              Designed & Developed by{" "}
              <span className="font-semibold text-white">
                Mugil Technologies Ltd
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;