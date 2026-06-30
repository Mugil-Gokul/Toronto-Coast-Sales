import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Building2, ArrowRight, Phone } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pt-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=2000&auto=format&fit=crop"
          alt="Toronto Coast Truck Sales"
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/75" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
      </div>

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-red-600/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-red-600/10 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-300">
          <Link to="/" className="transition hover:text-white">
            Home
          </Link>

          <ChevronRight size={16} />

          <span className="font-semibold text-red-500">About Us</span>
        </div>

        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/10 px-5 py-2 text-sm font-semibold text-red-400 backdrop-blur-sm">
          <Building2 size={16} />
          Trusted Commercial Truck Dealership
        </span>

        {/* Heading */}
        <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl">
          Driving Businesses
          <span className="block text-red-600">Forward With Confidence</span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Toronto Coast Truck Sales is committed to delivering premium
          commercial trucks, trailers, financing solutions, repair services, and
          exceptional customer support. Our goal is to help owner-operators and
          fleet businesses invest in reliable equipment that keeps them moving
          forward.
        </p>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-10 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default AboutHero;
