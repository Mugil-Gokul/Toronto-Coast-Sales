import React from "react";
import { ChevronRight, PhoneCall } from "lucide-react";
// import contactHero from "../assets/contact/contact-hero.jpg";

const ContactHero = () => {
  return (
    <section className="relative flex h-[100vh] items-center overflow-hidden bg-black pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          // src={contactHero}
          src="https://images.unsplash.com/photo-1501706362039-c6e80948f11f?w=2000&auto=format&fit=crop"
          alt="Contact Toronto Coast Truck Sales"
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
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

          <span className="font-medium text-red-500">
            Contact Us
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
            <PhoneCall size={16} />
            We're Here to Help
          </div>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Get In
            <span className="block text-red-600">
              Touch
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Whether you're looking for a quality truck, financing
            options, trailer sales, or repair services, our team is
            ready to answer your questions and help you find the right
            solution.
          </p>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default ContactHero;