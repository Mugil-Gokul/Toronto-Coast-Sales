import { useEffect, useState } from "react";

import InventoryCard from "../InventoryCard";

import { getInventory } from "../../../services/publicTruck.service";

const RelatedInventory = ({ truck }) => {
  const [relatedTrucks, setRelatedTrucks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedTrucks = async () => {
      if (!truck?.brand) return;

      try {
        setLoading(true);

        const response = await getInventory({
          brand: truck.brand,
          status: "available",
          limit: 4,
        });

        const filtered = response.trucks.filter(
          (item) => item._id !== truck._id
        );

        setRelatedTrucks(filtered.slice(0, 3));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedTrucks();
  }, [truck]);

  if (loading) return null;

  if (relatedTrucks.length === 0) return null;

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
            Explore more {truck.brand} trucks currently available in
            our inventory.
          </p>

        </div>

        {/* Related Trucks */}

        <div className="grid gap-8 lg:grid-cols-3">

          {relatedTrucks.map((item) => (
            <InventoryCard
              key={item._id}
              truck={item}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default RelatedInventory;