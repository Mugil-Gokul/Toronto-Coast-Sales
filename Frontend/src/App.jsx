import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Inventory from "./pages/Inventory/Inventory";
import TruckDetails from "./pages/Inventory/TruckDetails/TruckDetails";
import Services from "./pages/Services/Services";
import Login from "./Components/Login";

import AdminRoutes from "./routes/AdminRoutes";

function App() {
  const location = useLocation();

  const hideLayout =
    location.pathname.startsWith("/admin") ||
    location.pathname === "/login";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:id" element={<TruckDetails />} />

        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        {AdminRoutes()}
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;