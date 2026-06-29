import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import TruckForm from "../../Components/Admin/AddTruck/TruckForm";

import { getTruck, updateTruck } from "../../services/truck.service";

const EditTruck = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [pageLoading, setPageLoading] = useState(true);

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

  useEffect(() => {
    fetchTruck();
  }, []);

  const fetchTruck = async () => {
    try {
      const res = await getTruck(id);

      setFormData((prev) => ({
        ...prev,
        ...res.data,

        specifications: {
          ...prev.specifications,
          ...(res.data.specifications || {}),
        },

        features: res.data.features || [],
        images: res.data.images || [],
      }));
    } catch (err) {
      console.log(err);
    } finally {
      setPageLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await updateTruck(id, formData);

      navigate("/admin/trucks");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update truck.");
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) return <h2 className="text-xl">Loading...</h2>;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Edit Truck</h1>

        <p className="mt-2 text-slate-500">Update truck details.</p>
      </div>

      <TruckForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        loading={loading}
        error={error}
        submitText="Update Truck"
      />
    </div>
  );
};

export default EditTruck;
