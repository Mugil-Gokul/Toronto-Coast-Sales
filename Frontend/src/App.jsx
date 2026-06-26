import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Inventory from "./pages/Inventory/Inventory";
import TruckDetails from "./pages/Inventory/TruckDetails/TruckDetails";
import Services from "./pages/Services/Services";

import Login from "./Components/Login";

// admin
import Dashboard from "./pages/Admin/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";


function App() {
  return (
    <Routes>


      {/* Public Website */}
      <Route
        path="*"
        element={
          <>
            <Navbar />

            <Routes>

              <Route path="/" element={<Home />} />

              <Route 
                path="/inventory" 
                element={<Inventory />} 
              />

              <Route 
                path="/inventory/:id" 
                element={<TruckDetails />} 
              />

              <Route 
                path="/services" 
                element={<Services />} 
              />

              <Route 
                path="/about" 
                element={<About />} 
              />

              <Route 
                path="/contact" 
                element={<Contact />} 
              />

              <Route 
                path="/login" 
                element={<Login />} 
              />

            </Routes>


            <Footer />
          </>
        }
      />



      {/* Protected Admin Dashboard */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>

            <Dashboard />

          </ProtectedRoute>
        }
      />


    </Routes>
  );
}


export default App;