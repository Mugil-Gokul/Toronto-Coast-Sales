import { useEffect, useState } from "react";
import { getTruckDetails } from "../services/publicTruck.service";

const useTruckDetails = (id) => {
  const [truck, setTruck] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const fetchTruck = async () => {
    try {
      setLoading(true);

      const response = await getTruckDetails(id);

      // response.data contains the truck
      setTruck(response.data);

      setError("");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to load truck."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchTruck();
    }
  }, [id]);

  return {
    truck,
    loading,
    error,
    refresh: fetchTruck,
  };
};

export default useTruckDetails;