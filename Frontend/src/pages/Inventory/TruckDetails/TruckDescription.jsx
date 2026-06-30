import { FileText, ShieldCheck, Phone } from "lucide-react";

const TruckDescription = ({ truck }) => {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Vehicle Description
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Learn More About
            <span className="block text-red-600">This Vehicle</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Detailed information provided by our dealership to help you make an
            informed purchasing decision.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Truck Description */}

          <div className="lg:col-span-2">
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-10">
              <div className="mb-8 flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                  <FileText size={30} />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    Vehicle Overview
                  </h3>

                  <p className="text-slate-500">
                    Detailed description of this truck
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-slate-600 leading-8">
                {truck.description ? (
                  <p>{truck.description}</p>
                ) : (
                  <p>
                    No detailed description has been added for this vehicle yet.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Dealer Assurance */}

          <div>
            <div className="sticky top-28 rounded-[32px] bg-slate-950 p-8 text-white">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600">
                <ShieldCheck size={30} />
              </div>

              <h3 className="mt-8 text-3xl font-black">Dealer Assurance</h3>

              <p className="mt-6 leading-8 text-slate-300">
                Every truck in our inventory is professionally inspected,
                accurately represented, and prepared for sale. We believe in
                transparent pricing and providing dependable commercial vehicles
                that meet your business needs.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  ✓ Professionally inspected
                </li>

                <li className="flex items-center gap-3">
                  ✓ Transparent vehicle history
                </li>

                <li className="flex items-center gap-3">
                  ✓ Financing assistance available
                </li>

                <li className="flex items-center gap-3">
                  ✓ Dedicated after-sales support
                </li>
              </ul>

              <button className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-red-600 py-4 font-semibold transition hover:bg-red-700">
                <Phone size={20} />
                Contact Sales Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruckDescription;
