import { useEffect, useState } from "react";
import {
  RefreshCcw,
  Truck,
  CircleCheckBig,
  CircleX,
  DollarSign,
} from "lucide-react";

import DeleteModal from "../../Components/Admin/Trucks/DeleteModal";

import { deleteTruck } from "../../services/truck.service";

import useTrucks from "../../hooks/useTrucks";

import TruckToolbar from "../../Components/Admin/Trucks/TruckToolbar";
import TruckTable from "../../Components/Admin/Trucks/TruckTable";
import Pagination from "../../Components/Admin/Trucks/Pagination";

const Trucks = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);

  const [selectedTruck, setSelectedTruck] = useState(null);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [deleteLoading, setDeleteLoading] = useState(false);

const {
  trucks,
  pagination,
  loading,
  error,
  refresh,
} = useTrucks({
  page,
  search,
  status,
  sort,
});



useEffect(() => {
  setPage(1);
}, [search, status, sort]);

  const handleDelete = (truck) => {
    setSelectedTruck(truck);

    setDeleteOpen(true);
  };

  const confirmDelete = async () => {
    try {
      setDeleteLoading(true);

      await deleteTruck(selectedTruck._id);

      await refresh();

      setDeleteOpen(false);

      setSelectedTruck(null);
    } catch (error) {
      console.error(error);
    } finally {
      setDeleteLoading(false);
    }
  };

  // Statistics

  const totalTrucks = trucks.length;

  const availableTrucks = trucks.filter(
    (truck) => truck.status === "available",
  ).length;

  const soldTrucks = trucks.filter((truck) => truck.status === "sold").length;

  const inventoryValue = trucks.reduce(
    (total, truck) => total + Number(truck.price || 0),
    0,
  );

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-4xl font-bold text-slate-800">Truck Inventory</h1>

          <p className="mt-2 text-slate-500">
            Manage all trucks from one place.
          </p>
        </div>

        <button
          onClick={refresh}
          className="flex items-center justify-center gap-2 rounded-xl border bg-white px-5 py-3 font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
        >
          <RefreshCcw size={18} />
          Refresh
        </button>
      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-slate-500">Total Trucks</p>

            <Truck className="text-blue-600" size={24} />
          </div>

          <h2 className="mt-4 text-3xl font-bold">{totalTrucks}</h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-slate-500">Available</p>

            <CircleCheckBig className="text-green-600" size={24} />
          </div>

          <h2 className="mt-4 text-3xl font-bold">{availableTrucks}</h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-slate-500">Sold</p>

            <CircleX className="text-red-500" size={24} />
          </div>

          <h2 className="mt-4 text-3xl font-bold">{soldTrucks}</h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-slate-500">Inventory Value</p>

            <DollarSign className="text-orange-500" size={24} />
          </div>

          <h2 className="mt-4 text-2xl font-bold text-orange-600">
            ${inventoryValue.toLocaleString()}
          </h2>
        </div>
      </div>

      {/* Toolbar */}

      <TruckToolbar
  search={search}
  setSearch={setSearch}

  status={status}
  setStatus={setStatus}

  sort={sort}
  setSort={setSort}
/>

      {/* Table */}

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        {loading && (
          <div className="py-20 text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-t-transparent" />

            <p className="text-slate-500">Loading inventory...</p>
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <h3 className="font-semibold text-red-600">
              Failed to load trucks
            </h3>

            <p className="mt-2 text-red-500">{error}</p>
          </div>
        )}

        {!loading && !error && trucks.length === 0 && (
          <div className="py-20 text-center">
            <Truck className="mx-auto mb-4 text-slate-300" size={50} />

            <h3 className="text-xl font-semibold">No trucks found</h3>

            <p className="mt-2 text-slate-500">
              Add your first truck to inventory.
            </p>
          </div>
        )}

        {!loading &&
 !error &&
 trucks.length > 0 && (
  <>
    <TruckTable
      trucks={trucks}
      onDelete={handleDelete}
    />

    <Pagination
      pagination={pagination}
      page={page}
      setPage={setPage}
    />
  </>
)}
      </div>

      {/* Delete Modal */}

      <DeleteModal
        open={deleteOpen}
        truck={selectedTruck}
        loading={deleteLoading}
        onClose={() => {
          setDeleteOpen(false);

          setSelectedTruck(null);
        }}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default Trucks;
