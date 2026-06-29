import { Link } from "react-router-dom";

import useDashboard from "../../hooks/useDashboard";

import DashboardStats from "../../Components/Admin/Dashboard/DashboardStats";

import RecentTrucks from "../../Components/Admin/Dashboard/RecentTrucks";

const Dashboard = () => {
  const { stats, recentTrucks, loading, error } = useDashboard();

  if (loading) return <h2>Loading dashboard...</h2>;

  if (error) return <h2 className="text-red-500">{error}</h2>;

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold text-slate-800">Dashboard</h1>

        <p className="mt-2 text-slate-500">
          Welcome back! Here's your inventory overview.
        </p>
      </div>

      {/* Stats */}

      <DashboardStats stats={stats} />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Trucks */}

        <RecentTrucks trucks={recentTrucks} />

        {/* Quick Actions */}

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold text-slate-800">
            Quick Actions
          </h2>

          <div className="space-y-4">
            {/* Add Truck */}

            <Link
              to="/admin/add-truck"
              className="
              flex
              w-full
              items-center
              justify-center
              rounded-xl
              bg-orange-500
              py-3
              font-semibold
              text-white
              transition
              hover:bg-orange-600
              "
            >
              + Add New Truck
            </Link>

            {/* Inventory */}

            <Link
              to="/admin/trucks"
              className="
              flex
              w-full
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              py-3
              font-semibold
              text-slate-700
              transition
              hover:bg-slate-100
              "
            >
              View Inventory
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
