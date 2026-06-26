import React from "react";
import { ChevronRight } from "lucide-react";
// import aboutHero from "../assets/about/about-hero.jpg";

const AboutHero = () => {
  return (
    <section className="relative flex h-[100vh] items-center overflow-hidden bg-black pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          // src={aboutHero}
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=2000&auto=format&fit=crop"
          alt="Toronto Coast Truck Sales"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-300">
          <span>Home</span>

          <ChevronRight size={16} />

          <span className="font-medium text-red-500">About Us</span>
        </div>

        <h1 className="max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">
          About
          <span className="block text-red-600">
            Toronto Coast
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          We specialize in premium semi-trucks, trailers, financing
          solutions, and professional repair services, helping drivers
          and businesses move forward with confidence.
        </p>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default AboutHero;