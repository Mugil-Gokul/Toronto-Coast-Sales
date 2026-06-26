import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

// import Logo from "../../assets/logo.png";

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
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition hover:scale-110"
      >
        <Phone size={22} />
      </a>

      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
            {/* Company */}

            <div>
              {/* <img src={Logo} alt="Logo" className="h-14" /> */}

              <h2 className="text-3xl font-black">
                Toronto Coast
              </h2>

              <p className="mt-6 max-w-md leading-8 text-slate-400">
                Toronto Coast Truck Sales provides premium commercial
                trucks, trailer solutions, financing options,
                professional repair services, and trusted after-sales
                support for businesses across Canada.
              </p>
            </div>

            {/* Navigation */}

            <div>
              <h3 className="mb-6 text-xl font-bold">
                Quick Links
              </h3>

              <ul className="space-y-4">
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
              <h3 className="mb-6 text-xl font-bold">
                Contact
              </h3>

              <div className="space-y-6">
                <a
                  href="tel:+14379903200"
                  className="flex items-start gap-4"
                >
                  <Phone
                    className="mt-1 text-red-500"
                    size={20}
                  />

                  <span className="text-slate-400">
                    +1 (437) 990-3200
                  </span>
                </a>

                <a
                  href="mailto:trucksales@torontocoast.com"
                  className="flex items-start gap-4"
                >
                  <Mail
                    className="mt-1 text-red-500"
                    size={20}
                  />

                  <span className="break-all text-slate-400">
                    trucksales@torontocoast.com
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <MapPin
                    className="mt-1 text-red-500"
                    size={20}
                  />

                  <span className="text-slate-400">
                    Toronto, Ontario, Canada
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-400 md:flex-row lg:px-8">
            <p>
              © {new Date().getFullYear()} Toronto Coast Truck Sales.
              All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link
                // to="/privacy-policy"
                className="hover:text-red-500"
              >
                Privacy Policy
              </Link>

              <Link
                // to="/terms-and-conditions"
                className="hover:text-red-500"
              >
                Terms & Conditions
              </Link>
            </div>

            <p>
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