import { Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import Layout from "../Components/Admin/Layout";

import Dashboard from "../pages/Admin/Dashboard";
import Trucks from "../pages/Admin/Trucks";
import AddTruck from "../pages/Admin/AddTruck";
import EditTruck from "../pages/Admin/EditTruck";
import Settings from "../Components/Admin/Settings";

const AdminRoutes = () => {
  return (
    <Route
      path="/admin"
      element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }
    >
      <Route index element={<Dashboard />} />

      <Route path="dashboard" element={<Dashboard />} />

      <Route path="trucks" element={<Trucks />} />

      <Route path="add-truck" element={<AddTruck />} />

      <Route path="edit-truck/:id" element={<EditTruck />} />

      <Route path="settings" element={<Settings />} />
    </Route>
  );
};

export default AdminRoutes;
