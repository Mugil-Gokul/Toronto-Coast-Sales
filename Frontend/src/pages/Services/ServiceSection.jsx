import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const ServiceSection = ({ service, reverse = false }) => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-red-500/10 blur-[120px]" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-red-500/10 blur-[120px]" />

      <div
        className={`relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}
        <div className="relative group">
          {/* Decorative Border */}
          <div className="absolute -left-5 -top-5 h-full w-full rounded-[38px] border border-red-100" />

          {/* Decorative Glow */}
          <div className="absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-red-600/10 blur-3xl transition duration-500 group-hover:scale-125" />

          <div className="overflow-hidden rounded-[32px] shadow-2xl">
            <img
              src={service.image}
              alt={service.title}
              className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute bottom-8 left-8 rounded-2xl border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white">
                <Sparkles size={22} />
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  {service.badge}
                </h4>

                <p className="text-sm text-slate-500">
                  Professional Commercial Solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600">
            <Sparkles size={16} />
            {service.badge}
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
            {service.title}
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg leading-8 text-slate-600">
            {service.description}
          </p>

          {/* Features */}
          <div className="mt-12 grid gap-5">
            {service.features.map((feature) => (
              <div
                key={feature.id}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                  <CheckCircle2 size={20} />
                </div>

                <span className="pt-1 text-slate-700">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-14 flex text-sm gap-5">
            <Link
              to={service.primaryButton.link}
              className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-4 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-red-300/40"
            >
              {service.primaryButton.text}

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to={service.secondaryButton.link}
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:text-red-600 hover:shadow-lg"
            >
              {service.secondaryButton.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;