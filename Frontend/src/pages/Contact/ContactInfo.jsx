import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    value: "(437) 990-3200",
    description: "Speak directly with our sales team.",
    link: "tel:+14379903200",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "trucksales@torontocoast.com",
    description: "We'll respond as soon as possible.",
    link: "mailto:trucksales@torontocoast.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Toronto, Ontario, Canada",
    description: "Stop by to explore our inventory.",
    link: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM",
    description: "Saturday & Sunday by appointment.",
    link: "#",
  },
];

const ContactInfo = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Contact Information
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            We're Ready To
            <span className="block text-red-600">
              Help You
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Whether you're interested in purchasing a truck, exploring
            financing options, or scheduling a repair, our team is here
            to assist you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.link}
                className="group rounded-3xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 font-semibold text-red-600 break-words">
                  {item.value}
                </p>

                <p className="mt-4 text-slate-600">
                  {item.description}
                </p>

                {item.link !== "#" && (
                  <div className="mt-6 flex items-center gap-2 font-semibold text-red-600">
                    Contact Now
                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;