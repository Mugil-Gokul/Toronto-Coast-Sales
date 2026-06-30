import { FileText, ShieldCheck, Phone } from "lucide-react";

const TruckDescription = ({ truck }) => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-10 text-center sm:mb-16">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Vehicle Description
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl">
            Learn More About
            <span className="block text-red-600">
              This Vehicle
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Detailed information provided by our dealership to help you make an
            informed purchasing decision.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">

          {/* Truck Description */}

          <div className="lg:col-span-2">

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:rounded-[32px] sm:p-10">

              <div className="mb-6 flex items-center gap-4 sm:mb-8 sm:gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600 sm:h-16 sm:w-16 sm:rounded-2xl">
                  <FileText size={26} />
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    Vehicle Overview
                  </h3>

                  <p className="text-sm text-slate-500 sm:text-base">
                    Detailed description of this truck
                  </p>

                </div>

              </div>

              <div className="prose max-w-none text-slate-600 leading-7 sm:prose-lg sm:leading-8">

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

            <div className="rounded-3xl bg-slate-950 p-6 text-white sm:rounded-[32px] sm:p-8 lg:sticky lg:top-28">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 sm:h-16 sm:w-16 sm:rounded-2xl">
                <ShieldCheck size={26} />
              </div>

              <h3 className="mt-6 text-2xl font-black sm:mt-8 sm:text-3xl">
                Dealer Assurance
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8">
                Every truck in our inventory is professionally inspected,
                accurately represented, and prepared for sale. We believe in
                transparent pricing and providing dependable commercial vehicles
                that meet your business needs.
              </p>

              <ul className="mt-6 space-y-3 text-sm sm:mt-8 sm:space-y-4 sm:text-base">
                <li className="flex items-start gap-3">
                  ✓ Professionally inspected
                </li>

                <li className="flex items-start gap-3">
                  ✓ Transparent vehicle history
                </li>

                <li className="flex items-start gap-3">
                  ✓ Financing assistance available
                </li>

                <li className="flex items-start gap-3">
                  ✓ Dedicated after-sales support
                </li>
              </ul>

              <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-red-600 py-3.5 font-semibold transition hover:bg-red-700 sm:mt-10 sm:py-4">
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