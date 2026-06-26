import React from "react";
import {
  FileText,
  Wrench,
  Truck,
  ShieldCheck,
} from "lucide-react";

const TruckDescription = () => {
  const sections = [
    {
      icon: FileText,
      title: "Vehicle Overview",
      content:
        "This 2023 Volvo VNL 760 is a premium long-haul truck built for reliability, fuel efficiency, and driver comfort. Professionally maintained and thoroughly inspected, it delivers outstanding performance for fleet operators and independent owner-operators alike. Its aerodynamic design, spacious sleeper cab, and advanced safety systems make it an excellent choice for demanding commercial transportation.",
    },
    {
      icon: Wrench,
      title: "Condition & Maintenance",
      content:
        "The vehicle has undergone comprehensive inspections by certified technicians and has been serviced according to the manufacturer's maintenance schedule. Engine, transmission, suspension, braking system, and tires are all in excellent working condition, ensuring dependable operation from day one.",
    },
    {
      icon: Truck,
      title: "Ideal Applications",
      content:
        "Perfect for long-distance freight transportation, regional distribution, logistics companies, refrigerated hauling, dry van operations, and owner-operators seeking a dependable and fuel-efficient commercial truck capable of handling demanding routes.",
    },
    {
      icon: ShieldCheck,
      title: "Dealer Assurance",
      content:
        "Every truck in our inventory is carefully inspected before being listed for sale. We provide transparent vehicle information, competitive financing options, extended warranty programs, and dedicated customer support to help you purchase with complete confidence.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Detailed Description
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Learn More About
            <span className="block text-red-600">
              This Vehicle
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Everything you need to know before making your purchase,
            from condition and maintenance history to ideal applications
            and dealer assurance.
          </p>
        </div>

        {/* Content */}

        <div className="space-y-8">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:border-red-200 hover:shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                    <Icon size={30} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {section.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}

        <div className="mt-16 rounded-[32px] bg-slate-950 p-10 text-center">
          <h3 className="text-3xl font-black text-white">
            Ready to See This Truck in Person?
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-400">
            Schedule a visit to our dealership or contact our sales team
            for additional photos, inspection reports, financing
            options, and availability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TruckDescription;