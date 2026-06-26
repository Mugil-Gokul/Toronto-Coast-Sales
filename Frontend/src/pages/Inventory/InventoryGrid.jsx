import React from "react";
import InventoryCard from "./InventoryCard";

const trucks = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1501706362039-c6e80948f11f?w=1200&auto=format&fit=crop",
    title: "2023 Volvo VNL 760",
    make: "Volvo",
    model: "VNL 760",
    year: 2023,
    mileage: "145,000 km",
    transmission: "Automatic",
    location: "Toronto, ON",
    status: "Available",
    price: 129900,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1501706362039-c6e80948f11f?w=1200&auto=format&fit=crop",
    title: "2022 Freightliner Cascadia",
    make: "Freightliner",
    model: "Cascadia",
    year: 2022,
    mileage: "120,000 km",
    transmission: "Automatic",
    location: "Toronto, ON",
    status: "Available",
    price: 114900,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1501706362039-c6e80948f11f?w=1200&auto=format&fit=crop",
    title: "2021 Kenworth T680",
    make: "Kenworth",
    model: "T680",
    year: 2021,
    mileage: "180,000 km",
    transmission: "Manual",
    location: "Toronto, ON",
    status: "Available",
    price: 99900,
  },
];

const InventoryGrid = () => {
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">
        {trucks.map((truck) => (
          <InventoryCard key={truck.id} truck={truck} />
        ))}
      </div>
    </section>
  );
};

export default InventoryGrid;