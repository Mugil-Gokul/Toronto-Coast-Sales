import { useState } from "react";

import InventoryHero from "./InventoryHero";
import InventoryFilters from "./InventoryFilters";
import InventoryGrid from "./InventoryGrid";
import InventoryPagination from "./InventoryPagination";

import GetInTouch from "../../Components/GetInTouch";

import useInventory from "../../hooks/useInventory";

const Inventory = () => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 9,

    search: "",
    brand: "",
    status: "",
    sort: "newest",
  });

  const { trucks, pagination, loading, error } = useInventory(filters);

  return (
    <>
      <InventoryHero />

      <InventoryFilters
        filters={filters}
        setFilters={setFilters}
        total={pagination.totalTrucks}
        trucks={trucks}
      />

      <InventoryGrid trucks={trucks} loading={loading} error={error} />

      <InventoryPagination
        pagination={pagination}
        filters={filters}
        setFilters={setFilters}
      />

      <GetInTouch />
    </>
  );
};

export default Inventory;
