import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTruck } from "../../services/truck.service";
import TruckForm from "../../Components/Admin/AddTruck/TruckForm";

const AddTruck = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    location: "",
    description: "",

    specifications: {
      engine: "",
      transmission: "",
      fuel: "",
      horsepower: "",
      color: "",
    },

    features: [],

    images: [],

    status: "available",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      // Simple validation
      if (
        !formData.title ||
        !formData.brand ||
        !formData.model ||
        !formData.year ||
        !formData.price
      ) {
        setError("Please fill all required fields.");
        return;
      }

      // Remove local File objects
      const payload = {
        ...formData,
        images: [],
      };

      await createTruck(payload);

      navigate("/admin/trucks");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create truck.");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="space-y-8">
    <div>
      <h1 className="text-4xl font-bold text-slate-800">
        Add Truck
      </h1>

      <p className="mt-2 text-slate-500">
        Create a new inventory listing.
      </p>
    </div>

    <TruckForm
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
      loading={loading}
      error={error}
      submitText="Create Truck"
    />
  </div>
);
};

export default AddTruck;
