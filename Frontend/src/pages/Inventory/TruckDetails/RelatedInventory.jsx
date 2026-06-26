import React from "react";
import InventoryCard from "../InventoryCard";

const relatedTrucks = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1501706362039-c6e80948f11f?w=1200&auto=format&fit=crop",
    title: "2022 Freightliner Cascadia",
    make: "Freightliner",
    model: "Cascadia",
    year: 2022,
    mileage: "132,000 km",
    transmission: "Automatic",
    location: "Toronto, ON",
    status: "Available",
    price: 114900,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&auto=format&fit=crop",
    title: "2021 Kenworth T680",
    make: "Kenworth",
    model: "T680",
    year: 2021,
    mileage: "168,000 km",
    transmission: "Manual",
    location: "Toronto, ON",
    status: "Available",
    price: 98900,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&auto=format&fit=crop",
    title: "2023 Peterbilt 579",
    make: "Peterbilt",
    model: "579",
    year: 2023,
    mileage: "95,000 km",
    transmission: "Automatic",
    location: "Toronto, ON",
    status: "Available",
    price: 139900,
  },
];

const RelatedInventory = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Similar Inventory
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            You May Also
            <span className="block text-red-600">
              Like These Trucks
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Browse similar commercial trucks that match your requirements
            and compare features, pricing, and specifications.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {relatedTrucks.map((truck) => (
            <InventoryCard
              key={truck.id}
              truck={truck}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedInventory;