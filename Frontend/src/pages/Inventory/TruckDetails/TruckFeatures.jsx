import React from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Sofa,
  Cpu,
  Gauge,
} from "lucide-react";

const featureGroups = [
  {
    title: "Safety",
    icon: ShieldCheck,
    features: [
      "ABS Braking System",
      "Lane Departure Warning",
      "Adaptive Cruise Control",
      "Collision Mitigation System",
      "Air Disc Brakes",
      "Electronic Stability Control",
    ],
  },
  {
    title: "Comfort",
    icon: Sofa,
    features: [
      "Premium Sleeper Cab",
      "Air Ride Driver Seat",
      "Automatic Climate Control",
      "Heated Mirrors",
      "Power Windows",
      "Leather Steering Wheel",
    ],
  },
  {
    title: "Technology",
    icon: Cpu,
    features: [
      "Touchscreen Display",
      "Bluetooth Connectivity",
      "Navigation System",
      "USB Charging Ports",
      "Backup Camera",
      "Apple CarPlay / Android Auto",
    ],
  },
  {
    title: "Performance",
    icon: Gauge,
    features: [
      "455 HP Engine",
      "Automatic I-Shift Transmission",
      "Air Ride Suspension",
      "Fuel Efficient Diesel Engine",
      "Heavy Duty Axles",
      "Long-Haul Configuration",
    ],
  },
];

const TruckFeatures = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Vehicle Features
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Everything Included
            <span className="block text-red-600">
              With This Truck
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Designed for comfort, safety, and long-haul performance with
            modern features that keep drivers productive on every trip.
          </p>
        </div>

        {/* Feature Groups */}

        <div className="grid gap-8 lg:grid-cols-2">
          {featureGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Title */}

                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                    <Icon size={30} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {group.title}
                    </h3>

                    <p className="text-slate-500">
                      Key vehicle highlights
                    </p>
                  </div>
                </div>

                {/* Features */}

                <div className="grid gap-4 sm:grid-cols-2">
                  {group.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 text-green-500"
                      />

                      <span className="text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TruckFeatures;