import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

const ServiceSection = ({ service, reverse = false }) => {
  return (
    <section className="bg-white py-24">
      <div
        className={`mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}
        <div className="relative">
          <img
            src={service.image}
            alt={service.title}
            className="h-[550px] w-full rounded-[32px] object-cover shadow-2xl"
          />

          <div className="absolute bottom-8 left-8 rounded-2xl bg-white p-5 shadow-xl">
            <h4 className="text-lg font-bold text-slate-900">
              {service.badge}
            </h4>

            <p className="text-sm text-slate-500">
              Professional Commercial Solutions
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            {service.badge}
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
            {service.title}
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            {service.description}
          </p>

          {/* Features */}
          <div className="mt-10 grid gap-5">
            {service.features.map((feature) => (
              <div
                key={feature.id}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={22}
                  className="mt-1 flex-shrink-0 text-green-500"
                />

                <span className="text-slate-700">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to={service.primaryButton.link}
              className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              {service.primaryButton.text}

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to={service.secondaryButton.link}
              className="inline-flex items-center rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:border-red-600 hover:text-red-600"
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