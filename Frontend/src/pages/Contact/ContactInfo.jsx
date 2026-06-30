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
    // link: "tel:+14379903200",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "trucksales@torontocoast.com",
    description: "We'll respond as soon as possible.",
    // link: "mailto:trucksales@torontocoast.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Toronto, Ontario, Canada",
    description: "Stop by to explore our inventory.",
    // link: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM",
    description: "Saturday & Sunday by appointment.",
    // link: "#",
  },
];

const ContactInfo = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-xs font-semibold text-red-600 sm:text-sm">
            Contact Information
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl">
            We're Ready To
            <span className="block text-red-600">
              Help You
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Whether you're interested in purchasing a truck, exploring
            financing options, or scheduling a repair, our team is here
            to assist you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 xl:grid-cols-4">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.link}
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:scale-110 sm:h-16 sm:w-16">
                  <Icon size={26} className="sm:h-[30px] sm:w-[30px]" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 break-words text-base font-semibold text-red-600 sm:text-lg">
                  {item.value}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                  {item.description}
                </p>

                {/* {item.link !== "#" && (
                  <div className="mt-6 flex items-center gap-2 font-semibold text-red-600">
                    Contact Now

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                )} */}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;