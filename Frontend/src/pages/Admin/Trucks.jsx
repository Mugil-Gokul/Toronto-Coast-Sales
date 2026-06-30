import { useEffect, useState } from "react";
import { RefreshCcw, Truck } from "lucide-react";

import DeleteModal from "../../Components/Admin/Trucks/DeleteModal";

import { deleteTruck } from "../../services/truck.service";

import useTrucks from "../../hooks/useTrucks";

import TruckToolbar from "../../Components/Admin/Trucks/TruckToolbar";
import TruckTable from "../../Components/Admin/Trucks/TruckTable";
import Pagination from "../../Components/Admin/Trucks/Pagination";

import StatCard from "../../Components/Admin/Dashboard/StatCard";

import { CircleCheckBig, CircleX, DollarSign } from "lucide-react";

const Trucks = () => {
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  const [sort, setSort] = useState("newest");

  const [page, setPage] = useState(1);

  const [selectedTruck, setSelectedTruck] = useState(null);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [deleteLoading, setDeleteLoading] = useState(false);

  const { trucks, pagination, loading, error, refresh } = useTrucks({
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
    } catch (err) {
      console.error(err);
    } finally {
      setDeleteLoading(false);
    }
  };

  const stats = {
    totalTrucks: trucks.length,

    available: trucks.filter((t) => t.status === "available").length,

    sold: trucks.filter((t) => t.status === "sold").length,

    inventoryValue: trucks.reduce((sum, t) => sum + Number(t.price || 0), 0),
  };

  return (
    <div
      className="
      space-y-8
      "
    >
      {/* Header */}

      <div
        className="
        flex
        flex-col
        gap-4
        md:flex-row
        md:items-center
        md:justify-between
        "
      >
        <div>
          <h1
            className="
            text-3xl
            sm:text-4xl
            font-bold
            text-slate-800
            "
          >
            Truck Inventory
          </h1>

          <p
            className="
            mt-2
            text-slate-500
            "
          >
            Manage all trucks from one place.
          </p>
        </div>

        <button
          onClick={refresh}
          className="
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-white
          px-5
          py-3
          font-semibold
          text-slate-700
          shadow-sm
          border
          border-slate-100
          transition
          hover:bg-slate-100
          "
        >
          <RefreshCcw size={18} />
          Refresh
        </button>
      </div>

      {/* Stats */}

      <div
        className="
        grid
        gap-5
        sm:grid-cols-2
        xl:grid-cols-4
        "
      >
        <StatCard
          title="Total Trucks"
          value={stats.totalTrucks}
          icon={Truck}
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
          change="All inventory"
        />

        <StatCard
          title="Available"
          value={stats.available}
          icon={CircleCheckBig}
          iconBg="bg-green-100"
          iconColor="text-green-600"
          change="Ready for sale"
          changeColor="text-green-600"
        />

        <StatCard
          title="Sold"
          value={stats.sold}
          icon={CircleX}
          iconBg="bg-red-100"
          iconColor="text-red-500"
          change="Completed"
          changeColor="text-red-500"
        />

        <StatCard
          title="Inventory Value"
          value={`$${stats.inventoryValue.toLocaleString()}`}
          icon={DollarSign}
          iconBg="bg-orange-100"
          iconColor="text-orange-500"
          change="Current value"
          changeColor="text-orange-500"
        />
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

      {/* Content */}

      <div
        className="
        rounded-2xl
        bg-white
        p-4
        sm:p-6
        shadow-sm
        "
      >
        {loading && (
          <div className="py-20 text-center">
            <div
              className="
              mx-auto
              mb-4
              h-12
              w-12
              animate-spin
              rounded-full
              border-4
              border-orange-500
              border-t-transparent
              "
            />

            <p className="text-slate-500">Loading inventory...</p>
          </div>
        )}

        {error && (
          <div
            className="
            rounded-xl
            border
            border-red-200
            bg-red-50
            p-5
            "
          >
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

        {!loading && !error && trucks.length > 0 && (
          <>
            <TruckTable trucks={trucks} onDelete={handleDelete} />

            <Pagination pagination={pagination} page={page} setPage={setPage} />
          </>
        )}
      </div>

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
