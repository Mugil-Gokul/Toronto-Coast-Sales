import { useState } from "react";

import InventoryCard from "./InventoryCard";

import useInventory from "../../hooks/useInventory";

const InventoryGrid = ({ trucks, loading, error }) => {
  const [filters, setFilters] = useState({
    search: "",
    brand: "",
    status: "",
    sort: "newest",
    page: 1,
    limit: 9,
  });

  if (loading) {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-xl">Loading trucks...</h2>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-red-500">{error}</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white pb-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">
        {trucks.map((truck) => (
          <InventoryCard key={truck._id} truck={truck} />
        ))}
      </div>
    </section>
  );
};

export default InventoryGrid;
